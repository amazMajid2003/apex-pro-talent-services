 import { useState } from "react";
 import { useNavigate, Link } from "react-router-dom";
 import { Search, MapPin } from "lucide-react";
 import { motion } from "framer-motion";
 import heroBackground from "@/assets/hero-background.jpg";
 
 export const HeroSection = () => {
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");
   const [locationTerm, setLocationTerm] = useState("");

   const handleSearch = (e: React.FormEvent) => {
     e.preventDefault();
     navigate(`/search?q=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(locationTerm)}`);
   };

   return (
     <section className="relative min-h-screen flex items-center pt-40 overflow-hidden">
       {/* Background image with overlay */}
       <div className="absolute inset-0">
         <img
           src={heroBackground}
           alt="Professional woman in office"
           className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
       </div>
 
       {/* Content */}
       <div className="container-main relative z-10 px-4 py-16 md:py-24">
         <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-hero text-primary-foreground mb-8"
            >
              Find Your
              <br />
              <span className="text-secondary">Dream</span> Career
            </motion.h1>
 
           {/* Search Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <form onSubmit={handleSearch} className="space-y-4 mb-8">
               <div className="relative">
                 <input
                   type="text"
                   placeholder="Job Title, Industry or Skill"
                   className="input-search pr-4"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
               </div>
               <div className="relative">
                 <input
                   type="text"
                   placeholder="City or Postal Code"
                   className="input-search pr-12"
                   value={locationTerm}
                   onChange={(e) => setLocationTerm(e.target.value)}
                 />
                 <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
               </div>
               <button type="submit" className="btn-primary flex items-center gap-2 w-full md:w-auto justify-center">
                 <Search className="w-4 h-4" />
                 Job Search
               </button>
             </form>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
              <Link to="/about" className="link-underline inline-block">
                Learn more about Apex Pro Talent Services
              </Link>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };