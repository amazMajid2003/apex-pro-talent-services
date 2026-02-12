import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface AgreementsData {
  vacationAckName: string;
  payRate: string;
  vacationPay: string;
  totalPay: string;
  vacationSigDate: string;
  overtimeSigDate: string;
  // WHMIS
  whmisW: string;
  whmisH: string;
  whmisM: string;
  whmisI: string;
  whmisS: string;
  whmisThreeParts: string;
  // Yes/No questions
  safetyEquipment: string;
  readLabels: string;
  informSupervisor: string;
  leaveWithout: string;
  touchChemical: string;
  // Math
  math: Record<string, string>;
}

interface Props {
  data: AgreementsData;
  onChange: (data: Partial<AgreementsData>) => void;
}

const additionProblems = [
  { a: 93, b: 16 }, { a: 62, b: 34 }, { a: 39, b: 68 }, { a: 73, b: 52 }, { a: 65, b: 43 },
];
const subtractionProblems = [
  { a: 86, b: 63 }, { a: 96, b: 85 }, { a: 77, b: 56 }, { a: 49, b: 38 }, { a: 65, b: 34 },
];
const multiplicationProblems = [
  { a: 65, b: 3 }, { a: 96, b: 5 }, { a: 87, b: 2 }, { a: 23, b: 7 }, { a: 56, b: 8 },
];
const divisionProblems = [
  { a: 45, b: 5 }, { a: 30, b: 3 }, { a: 28, b: 7 }, { a: 8, b: 2 }, { a: 16, b: 8 },
];

const yesNoQuestions = [
  { key: "safetyEquipment", q: "You should always wear proper equipment while working." },
  { key: "readLabels", q: "You should always read labels before using any kind of chemical." },
  { key: "informSupervisor", q: "Inform your supervisor if you are not sure about anything." },
  { key: "leaveWithout", q: "Should you leave work at any time without informing your supervisor?" },
  { key: "touchChemical", q: "If you see any kind of chemical spilled on the floor, should you touch or smell the chemical?" },
];

export const AgreementsQuizStep = ({ data, onChange }: Props) => {
  const updateMath = (key: string, val: string) => {
    onChange({ math: { ...data.math, [key]: val } });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
      {/* Vacation Pay Agreement */}
      <div className="p-6 rounded-lg border border-border bg-muted/30">
        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Agreement — Vacation Pay</h3>
        <p className="text-sm text-muted-foreground mb-4">
          I, <span className="font-medium text-foreground">{data.vacationAckName || "___"}</span>, acknowledge that vacation pay is included in my total hourly pay rate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div><Label>Your Name *</Label><Input required value={data.vacationAckName} onChange={e => onChange({ vacationAckName: e.target.value })} className="mt-1" /></div>
          <div><Label>Pay Rate ($)</Label><Input value={data.payRate} onChange={e => onChange({ payRate: e.target.value })} className="mt-1" /></div>
          <div><Label>4% Vacation Pay ($)</Label><Input value={data.vacationPay} onChange={e => onChange({ vacationPay: e.target.value })} className="mt-1" /></div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">I also agree to have my vacation pay paid on every pay cheque.</p>
        <div><Label>Date</Label><Input type="date" value={data.vacationSigDate} onChange={e => onChange({ vacationSigDate: e.target.value })} className="mt-1 max-w-xs" /></div>
      </div>

      {/* Overtime Agreement */}
      <div className="p-6 rounded-lg border border-border bg-muted/30">
        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Agreement — Overtime</h3>
        <p className="text-sm text-muted-foreground mb-2">
          I agree to work more than 8 hours per (to maximum of 13 hours per day) or more than 48 hours in a week (to max of 60 hours per week).
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          I acknowledge that I have received the latest sheet "access hours of work" as published by the Ministry of Labour.
        </p>
        <div><Label>Date</Label><Input type="date" value={data.overtimeSigDate} onChange={e => onChange({ overtimeSigDate: e.target.value })} className="mt-1 max-w-xs" /></div>
      </div>

      {/* WHMIS Quiz */}
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">WHMIS Quiz</h3>

        <div className="mb-6">
          <p className="font-semibold text-sm mb-3">1. What does WHMIS stand for?</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {["W", "H", "M", "I", "S"].map(letter => (
              <div key={letter}>
                <Label className="text-xs text-muted-foreground">{letter}</Label>
                <Input value={(data as any)[`whmis${letter}`] || ""} onChange={e => onChange({ [`whmis${letter}`]: e.target.value } as any)} className="mt-1" placeholder={letter} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-sm mb-3">2. The three main parts of WHMIS are:</p>
          <Input value={data.whmisThreeParts} onChange={e => onChange({ whmisThreeParts: e.target.value })} placeholder="Enter the three main parts..." />
        </div>

        <div className="mb-6">
          <p className="font-semibold text-sm mb-4">3. Please answer YES or NO to the following:</p>
          <div className="space-y-4">
            {yesNoQuestions.map(q => (
              <div key={q.key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded bg-muted/40">
                <p className="text-sm flex-1">{q.q}</p>
                <RadioGroup value={(data as any)[q.key] || ""} onValueChange={v => onChange({ [q.key]: v } as any)} className="flex gap-4 shrink-0">
                  <div className="flex items-center gap-1"><RadioGroupItem value="yes" id={`${q.key}-y`} /><Label htmlFor={`${q.key}-y`} className="text-sm">Yes</Label></div>
                  <div className="flex items-center gap-1"><RadioGroupItem value="no" id={`${q.key}-n`} /><Label htmlFor={`${q.key}-n`} className="text-sm">No</Label></div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </div>

        {/* Math */}
        <div>
          <p className="font-semibold text-sm mb-4">4. Please complete the math questions below:</p>
          {[
            { title: "Addition", problems: additionProblems, op: "+" },
            { title: "Subtraction", problems: subtractionProblems, op: "−" },
            { title: "Multiplication", problems: multiplicationProblems, op: "×" },
            { title: "Division", problems: divisionProblems, op: "÷" },
          ].map(section => (
            <div key={section.title} className="mb-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">{section.title}</p>
              <div className="grid grid-cols-5 gap-3">
                {section.problems.map((p, i) => {
                  const key = `${section.title}-${i}`;
                  return (
                    <div key={key} className="text-center p-2 rounded bg-muted/40">
                      <p className="text-sm font-mono font-bold">{p.a}</p>
                      <p className="text-sm font-mono font-bold border-b border-foreground/30 pb-1 mb-1">{section.op} {p.b}</p>
                      <Input value={data.math?.[key] || ""} onChange={e => updateMath(key, e.target.value)} className="text-center h-8 text-sm" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
