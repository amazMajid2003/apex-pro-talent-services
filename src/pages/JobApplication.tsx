import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PersonalInfoStep } from "@/components/job-application/PersonalInfoStep";
import { AgreementsQuizStep } from "@/components/job-application/AgreementsQuizStep";
import { SymbolMatchingStep } from "@/components/job-application/SymbolMatchingStep";
import { ChevronLeft, ChevronRight, Download, Send } from "lucide-react";
import jsPDF from "jspdf";

const initialPersonalInfo = {
  lastName: "", firstName: "", initials: "", sin: "", dob: "", sex: "",
  address: "", city: "", province: "", postalCode: "",
  phoneHome: "", phoneCell: "", emergencyName: "", emergencyPhone: "",
  highSchool: "", college: "", university: "",
  wh1Position: "", wh1Salary: "", wh1Supervisor: "", wh1Phone: "", wh1From: "", wh1To: "", wh1ReasonLeft: "",
  wh2Position: "", wh2Salary: "", wh2Supervisor: "", wh2Phone: "", wh2From: "", wh2To: "", wh2ReasonLeft: "",
  positions: [] as string[],
  employmentType: "",
  availability: {} as Record<string, boolean>,
  safetyShoes: "",
  transportation: "",
};

const initialAgreements = {
  vacationAckName: "", payRate: "", vacationPay: "", totalPay: "",
  vacationSigDate: "", overtimeSigDate: "",
  whmisW: "", whmisH: "", whmisM: "", whmisI: "", whmisS: "",
  whmisThreeParts: "",
  safetyEquipment: "", readLabels: "", informSupervisor: "", leaveWithout: "", touchChemical: "",
  math: {} as Record<string, string>,
};

const initialSymbol = {
  symbolAnswers: {} as Record<string, string>,
  agreementChecked: false,
  signatureDate: "",
};

const steps = [
  { label: "Personal Information", description: "Employment details & work history" },
  { label: "Agreements & Quiz", description: "Vacation, overtime & WHMIS quiz" },
  { label: "Symbol Matching & Terms", description: "WHMIS symbols & agreement" },
];

const generatePDF = (personal: typeof initialPersonalInfo, agreements: typeof initialAgreements, symbols: typeof initialSymbol) => {
  const doc = new jsPDF();
  let y = 15;
  const lm = 15;
  const pw = 180;

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

  // Page 1
  addTitle("APPLICATION FOR EMPLOYMENT");
  addTitle("Apex Pro Talent Services");
  y += 4;
  addSection("Personal Information");
  addField("Name", `${personal.lastName}, ${personal.firstName} ${personal.initials}`);
  addField("SIN", personal.sin);
  addField("Date of Birth", personal.dob);
  addField("Sex", personal.sex);
  addField("Address", `${personal.address}, ${personal.city}, ${personal.postalCode}`);
  addField("Phone (Home)", personal.phoneHome);
  addField("Phone (Cell)", personal.phoneCell);
  addField("Emergency Contact", `${personal.emergencyName} — ${personal.emergencyPhone}`);
  y += 3;
  addSection("Education");
  addField("High School", personal.highSchool);
  addField("College", personal.college);
  addField("University", personal.university);
  y += 3;
  addSection("Work History — Present/Most Recent Employer");
  addField("Position", personal.wh1Position);
  addField("Salary", personal.wh1Salary);
  addField("Supervisor", personal.wh1Supervisor);
  addField("Phone", personal.wh1Phone);
  addField("Period", `${personal.wh1From} — ${personal.wh1To}`);
  addField("Reason Left", personal.wh1ReasonLeft);
  y += 3;
  addSection("Work History — Previous Employer");
  addField("Position", personal.wh2Position);
  addField("Salary", personal.wh2Salary);
  addField("Supervisor", personal.wh2Supervisor);
  addField("Phone", personal.wh2Phone);
  addField("Period", `${personal.wh2From} — ${personal.wh2To}`);
  addField("Reason Left", personal.wh2ReasonLeft);
  y += 3;
  addField("Positions Applied For", personal.positions.join(", "));
  addField("Employment Type", personal.employmentType);
  addField("Safety Shoes", personal.safetyShoes);
  addField("Transportation", personal.transportation);

  // Availability
  const avail = Object.entries(personal.availability).filter(([, v]) => v).map(([k]) => k);
  addField("Available Shifts", avail.join(", ") || "None selected");

  // Page 2
  doc.addPage();
  y = 15;
  addTitle("AGREEMENTS & WHMIS QUIZ");
  y += 4;
  addSection("Vacation Pay Agreement");
  addField("Name", agreements.vacationAckName);
  addField("Pay Rate", agreements.payRate);
  addField("4% Vacation Pay", agreements.vacationPay);
  addField("Date", agreements.vacationSigDate);
  y += 3;
  addSection("Overtime Agreement");
  addField("Date", agreements.overtimeSigDate);
  y += 3;
  addSection("WHMIS Quiz");
  addField("WHMIS stands for", `${agreements.whmisW} ${agreements.whmisH} ${agreements.whmisM} ${agreements.whmisI} ${agreements.whmisS}`);
  addField("Three main parts", agreements.whmisThreeParts);
  addField("Wear proper equipment", agreements.safetyEquipment);
  addField("Read labels", agreements.readLabels);
  addField("Inform supervisor", agreements.informSupervisor);
  addField("Leave without informing", agreements.leaveWithout);
  addField("Touch chemical spill", agreements.touchChemical);
  y += 3;
  addSection("Math Answers");
  Object.entries(agreements.math).forEach(([k, v]) => addField(k, v));

  // Page 3
  doc.addPage();
  y = 15;
  addTitle("SYMBOL MATCHING & TERMS");
  y += 4;
  addSection("Symbol Matching Answers");
  Object.entries(symbols.symbolAnswers).forEach(([k, v]) => addField(k, v));
  y += 3;
  addField("Terms Agreed", symbols.agreementChecked ? "Yes" : "No");
  addField("Signature Date", symbols.signatureDate);

  return doc;
};

const JobApplication = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [agreements, setAgreements] = useState(initialAgreements);
  const [symbolData, setSymbolData] = useState(initialSymbol);

  const handleNext = () => {
    if (step === 0 && (!personalInfo.firstName || !personalInfo.lastName || !personalInfo.dob || !personalInfo.phoneCell)) {
      toast({ title: "Required Fields", description: "Please fill in all required fields marked with *.", variant: "destructive" });
      return;
    }
    setStep(s => Math.min(s + 1, 2));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownload = () => {
    const doc = generatePDF(personalInfo, agreements, symbolData);
    doc.save(`Job_Application_${personalInfo.firstName}_${personalInfo.lastName}.pdf`);
    toast({ title: "Downloaded!", description: "Your application has been saved as a PDF." });
  };

  const handleSubmit = async () => {
    if (!symbolData.agreementChecked || !symbolData.signatureDate) {
      toast({ title: "Agreement Required", description: "Please agree to the terms and provide a date.", variant: "destructive" });
      return;
    }

    // Download PDF
    handleDownload();

    // Send data to Google Sheet
    const sheetData = {
      first_name: personalInfo.firstName,
      last_name: personalInfo.lastName,
      initials: personalInfo.initials,
      sin: personalInfo.sin,
      date_of_birth: personalInfo.dob,
      sex: personalInfo.sex,
      address: personalInfo.address,
      city_province: personalInfo.city + ", " + personalInfo.province,
      postal_code: personalInfo.postalCode,
      phone_home: personalInfo.phoneHome,
      phone_cell: personalInfo.phoneCell,
      emergency_contact_name: personalInfo.emergencyName,
      emergency_contact_phone: personalInfo.emergencyPhone,
      education_level: [personalInfo.highSchool, personalInfo.college, personalInfo.university].filter(Boolean).join(", "),
      recent_position: personalInfo.wh1Position,
      recent_salary: personalInfo.wh1Salary,
      recent_supervisor: personalInfo.wh1Supervisor,
      recent_phone: personalInfo.wh1Phone,
      recent_from: personalInfo.wh1From,
      recent_to: personalInfo.wh1To,
      recent_reason_left: personalInfo.wh1ReasonLeft,
      previous_position: personalInfo.wh2Position,
      previous_salary: personalInfo.wh2Salary,
      previous_supervisor: personalInfo.wh2Supervisor,
      previous_phone: personalInfo.wh2Phone,
      previous_from: personalInfo.wh2From,
      previous_to: personalInfo.wh2To,
      previous_reason_left: personalInfo.wh2ReasonLeft,
      position_applied: personalInfo.positions,
      availability: Object.entries(personalInfo.availability).filter(([,v])=>v).map(([k])=>k),
      safety_shoes: personalInfo.safetyShoes,
      transportation: personalInfo.transportation,
      agreement_name: agreements.vacationAckName,
      pay_rate: agreements.payRate,
      vacation_pay: agreements.vacationPay,
      agreement_date: agreements.vacationSigDate,
      overtime_agreement_date: agreements.overtimeSigDate,
      whmis_full_form: `${agreements.whmisW}${agreements.whmisH}${agreements.whmisM}${agreements.whmisI}${agreements.whmisS}`,
      whmis_parts: agreements.whmisThreeParts,
      safety_equipment: agreements.safetyEquipment,
      read_labels: agreements.readLabels,
      inform_supervisor: agreements.informSupervisor,
      leave_without_notice: agreements.leaveWithout,
      touch_spill: agreements.touchChemical,
      math_answers: Object.values(agreements.math),
      symbol_flammable: symbolData.symbolAnswers.flammable,
      symbol_reactive: symbolData.symbolAnswers.reactive,
      symbol_poison: symbolData.symbolAnswers.poison,
      symbol_compressed_gas: symbolData.symbolAnswers.gas,
      symbol_oxidizing: symbolData.symbolAnswers.oxidizing,
      symbol_biohazard: symbolData.symbolAnswers.bio,
      terms_agreed: symbolData.agreementChecked ? "Yes" : "No",
      final_date: symbolData.signatureDate,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyn8QnTRAiBNE1YMWZbJqwWbsodHz51EUbKBuquTKg1QZiqNiatf5pcvJRQEzg1BAnu/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData),
      });
      toast({ title: "Application Submitted!", description: "Your application has been saved and the PDF downloaded." });
    } catch (err) {
      console.error("Sheet submission error:", err);
      toast({ title: "Application Saved", description: "PDF downloaded. There was an issue saving online — please email the PDF to info@atspro.ca.", variant: "destructive" });
    }

    // Open mailto as backup
    const subject = encodeURIComponent(`Job Application — ${personalInfo.firstName} ${personalInfo.lastName}`);
    const body = encodeURIComponent(`Please find attached the job application for ${personalInfo.firstName} ${personalInfo.lastName}.\n\nPhone: ${personalInfo.phoneCell}\nPositions: ${personalInfo.positions.join(", ")}\n\nNote: Please attach the downloaded PDF to this email before sending.`);
    window.open(`mailto:info@atspro.ca?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-primary py-6">
          <div className="container-main px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
                Application for Employment
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Complete all three sections below to submit your application. Your information is kept confidential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Step Indicator */}
        <section className="bg-muted border-b border-border">
          <div className="container-main px-4 py-4">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => i <= step && setStep(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                    i === step ? "bg-primary text-primary-foreground font-semibold" :
                    i < step ? "bg-primary/10 text-primary font-medium cursor-pointer" :
                    "bg-background text-muted-foreground"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    i === step ? "bg-primary-foreground text-primary" :
                    i < step ? "bg-primary text-primary-foreground" :
                    "bg-border text-muted-foreground"
                  }`}>{i + 1}</span>
                  <span className="hidden md:inline">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-8 bg-background">
          <div className="container-main px-4 max-w-4xl mx-auto">
            {step === 0 && (
              <PersonalInfoStep data={personalInfo} onChange={d => setPersonalInfo(prev => ({ ...prev, ...d }))} />
            )}
            {step === 1 && (
              <AgreementsQuizStep data={agreements} onChange={d => setAgreements(prev => ({ ...prev, ...d }))} />
            )}
            {step === 2 && (
              <SymbolMatchingStep data={symbolData} onChange={d => setSymbolData(prev => ({ ...prev, ...d }))} />
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button variant="outline" onClick={handleBack} disabled={step === 0} className="gap-2">
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>

              <div className="flex gap-3">
                {step === 2 && (
                  <>
                    <Button variant="outline" onClick={handleDownload} className="gap-2">
                      <Download className="w-4 h-4" /> Download PDF
                    </Button>
                    <Button onClick={handleSubmit} className="gap-2">
                      <Send className="w-4 h-4" /> Submit Application
                    </Button>
                  </>
                )}
                {step < 2 && (
                  <Button onClick={handleNext} className="gap-2">
                    Next <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;
