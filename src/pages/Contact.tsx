 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
 
 const Contact = () => {
   const { toast } = useToast();
   const [formData, setFormData] = useState({
     userType: "",
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
     company: "",
     subject: "",
     message: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast({
       title: "Message Sent",
       description: "Thank you for contacting us. A representative will be in touch within 24 hours.",
     });
     setFormData({
       userType: "",
       firstName: "",
       lastName: "",
       email: "",
       phone: "",
       company: "",
       subject: "",
       message: "",
     });
   };
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-24">
         {/* Hero Section */}
         <section className="bg-primary py-8">
           <div className="container-main px-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center"
             >
               <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                 Find Help & Support Here
               </h1>
               <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                 Whether you are a candidate or a current associate, a current client or prospective client, you can use this form to ask questions or to report an issue. We've always got you covered.
               </p>
             </motion.div>
           </div>
         </section>
 
         {/* Contact Form */}
         <section className="py-10 bg-background">
           <div className="container-main px-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl mx-auto"
             >
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                   Contact Us
                 </h2>
                 <p className="text-muted-foreground">
                   We are here to help. Whether you are looking for work, are already working with us, or would like to find out more about working with us. A Representative in your area will be in touch within 24 hours.
                 </p>
               </div>
 
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <Label htmlFor="userType">I am a...</Label>
                   <Select
                     value={formData.userType}
                     onValueChange={(value) => setFormData({ ...formData, userType: value })}
                   >
                     <SelectTrigger className="mt-1">
                       <SelectValue placeholder="Select your role" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="job-seeker">Job Seeker</SelectItem>
                       <SelectItem value="current-associate">Current Associate</SelectItem>
                       <SelectItem value="employer">Employer / Client</SelectItem>
                       <SelectItem value="prospective-client">Prospective Client</SelectItem>
                       <SelectItem value="other">Other</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
 
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                     <Label htmlFor="firstName">First Name *</Label>
                     <Input
                       id="firstName"
                       required
                       value={formData.firstName}
                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                       className="mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="lastName">Last Name *</Label>
                     <Input
                       id="lastName"
                       required
                       value={formData.lastName}
                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                       className="mt-1"
                     />
                   </div>
                 </div>
 
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                     <Label htmlFor="email">Email Address *</Label>
                     <Input
                       id="email"
                       type="email"
                       required
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       className="mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="phone">Phone Number</Label>
                     <Input
                       id="phone"
                       type="tel"
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                       className="mt-1"
                     />
                   </div>
                 </div>
 
                 {(formData.userType === "employer" || formData.userType === "prospective-client") && (
                   <div>
                     <Label htmlFor="company">Company Name</Label>
                     <Input
                       id="company"
                       value={formData.company}
                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                       className="mt-1"
                     />
                   </div>
                 )}
 
                 <div>
                   <Label htmlFor="subject">Subject *</Label>
                   <Select
                     value={formData.subject}
                     onValueChange={(value) => setFormData({ ...formData, subject: value })}
                   >
                     <SelectTrigger className="mt-1">
                       <SelectValue placeholder="Select a subject" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                       <SelectItem value="job-application">Job Application Status</SelectItem>
                       <SelectItem value="hiring-needs">Hiring Needs</SelectItem>
                       <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                       <SelectItem value="feedback">Feedback</SelectItem>
                       <SelectItem value="support">Technical Support</SelectItem>
                       <SelectItem value="other">Other</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
 
                 <div>
                   <Label htmlFor="message">Message *</Label>
                   <Textarea
                     id="message"
                     required
                     rows={6}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     placeholder="Please describe how we can help you..."
                     className="mt-1"
                   />
                 </div>
 
                 <Button type="submit" size="lg" className="w-full">
                   Submit
                 </Button>
               </form>
             </motion.div>
           </div>
         </section>
 
          {/* Contact Info */}
          <section className="py-8 bg-muted/30">
            <div className="container-main px-4">
              {/* Address & Phone */}
              <div className="text-center mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span>6790 Davand Dr Unit #6, Mississauga, ON L5T 2G5</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Phone className="w-5 h-5 text-secondary" />
                    <a href="tel:4169481058" className="hover:text-secondary transition-colors">416-948-1058</a>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    General Inquiries
                  </h3>
                  <a href="mailto:Info@atspro.ca" className="text-muted-foreground hover:text-secondary transition-colors">Info@atspro.ca</a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Sales
                  </h3>
                  <a href="mailto:Sales@atspro.ca" className="text-muted-foreground hover:text-secondary transition-colors">Sales@atspro.ca</a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Jobs
                  </h3>
                  <a href="mailto:jobs@atspro.ca" className="text-muted-foreground hover:text-secondary transition-colors">jobs@atspro.ca</a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Accounts
                  </h3>
                  <a href="mailto:Accounts@atspro.ca" className="text-muted-foreground hover:text-secondary transition-colors">Accounts@atspro.ca</a>
                </div>
              </div>
            </div>
          </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Contact;