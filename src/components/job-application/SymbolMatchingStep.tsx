import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Flame, CircleAlert, Skull, TestTube, Radiation, Biohazard } from "lucide-react";

interface SymbolData {
  symbolAnswers: Record<string, string>;
  agreementChecked: boolean;
  signatureDate: string;
}

interface Props {
  data: SymbolData;
  onChange: (data: Partial<SymbolData>) => void;
}

const symbols = [
  { id: "sym1", icon: Flame, label: "Flammable symbol" },
  { id: "sym2", icon: TestTube, label: "Reactive symbol" },
  { id: "sym3", icon: Skull, label: "Poison/Toxic symbol" },
  { id: "sym4", icon: CircleAlert, label: "Compressed Gas symbol" },
  { id: "sym5", icon: Radiation, label: "Oxidizing symbol" },
  { id: "sym6", icon: Biohazard, label: "Biohazardous symbol" },
];

const definitions = [
  "1. POISONS",
  "2. REACTIVE",
  "3. FLAMMABLE",
  "4. COMPRESSED GAS",
  "5. OXIDIZING",
  "6. TOXIC / BIOHAZARDOUS",
];

export const SymbolMatchingStep = ({ data, onChange }: Props) => {
  const updateAnswer = (id: string, val: string) => {
    onChange({ symbolAnswers: { ...data.symbolAnswers, [id]: val } });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">5. Match the Symbol</h3>
        <p className="text-sm text-muted-foreground mb-6">Match the symbol with the correct definition by writing the number in the space provided beside the symbol.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Symbols */}
          <div className="space-y-6">
            {symbols.map((sym, idx) => {
              const Icon = sym.icon;
              return (
                <motion.div
                  key={sym.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/40 border border-border"
                >
                  <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <Input
                    value={data.symbolAnswers?.[sym.id] || ""}
                    onChange={e => updateAnswer(sym.id, e.target.value)}
                    placeholder="Enter #"
                    className="w-24 text-center"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Definitions */}
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="font-semibold text-sm mb-4">Definitions:</p>
            <div className="space-y-3">
              {definitions.map(def => (
                <p key={def} className="text-sm font-medium p-2 rounded bg-background">{def}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="p-6 rounded-lg border border-border bg-muted/30">
        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Terms and Conditions</h3>
        <div className="text-sm text-muted-foreground space-y-2 mb-6 max-h-48 overflow-y-auto pr-2">
          <p>• All employees must wear safety shoes. Shoes should be kept clean and free of any dirt and be in good conditions.</p>
          <p>• Where our clients require, facemasks must be properly worn to cover the employee's nose and mouth. No jewellery can be worn in any areas of the clients' plant. Nail polish, false nails or false eyelashes are not to be worn. All employees must wear hairnets and beard nets when necessary while in plant.</p>
          <p>• You are legally permitted to work in Canada and you are not drawing any benefits e.g. social assistance, Unemployment Insurance, which prohibits you from work.</p>
          <p>• Pay cheques are issued every week on Friday between 3:00 pm to 5:00 pm. Our office hours are from 9:00 am to 5:00 pm Monday to Friday.</p>
          <p>• Don't walk off the job. If you are not satisfied, call our office immediately or at the end of the shift. If you walk off the job you will <strong>NOT BE PAID FOR THAT DAY</strong>.</p>
          <p>• In case of an accident you <strong>MUST</strong> call our office as soon as possible. Please inform 12 hours in advance if you are not available for the next shift. If you fail to do so you will lose one day pay.</p>
          <p>• You will not report to the customer to be hired directly to perform the same or similar duties during or after one year working through the company. You will not compete against the company, who has acquainted or provided the customer with manpower in the past, present or future.</p>
          <p>• You confirm that you are in good health to perform the tasks stated in the application form.</p>
          <p>• 4% vacation pay will be paid based on your per hour rate.</p>
          <p>• You agree to work over 8 hours a day based on the requirement of our clients.</p>
        </div>

        <div className="flex items-start gap-3 mb-4 p-4 rounded bg-background border border-border">
          <input
            type="checkbox"
            checked={data.agreementChecked}
            onChange={e => onChange({ agreementChecked: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-primary text-primary"
            id="agree-terms"
          />
          <Label htmlFor="agree-terms" className="text-sm leading-relaxed cursor-pointer">
            The information I have provided is correct to the best of my knowledge and I understand that any misrepresentation may disqualify me from employment or may cause my dismissal. I have read and agree to abide by the listed terms and conditions. *
          </Label>
        </div>

        <div className="max-w-xs">
          <Label htmlFor="sigDate">Date *</Label>
          <Input id="sigDate" type="date" required value={data.signatureDate} onChange={e => onChange({ signatureDate: e.target.value })} className="mt-1" />
        </div>
      </div>
    </motion.div>
  );
};
