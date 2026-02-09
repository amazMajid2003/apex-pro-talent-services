 import { motion } from "framer-motion";
 import findWorkImage from "@/assets/find-work-fast.jpg";
 import peopleFirstImage from "@/assets/people-first.jpg";
 import diversityImage from "@/assets/diversity-inclusion.jpg";
 
 const features = [
   {
     title: "Find Work Fast",
     description:
       "We receive new job openings every single day, from companies in transportation, logistics, engineering and financial services—and more! Find work fast by browsing our job openings and connecting with a recruiter.",
     image: findWorkImage,
   },
   {
     title: "People First",
     description:
       "Advance your career with online training courses, e-learning programs and personalized career guidance. When you're an active associate, you'll qualify for it all!",
     image: peopleFirstImage,
   },
   {
     title: "Diversity & Inclusion",
     description:
       "Work with us to help improve accessibility and opportunity within your local area. We develop and support programs that upskill underrepresented populations for meaningful and sustainable work.",
     image: diversityImage,
   },
 ];
 
 export const WhyChooseUsSection = () => {
   return (
     <section className="section-padding bg-muted">
       <div className="container-main">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
            className="heading-section text-center text-foreground mb-12"
          >
            Why Apex Pro Talent Services
         </motion.h2>
 
         <div className="grid md:grid-cols-3 gap-8">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="card-feature"
             >
               <div className="aspect-[3/2] overflow-hidden">
                 <img
                   src={feature.image}
                   alt={feature.title}
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                 />
               </div>
               <div className="p-6">
                 <h3 className="heading-card text-foreground mb-3">{feature.title}</h3>
                 <p className="text-body text-muted-foreground">{feature.description}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };