import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Download, Send } from "lucide-react";
import jsPDF from "jspdf";

const industrialOptions = ["General Help", "Heavy Lifting", "Lighting/Lifting", "Packing", "Ingredient Mixer", "Food Handler", "Line Operator", "Material Handler", "Cleaner"];
const skillsOptions = ["Forklift", "Tig Welding", "Mig Welding", "Construction", "Wood Work"];
const officeOptions = ["Receptionist", "Data Entry", "Switch Board", "Book Keeping"];
const driverOptions = ["AZ", "DZ", "GZ", "G"];
const machineOptions = ["CNC", "Lathe", "Mould"];

const initialData = {
  lastName: "",
  firstName: "",
  sin: "",
  dob: "",
  sex: "",
  address: "",
  cityProvince: "",
  postalCode: "",
  highSchool: "",
  college: "",
  university: "",
  positions: [] as string[],
};

const generatePDF = (data: typeof initialData) => {
  const doc = new jsPDF();
  let y = 15;
  const lm = 15;

  const addTitle = (text: string) => {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(text, 105, y, { align: "center" });
    y += 8;
  };
  const addSection = (text: string) => {
    if (y > 270) { doc.addPage(); y = 15; }
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(text, lm, y);
    y += 6;
  };
  const addField = (label: string, value: string) => {
    if (y > 275) { doc.addPage(); y = 15; }
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(`${label}: `, lm, y);
    doc.setFont("helvetica", "normal");
    doc.text(value || "—", lm + doc.getTextWidth(`${label}: `), y);
    y += 5;
  };

  addTitle("APPLICATION FOR EMPLOYMENT");
  addTitle("Apex Pro Talent Services");
  y += 4;
  addSection("Personal Information");
  addField("Name", `${data.lastName}, ${data.firstName}`);
  addField("SIN", data.sin);
  addField("Date of Birth", data.dob);
  addField("Sex", data.sex);
  addField("Address", data.address);
  addField("City / Province", data.cityProvince);
  addField("Postal Code", data.postalCode);
  y += 3;
  addSection("Level of Education");
  addField("High School", data.highSchool);
  addField("College", data.college);
  addField("University", data.university);
  y += 3;
  addSection("Position Applied For");
  addField("Positions", data.positions.join(", ") || "—");

  return doc;
};

const JobApplication = () => {
  const { toast } = useToast();
  const [data, setData] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);

  const update = (patch: Partial<typeof initialData>) => setData(prev => ({ ...prev, ...patch }));

  const togglePosition = (pos: string) => {
    const current = data.positions || [];
    const updated = current.includes(pos) ? current.filter(p => p !== pos) : [...current, pos];
    update({ positions: updated });
  };

  const handleDownload = () => {
    const doc = generatePDF(data);
    doc.save(`Job_Application_${data.firstName}_${data.lastName}.pdf`);
    toast({ title: "Downloaded!", description: "Your application has been saved as a PDF." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.dob || !data.sex || !data.address || !data.cityProvince || !data.postalCode) {
      toast({ title: "Required Fields", description: "Please fill in all required fields marked with *.", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    // Download PDF
    handleDownload();

    // Send data to Google Sheet
    const sheetData = {
      first_name: data.firstName,
      last_name: data.lastName,
      sin: data.sin,
      date_of_birth: data.dob,
      sex: data.sex,
      address: data.address,
      city_province: data.cityProvince,
      postal_code: data.postalCode,
      education_level: [data.highSchool, data.college, data.university].filter(Boolean).join(", "),
      position_applied: data.positions,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyn8QnTRAiBNE1YMWZbJqwWbsodHz51EUbKBuquTKg1QZiqNiatf5pcvJRQEzg1BAnu/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData),
      });
      toast({ title: "Application Submitted!", description: "Your application has been saved and the PDF downloaded." });
      setData(initialData);
    } catch (err) {
      console.error("Sheet submission error:", err);
      toast({ title: "Application Saved", description: "PDF downloaded. There was an issue saving online — please email the PDF to info@atspro.ca.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-8">
          <div className="container-main px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
                Application for Employment
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Fill out the form below to submit your application. Your information is kept confidential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-8 bg-background">
          <div className="container-main px-4 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required value={data.lastName} onChange={e => update({ lastName: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required value={data.firstName} onChange={e => update({ firstName: e.target.value })} className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="sin">SIN</Label>
                    <Input id="sin" value={data.sin} onChange={e => update({ sin: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" required value={data.dob} onChange={e => update({ dob: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label>Sex *</Label>
                    <RadioGroup value={data.sex} onValueChange={v => update({ sex: v })} className="flex gap-4 mt-2">
                      <div className="flex items-center gap-2"><RadioGroupItem value="M" id="sexM" /><Label htmlFor="sexM">Male</Label></div>
                      <div className="flex items-center gap-2"><RadioGroupItem value="F" id="sexF" /><Label htmlFor="sexF">Female</Label></div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" required value={data.address} onChange={e => update({ address: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cityProvince">City / Province *</Label>
                    <Input id="cityProvince" required value={data.cityProvince} onChange={e => update({ cityProvince: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input id="postalCode" required value={data.postalCode} onChange={e => update({ postalCode: e.target.value })} className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Level of Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="highSchool">High School</Label>
                    <Input id="highSchool" value={data.highSchool} onChange={e => update({ highSchool: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="college">College</Label>
                    <Input id="college" value={data.college} onChange={e => update({ college: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="university">University</Label>
                    <Input id="university" value={data.university} onChange={e => update({ university: e.target.value })} className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Position */}
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Position You Are Applying For</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    { title: "Industrial", options: industrialOptions },
                    { title: "Skills", options: skillsOptions },
                    { title: "Office", options: officeOptions },
                    { title: "Driver", options: driverOptions },
                    { title: "Machine Operator", options: machineOptions },
                  ].map(cat => (
                    <div key={cat.title}>
                      <p className="font-semibold text-sm mb-2">{cat.title}</p>
                      <div className="space-y-2">
                        {cat.options.map(opt => (
                          <div key={opt} className="flex items-center gap-2">
                            <Checkbox checked={data.positions.includes(opt)} onCheckedChange={() => togglePosition(opt)} id={`pos-${opt}`} />
                            <Label htmlFor={`pos-${opt}`} className="text-sm font-normal cursor-pointer">{opt}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-6 border-t border-border">
                <Button type="button" variant="outline" onClick={handleDownload} className="gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
                <Button type="submit" disabled={submitting} className="gap-2">
                  <Send className="w-4 h-4" /> {submitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;
