 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { Button } from "@/components/ui/button";
 import { ArrowUp, Users, Award, GraduationCap, Headphones, Bell } from "lucide-react";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import jobSeekerHero from "@/assets/job-seeker-hero.jpg";
 import ctaBanner from "@/assets/cta-banner.jpg";
 import blogRobots from "@/assets/blog-robots.jpg";
 import blogSoftSkills from "@/assets/blog-soft-skills.jpg";
 import blogAnalytics from "@/assets/blog-analytics.jpg";
 
const stats = [
    { value: "24/7", label: "round-the-clock workforce solutions" },
    { value: "10+", label: "industries served across Canada" },
    { value: "100%", label: "Canadian-owned and operated" },
  ];
 
 const services = [
   {
     icon: Users,
     title: "Career Success",
     description: "You will find your way to work with us. Read more about the benefits of working for us, skills training programs offered, the types of jobs we offer and what you can expect.",
   },
   {
     icon: GraduationCap,
     title: "Skills Training Program",
     description: "Associates are offered skills training via programs such as MyPath and powerYOU that offers a variety of course selections.",
   },
   {
     icon: Award,
     title: "Earn Medals of Recognition",
     description: "As an Associate, you can earn medals that appear in your profile and are a testament to your success at work!",
   },
   {
     icon: Headphones,
     title: "Working with your Dedicated Talent Agent",
     description: "Our Talent Agents and Recruiters hold local market expertise and are dedicated to using that knowledge to guide, support and connect you to jobs.",
   },
 ];
 
 const insights = [
   {
     image: blogRobots,
     title: "Handling with Care: Safety Tips for a Forklift Operator",
   },
   {
     image: blogSoftSkills,
     title: "Tips for Writing an Effective Resume and Cover Letter",
   },
   {
     image: blogAnalytics,
     title: "Behind Every Great Office: The Role of Administrative Assistants",
   },
 ];
 
 const ForJobSeekers = () => {
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
                 Find your new job through us!
               </h1>
               <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl">
                 Looking to take the next step on your career ladder? Chances are you'll find an appealing, suitable job close to home in our job listings – full-time, part-time, temporary, permanent, you name it.
               </p>
               <Link to="/search">
                 <Button size="lg" variant="secondary" className="w-fit text-lg px-8">
                   Search Jobs
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
                 src={jobSeekerHero}
                 alt="Professional job seeker"
                 className="w-80 h-auto object-cover rounded-lg shadow-2xl"
               />
             </motion.div>
           </div>
         </section>
 
         {/* Stats Section */}
         <section className="py-12 bg-secondary">
           <div className="container-main px-4">
             <div className="grid md:grid-cols-3 gap-8">
               {stats.map((stat, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex items-center gap-4"
                 >
                   <div className="flex items-center gap-2">
                     <span className="text-4xl font-bold text-secondary-foreground">{stat.value}</span>
                     <ArrowUp className="w-6 h-6 text-secondary-foreground" />
                   </div>
                   <p className="text-secondary-foreground/80">{stat.label}</p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* MyPath Section */}
          <section className="py-10 bg-background">
           <div className="container-main px-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-3xl"
             >
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                 MyPath
               </h2>
               <p className="text-lg text-muted-foreground mb-6">
                 MyPath is our global development program, focused on supporting and developing careers through the personalized advice and training we offer our employees. With MyPath, we provide a sustainable solution to the talent shortage employers face.
               </p>
                <Link to="/search">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
             </motion.div>
           </div>
         </section>
 
         {/* What We Do For You */}
         <section className="py-10 bg-muted/30">
           <div className="container-main px-4">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
               What We Do For You
             </h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {services.map((service, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                 >
                   <service.icon className="w-12 h-12 text-secondary mb-4" />
                   <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">
                     {service.title}
                   </h3>
                   <p className="text-muted-foreground text-sm">
                     {service.description}
                   </p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* CTA Banner */}
         <section className="relative py-10">
           <div className="absolute inset-0">
             <img
               src={ctaBanner}
               alt="Career growth"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
           </div>
           <div className="container-main relative z-10 px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
               Create a profile. We'll help you find your next job.
             </h2>
             <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
               When you're looking for a new job, it's important to find a position that suits your skills and traits – and how you want to work.
             </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Create a Profile
                </Button>
              </Link>
           </div>
         </section>
 
         {/* Job Seeker Insights */}
         <section className="py-10 bg-background">
           <div className="container-main px-4">
             <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                 Job Seeker Insights
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
 
         {/* Job Alerts CTA */}
         <section className="py-8 bg-primary">
           <div className="container-main px-4 text-center">
             <Bell className="w-12 h-12 text-secondary mx-auto mb-4" />
             <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
               You can get job alerts straight to your inbox!
             </h2>
             <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
               When you create a profile, you can set up alerts about jobs you are interested in right on your dashboard!
             </p>
              <Link to="/search">
                <Button size="lg" variant="secondary">
                  Create a Job Vacancy Alert
                </Button>
              </Link>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default ForJobSeekers;