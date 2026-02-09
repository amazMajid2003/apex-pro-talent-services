 import { motion } from "framer-motion";
 import ctaBannerImage from "@/assets/cta-banner.jpg";
 
 export const CTABannerSection = () => {
   return (
     <section className="relative py-20 md:py-32 overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0">
         <img
           src={ctaBannerImage}
           alt="Diverse professionals"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
       </div>
 
       {/* Content */}
       <div className="container-main relative z-10 px-4">
         <div className="max-w-2xl mx-auto text-center">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="heading-section text-primary-foreground mb-6"
           >
             Create a profile and we'll guide you to your next job
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-body text-primary-foreground/80 mb-8"
           >
             In addition to excellent job opportunities, your account also gives you access to
             upskilling courses, workshops, and skills assessments. Whether you're looking for
             a new job or trying to figure out what kind of work best suits your talents, we'll
             help you get ahead.
           </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="/job-seekers" className="btn-secondary inline-block">
                Start Now
              </a>
            </motion.div>
         </div>
       </div>
     </section>
   );
 };