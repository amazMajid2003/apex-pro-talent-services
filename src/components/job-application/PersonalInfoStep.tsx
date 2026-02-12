import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface PersonalInfoData {
  lastName: string;
  firstName: string;
  initials: string;
  sin: string;
  dob: string;
  sex: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phoneHome: string;
  phoneCell: string;
  emergencyName: string;
  emergencyPhone: string;
  highSchool: string;
  college: string;
  university: string;
  // Work history 1
  wh1Position: string;
  wh1Salary: string;
  wh1Supervisor: string;
  wh1Phone: string;
  wh1From: string;
  wh1To: string;
  wh1ReasonLeft: string;
  // Work history 2
  wh2Position: string;
  wh2Salary: string;
  wh2Supervisor: string;
  wh2Phone: string;
  wh2From: string;
  wh2To: string;
  wh2ReasonLeft: string;
  // Position categories
  positions: string[];
  // Availability
  employmentType: string;
  availability: Record<string, boolean>;
  safetyShoes: string;
  transportation: string;
}

interface Props {
  data: PersonalInfoData;
  onChange: (data: Partial<PersonalInfoData>) => void;
}

const industrialOptions = ["General Help", "Heavy Lifting", "Lighting/Lifting", "Packing", "Ingredient Mixer", "Food Handler", "Line Operator", "Material Handler", "Cleaner"];
const skillsOptions = ["Forklift", "Tig Welding", "Mig Welding", "Construction", "Wood Work"];
const officeOptions = ["Receptionist", "Data Entry", "Switch Board", "Book Keeping"];
const driverOptions = ["AZ", "DZ", "GZ", "G"];
const machineOptions = ["CNC", "Lathe", "Mould"];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const shifts = ["Day", "Afternoon", "Night"];

export const PersonalInfoStep = ({ data, onChange }: Props) => {
  const togglePosition = (pos: string) => {
    const current = data.positions || [];
    const updated = current.includes(pos) ? current.filter(p => p !== pos) : [...current, pos];
    onChange({ positions: updated });
  };

  const toggleAvailability = (key: string) => {
    onChange({ availability: { ...data.availability, [key]: !data.availability[key] } });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" required value={data.lastName} onChange={e => onChange({ lastName: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" required value={data.firstName} onChange={e => onChange({ firstName: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="initials">Initials</Label>
            <Input id="initials" value={data.initials} onChange={e => onChange({ initials: e.target.value })} className="mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <Label htmlFor="sin">SIN</Label>
            <Input id="sin" value={data.sin} onChange={e => onChange({ sin: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="dob">Date of Birth *</Label>
            <Input id="dob" type="date" required value={data.dob} onChange={e => onChange({ dob: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label>Sex *</Label>
            <RadioGroup value={data.sex} onValueChange={v => onChange({ sex: v })} className="flex gap-4 mt-2">
              <div className="flex items-center gap-2"><RadioGroupItem value="M" id="sexM" /><Label htmlFor="sexM">Male</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem value="F" id="sexF" /><Label htmlFor="sexF">Female</Label></div>
            </RadioGroup>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <Label htmlFor="address">Address *</Label>
            <Input id="address" required value={data.address} onChange={e => onChange({ address: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="city">City / Province *</Label>
            <Input id="city" required value={data.city} onChange={e => onChange({ city: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="postalCode">Postal Code *</Label>
            <Input id="postalCode" required value={data.postalCode} onChange={e => onChange({ postalCode: e.target.value })} className="mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="phoneHome">Phone (Home)</Label>
            <Input id="phoneHome" type="tel" value={data.phoneHome} onChange={e => onChange({ phoneHome: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phoneCell">Phone (Cell) *</Label>
            <Input id="phoneCell" type="tel" required value={data.phoneCell} onChange={e => onChange({ phoneCell: e.target.value })} className="mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="emergencyName">Emergency Contact Name</Label>
            <Input id="emergencyName" value={data.emergencyName} onChange={e => onChange({ emergencyName: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
            <Input id="emergencyPhone" type="tel" value={data.emergencyPhone} onChange={e => onChange({ emergencyPhone: e.target.value })} className="mt-1" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Level of Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="highSchool">High School</Label>
            <Input id="highSchool" value={data.highSchool} onChange={e => onChange({ highSchool: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="college">College</Label>
            <Input id="college" value={data.college} onChange={e => onChange({ college: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="university">University</Label>
            <Input id="university" value={data.university} onChange={e => onChange({ university: e.target.value })} className="mt-1" />
          </div>
        </div>
      </div>

      {/* Work History */}
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Work History</h3>
        {[1, 2].map(n => {
          const prefix = `wh${n}` as const;
          return (
            <div key={n} className="mb-6 p-4 rounded-lg bg-muted/50">
              <p className="font-semibold text-sm text-muted-foreground mb-3">{n === 1 ? "Present / Most Recent Employer" : "Previous Employer"}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Position Held</Label><Input value={(data as any)[`${prefix}Position`]} onChange={e => onChange({ [`${prefix}Position`]: e.target.value })} className="mt-1" /></div>
                <div><Label>Salary</Label><Input value={(data as any)[`${prefix}Salary`]} onChange={e => onChange({ [`${prefix}Salary`]: e.target.value })} className="mt-1" /></div>
                <div><Label>Supervisor</Label><Input value={(data as any)[`${prefix}Supervisor`]} onChange={e => onChange({ [`${prefix}Supervisor`]: e.target.value })} className="mt-1" /></div>
                <div><Label>Phone</Label><Input type="tel" value={(data as any)[`${prefix}Phone`]} onChange={e => onChange({ [`${prefix}Phone`]: e.target.value })} className="mt-1" /></div>
                <div><Label>From</Label><Input type="date" value={(data as any)[`${prefix}From`]} onChange={e => onChange({ [`${prefix}From`]: e.target.value })} className="mt-1" /></div>
                <div><Label>To</Label><Input type="date" value={(data as any)[`${prefix}To`]} onChange={e => onChange({ [`${prefix}To`]: e.target.value })} className="mt-1" /></div>
                <div className="md:col-span-2"><Label>Reason Left</Label><Input value={(data as any)[`${prefix}ReasonLeft`]} onChange={e => onChange({ [`${prefix}ReasonLeft`]: e.target.value })} className="mt-1" /></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Positions */}
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
                    <Checkbox checked={data.positions?.includes(opt)} onCheckedChange={() => togglePosition(opt)} id={`pos-${opt}`} />
                    <Label htmlFor={`pos-${opt}`} className="text-sm font-normal cursor-pointer">{opt}</Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 border-b border-border pb-2">Availability</h3>
        <div className="flex gap-6 mb-4">
          <RadioGroup value={data.employmentType} onValueChange={v => onChange({ employmentType: v })} className="flex gap-6">
            <div className="flex items-center gap-2"><RadioGroupItem value="full-time" id="ft" /><Label htmlFor="ft">Full-Time</Label></div>
            <div className="flex items-center gap-2"><RadioGroupItem value="part-time" id="pt" /><Label htmlFor="pt">Part-Time</Label></div>
          </RadioGroup>
        </div>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border border-border rounded">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-left border-r border-border">Shift</th>
                {days.map(d => <th key={d} className="p-2 text-center border-r border-border">{d.slice(0, 3)}</th>)}
              </tr>
            </thead>
            <tbody>
              {shifts.map(shift => (
                <tr key={shift} className="border-t border-border">
                  <td className="p-2 font-medium border-r border-border">{shift}</td>
                  {days.map(day => {
                    const key = `${shift}-${day}`;
                    return (
                      <td key={day} className="p-2 text-center border-r border-border">
                        <Checkbox checked={!!data.availability?.[key]} onCheckedChange={() => toggleAvailability(key)} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label>Do you have safety shoes?</Label>
            <RadioGroup value={data.safetyShoes} onValueChange={v => onChange({ safetyShoes: v })} className="flex gap-4 mt-1">
              <div className="flex items-center gap-2"><RadioGroupItem value="yes" id="ss-y" /><Label htmlFor="ss-y">Yes</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem value="no" id="ss-n" /><Label htmlFor="ss-n">No</Label></div>
            </RadioGroup>
          </div>
          <div>
            <Label>Will you use:</Label>
            <RadioGroup value={data.transportation} onValueChange={v => onChange({ transportation: v })} className="flex gap-4 mt-1">
              <div className="flex items-center gap-2"><RadioGroupItem value="own-car" id="tr-c" /><Label htmlFor="tr-c">Own Car</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem value="ride" id="tr-r" /><Label htmlFor="tr-r">Ride</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem value="transit" id="tr-t" /><Label htmlFor="tr-t">Transit</Label></div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
