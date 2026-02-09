 import { motion } from "framer-motion";
 import surveyImage from "@/assets/employment-survey.jpg";
 
 export const ThoughtLeadershipSection = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-main">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8"
         >
           <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
             Thought Leadership
           </span>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-12 items-center">
           {/* Image */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="rounded-lg overflow-hidden shadow-xl"
           >
             <img
               src={surveyImage}
               alt="Employment Outlook Survey"
               className="w-full h-auto"
             />
           </motion.div>
 
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h2 className="heading-section text-foreground mb-6">
               The Q1 Employment Outlook Survey results are in!
             </h2>
             <p className="text-body text-muted-foreground mb-8">
               Our latest report reveals that 36% of hiring managers plan to add staff in Q1 2026.
               Dive into our comprehensive report for detailed insights into job hotspots, industry
               profiles and workforce trends.
             </p>
              <a href="/blog" className="btn-outline inline-block">
                Learn More
              </a>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };