 import { motion } from "framer-motion";
 import mobileAppImage from "@/assets/mobile-app.jpg";
 
 export const MobileAppSection = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-main">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           {/* Image */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
           >
             <div className="relative rounded-lg overflow-hidden shadow-2xl">
               <img
                 src={mobileAppImage}
                 alt="Mobile app preview"
                 className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
             </div>
           </motion.div>
 
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h2 className="heading-section text-foreground mb-6">
               Your Next Job Is Just a Tap Away
             </h2>
             <p className="text-body text-muted-foreground mb-8">
               Whether you're searching for your next opportunity or managing your current
               assignment, our mobile app puts everything at your fingertips. You'll find
               smarter job matching, streamlined applications and personalized dashboards—built
               for how you live and work today.
             </p>
              <a href="#" className="btn-outline inline-block">
                Download Now
              </a>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };