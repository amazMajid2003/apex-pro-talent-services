 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { Button } from "@/components/ui/button";
 import { Users, Lightbulb, Briefcase, TrendingUp, Plane, Car, Zap, Building2, Landmark, Hotel, Pill, Package, Factory, HeartPulse, Laptop, Radio } from "lucide-react";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import employersHero from "@/assets/employers-hero.jpg";
 import warehouseWorkers from "@/assets/warehouse-workers.jpg";
 import ctaBanner from "@/assets/cta-banner.jpg";
 import careerTraining from "@/assets/career-training.jpg";
 import blogRobots from "@/assets/blog-robots.jpg";
 import blogSoftSkills from "@/assets/blog-soft-skills.jpg";
 import blogAnalytics from "@/assets/blog-analytics.jpg";
 
 const steps = [
   {
     icon: Users,
     title: "We Ask & Listen",
     description: "What workforce challenges give you heartburn? What are your KPIs? What's your culture like? Our years of experience means we know the right questions to ask.",
   },
   {
     icon: Lightbulb,
     title: "We Solve",
     description: "Using what we learned, we recommend the best course of action to help you achieve your goals through intelligent data and processes.",
   },
   {
     icon: Briefcase,
     title: "We Get To Work",
     description: "We deliver results by attracting better talent, hiring the right people, and making sure the best people stay with your organization.",
   },
   {
     icon: TrendingUp,
     title: "We Get Better",
     description: "We are always learning, looking for ways to get better. We perform ongoing Workforce Reviews to fine-tune our approach.",
   },
 ];
 
 const industries = [
   { icon: Plane, name: "Aerospace" },
   { icon: Car, name: "Automotive" },
   { icon: Zap, name: "Energy" },
   { icon: Building2, name: "Finance & Insurance" },
   { icon: Landmark, name: "Government" },
   { icon: Hotel, name: "Hospitality" },
   { icon: Pill, name: "Life Sciences" },
   { icon: Package, name: "Logistics & Distribution" },
   { icon: Factory, name: "Manufacturing" },
   { icon: HeartPulse, name: "Medical Device" },
   { icon: Laptop, name: "Technology" },
   { icon: Radio, name: "Telecommunications" },
 ];
 
 const insights = [
   {
     image: blogAnalytics,
     title: "Enhance Workforce Planning with MPact Advantage",
   },
   {
     image: blogRobots,
     title: "Putting Industrial Robots on the Payroll",
   },
   {
     image: blogSoftSkills,
     title: "8 Steps to Building Your Own Skilled Technical Workforce",
   },
 ];
 
 const ForEmployers = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-24">
         {/* Hero Section */}
         <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
           <div className="container-main relative z-10 grid lg:grid-cols-2 gap-8 px-4 py-8">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="flex flex-col justify-center"
             >
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                 Workforce and Staffing Solutions
               </h1>
               <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl">
                 Gain rapid access to a highly qualified and productive pool of candidates. We optimize your workforce with staffing and solutions tailored to your needs.
               </p>
               <Link to="/contact">
                 <Button size="lg" variant="secondary" className="w-fit text-lg px-8">
                   Contact Us
                 </Button>
               </Link>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="hidden lg:flex items-center justify-center"
             >
               <img
                 src={employersHero}
                 alt="Professional workforce solutions"
                 className="w-80 h-auto object-cover rounded-lg shadow-2xl"
               />
             </motion.div>
           </div>
         </section>
 
         {/* Value Prop */}
          <section className="py-10 bg-background">
           <div className="container-main px-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto text-center"
             >
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                 A winning workforce is humanly possible.
               </h2>
               <p className="text-lg text-muted-foreground">
                 We optimize your workforce with staffing and solutions. Our Recruiters have built strong relationships with the talent in your community and take great care to match the right person to the right job. Our workforce solutions ensure your employees are doing their job and doing it well as they see a path and direction for growth alongside you.
               </p>
             </motion.div>
           </div>
         </section>
 
         {/* Manufacturing Solutions */}
          <section className="py-10 bg-muted/30">
           <div className="container-main px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <img
                   src={warehouseWorkers}
                   alt="Warehouse workers"
                   className="rounded-lg shadow-xl"
                 />
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                   Explore
                 </span>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
                   Our Manufacturing Solutions
                 </h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   The Right Fit at the Right Time. Our expert manufacturing solutions leverage the full potential of your organization's workforce by designing solutions specifically for your organization's requirements.
                 </p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg">
                      Find Out More
                    </Button>
                  </Link>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* Steps to Success */}
          <section className="py-10 bg-background">
           <div className="container-main px-4">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
               Our Steps to Success
             </h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {steps.map((step, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="text-center"
                 >
                   <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <step.icon className="w-8 h-8 text-secondary" />
                   </div>
                   <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                     {step.title}
                   </h3>
                   <p className="text-muted-foreground text-sm">
                     {step.description}
                   </p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Staffing Solutions CTA */}
         <section className="relative py-10">
           <div className="absolute inset-0">
             <img
               src={ctaBanner}
               alt="Staffing solutions"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
           </div>
           <div className="container-main relative z-10 px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
               Our Staffing Solutions
             </h2>
             <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
               Ready to start hiring the right candidates? Whether you need one outstanding worker or 100, we're ready to deliver. Direct hire, project staffing, flexibility staffing and onsite management — We have all the resources and tools you need.
             </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Explore Staffing Solutions
                </Button>
              </Link>
           </div>
         </section>
 
         {/* Industries We Serve */}
          <section className="py-10 bg-background">
           <div className="container-main px-4">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
               Industries We Serve
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
               {industries.map((industry, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.05 }}
                   className="flex flex-col items-center p-4 rounded-lg border border-border bg-card hover:border-secondary hover:shadow-md transition-all cursor-pointer"
                 >
                   <industry.icon className="w-10 h-10 text-secondary mb-3" />
                   <span className="text-sm font-medium text-card-foreground text-center">
                     {industry.name}
                   </span>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* MyPath for Employers */}
         <section className="py-10 bg-muted/30">
           <div className="container-main px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <img
                   src={careerTraining}
                   alt="MyPath training"
                   className="rounded-lg shadow-xl"
                 />
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                   MyPath
                 </h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   We provide skill building programs so your team members can grow their skills and gain certifications while working. Invest in your workforce's future.
                 </p>
                  <Link to="/job-seekers">
                    <Button variant="secondary" size="lg">
                      Read More
                    </Button>
                  </Link>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* Workforce Insights */}
         <section className="py-10 bg-background">
           <div className="container-main px-4">
             <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                 Workforce Insights
               </h2>
               <Link to="/blog">
                 <Button variant="outline">See All</Button>
               </Link>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
               {insights.map((insight, index) => (
                 <motion.article
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="group cursor-pointer"
                 >
                   <div className="aspect-video rounded-lg overflow-hidden mb-4">
                     <img
                       src={insight.image}
                       alt={insight.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     />
                   </div>
                   <h3 className="font-heading font-semibold text-lg text-card-foreground group-hover:text-secondary transition-colors">
                     {insight.title}
                   </h3>
                   <span className="text-secondary text-sm font-medium mt-2 inline-block">
                     Read More
                   </span>
                 </motion.article>
               ))}
             </div>
           </div>
         </section>
 
         {/* Contact CTA */}
         <section className="py-8 bg-primary">
           <div className="container-main px-4 text-center">
             <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
               Let's Connect
             </h2>
             <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
               Tell us what your business needs are. We will create value together with you.
             </p>
             <Link to="/contact">
               <Button size="lg" variant="secondary">
                 Contact Us
               </Button>
             </Link>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default ForEmployers;