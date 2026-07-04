// Uploads a resume to the connected Google Drive account into a
// "Jobs resume" folder under My Drive, naming it FirstName_LastName_Resume.<ext>

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_drive";
const FOLDER_NAME = "Jobs resume";

function authHeaders() {
  const lovable = Deno.env.get("LOVABLE_API_KEY");
  const drive = Deno.env.get("GOOGLE_DRIVE_API_KEY");
  if (!lovable || !drive) throw new Error("Missing gateway credentials");
  return {
    Authorization: `Bearer ${lovable}`,
    "X-Connection-Api-Key": drive,
  };
}

async function findOrCreateFolder(): Promise<string> {
  // Search for an existing folder we created previously
  const q = encodeURIComponent(
    `name='${FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`
  );
  const listRes = await fetch(
    `${GATEWAY}/drive/v3/files?q=${q}&fields=files(id,name)&spaces=drive`,
    { headers: authHeaders() }
  );
  if (!listRes.ok) {
    const text = await listRes.text();
    throw new Error(`Drive list failed ${listRes.status}: ${text}`);
  }
  const listData = await listRes.json();
  if (listData.files && listData.files.length > 0) {
    return listData.files[0].id;
  }

  // Create folder in My Drive root
  const createRes = await fetch(`${GATEWAY}/drive/v3/files`, {
    method: "POST",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({
      name: FOLDER_NAME,
      mimeType: "application/vnd.google-apps.folder",
    }),
  });
  if (!createRes.ok) {
    const text = await createRes.text();
    throw new Error(`Drive folder create failed ${createRes.status}: ${text}`);
  }
  const created = await createRes.json();
  return created.id;
}

function sanitize(name: string) {
  return name.trim().replace(/[^\w\-]+/g, "_").replace(/_+/g, "_");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const form = await req.formData();
    const file = form.get("file");
    const firstName = String(form.get("firstName") ?? "").trim();
    const lastName = String(form.get("lastName") ?? "").trim();

    if (!(file instanceof File)) {
      return new Response(JSON.stringify({ error: "Missing file" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!firstName || !lastName) {
      return new Response(JSON.stringify({ error: "Missing firstName/lastName" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      return new Response(JSON.stringify({ error: "Only PDF or Word documents are allowed" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) {
      return new Response(JSON.stringify({ error: "File exceeds 10MB limit" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Derive extension
    const origName = file.name || "resume";
    const dot = origName.lastIndexOf(".");
    const ext = dot >= 0 ? origName.slice(dot + 1).toLowerCase() : "pdf";
    const finalName = `${sanitize(firstName)}_${sanitize(lastName)}_Resume.${ext}`;

    const folderId = await findOrCreateFolder();

    // Multipart upload to Drive
    const boundary = "lovable-" + crypto.randomUUID();
    const metadata = {
      name: finalName,
      parents: [folderId],
    };
    const fileBytes = new Uint8Array(await file.arrayBuffer());
    const enc = new TextEncoder();
    const pre = enc.encode(
      `--${boundary}\r\n` +
        `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
        JSON.stringify(metadata) +
        `\r\n--${boundary}\r\n` +
        `Content-Type: ${file.type}\r\n\r\n`
    );
    const post = enc.encode(`\r\n--${boundary}--`);
    const body = new Uint8Array(pre.length + fileBytes.length + post.length);
    body.set(pre, 0);
    body.set(fileBytes, pre.length);
    body.set(post, pre.length + fileBytes.length);

    const uploadRes = await fetch(
      `${GATEWAY}/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink`,
      {
        method: "POST",
        headers: {
          ...authHeaders(),
          "Content-Type": `multipart/related; boundary=${boundary}`,
        },
        body,
      }
    );

    if (!uploadRes.ok) {
      const text = await uploadRes.text();
      console.error("Drive upload failed", uploadRes.status, text);
      return new Response(
        JSON.stringify({ error: "Drive upload failed", status: uploadRes.status, detail: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const uploaded = await uploadRes.json();
    return new Response(
      JSON.stringify({
        id: uploaded.id,
        name: uploaded.name,
        webViewLink: uploaded.webViewLink ?? null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("upload-resume error", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
