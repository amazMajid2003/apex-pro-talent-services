 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import { ArrowRight } from "lucide-react";
 import robotsImage from "@/assets/blog-robots.jpg";
 import softSkillsImage from "@/assets/blog-soft-skills.jpg";
 import analyticsImage from "@/assets/blog-analytics.jpg";
 
 const insights = [
   {
     title: "Putting Industrial Robots on the Payroll",
     image: robotsImage,
     href: "/blog",
   },
   {
     title: "Navigating Talent Shortages: The Importance of Soft Skills",
     image: softSkillsImage,
     href: "/blog",
   },
   {
     title: "Using Data Analytics to Drive Continuous Improvement in Manufacturing",
     image: analyticsImage,
     href: "/blog",
   },
 ];
 
 export const InsightsSection = () => {
   return (
     <section className="section-padding bg-muted">
       <div className="container-main">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="heading-section text-foreground mb-4 md:mb-0"
           >
             Insights
           </motion.h2>
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             <Link
               to="/blog"
               className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
             >
               See more
               <ArrowRight className="w-4 h-4" />
             </Link>
           </motion.div>
         </div>
 
         <div className="grid md:grid-cols-3 gap-8">
           {insights.map((insight, index) => (
             <motion.div
               key={insight.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <Link to={insight.href} className="group card-feature block">
                 <div className="aspect-video overflow-hidden">
                   <img
                     src={insight.image}
                     alt={insight.title}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="heading-card text-foreground group-hover:text-secondary transition-colors">
                     {insight.title}
                   </h3>
                   <span className="text-secondary font-semibold text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                     Read more
                     <ArrowRight className="w-4 h-4" />
                   </span>
                 </div>
               </Link>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };