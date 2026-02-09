 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 import { Badge } from "@/components/ui/badge";
 import { Search, MapPin, Briefcase, Clock, Building2, Filter } from "lucide-react";
 import { motion } from "framer-motion";
 import { useState } from "react";
 
 const mockJobs = [
   {
     id: 1,
     title: "Warehouse Associate",
     company: "Major Logistics Corp",
     location: "Toronto, ON",
     type: "Full-time",
     category: "Logistics",
     posted: "2 days ago",
     description: "Join our team as a Warehouse Associate. Responsibilities include picking, packing, and shipping orders.",
   },
   {
     id: 2,
     title: "Administrative Assistant",
     company: "Financial Services Inc",
     location: "Vancouver, BC",
     type: "Full-time",
     category: "Administrative",
     posted: "1 day ago",
     description: "We are seeking an organized Administrative Assistant to support our executive team.",
   },
   {
     id: 3,
     title: "Forklift Operator",
     company: "Distribution Center",
     location: "Calgary, AB",
     type: "Temporary",
     category: "Manufacturing",
     posted: "3 days ago",
     description: "Certified forklift operators needed for immediate start. Day and night shifts available.",
   },
   {
     id: 4,
     title: "Customer Service Representative",
     company: "Tech Solutions Ltd",
     location: "Montreal, QC",
     type: "Full-time",
     category: "Customer Service",
     posted: "1 week ago",
     description: "Bilingual customer service representative needed to handle inbound calls and emails.",
   },
   {
     id: 5,
     title: "Production Worker",
     company: "Manufacturing Co",
     location: "Edmonton, AB",
     type: "Temporary",
     category: "Manufacturing",
     posted: "4 days ago",
     description: "Production workers needed for assembly line positions. No experience required.",
   },
   {
     id: 6,
     title: "Accounts Payable Clerk",
     company: "Corporate Services",
     location: "Ottawa, ON",
     type: "Contract",
     category: "Finance",
     posted: "5 days ago",
     description: "Experienced AP Clerk needed for 6-month contract with possibility of extension.",
   },
   {
     id: 7,
     title: "Quality Control Inspector",
     company: "Aerospace Industries",
     location: "Winnipeg, MB",
     type: "Full-time",
     category: "Manufacturing",
     posted: "2 days ago",
     description: "QC Inspector needed for aerospace components. CWB certification preferred.",
   },
   {
     id: 8,
     title: "HR Coordinator",
     company: "Healthcare Group",
     location: "Halifax, NS",
     type: "Full-time",
     category: "Human Resources",
     posted: "1 day ago",
     description: "HR Coordinator to manage recruitment, onboarding, and employee relations.",
   },
 ];
 
 const categories = [
   "All Categories",
   "Administrative",
   "Customer Service",
   "Finance",
   "Human Resources",
   "Logistics",
   "Manufacturing",
 ];
 
 const jobTypes = ["All Types", "Full-time", "Part-time", "Temporary", "Contract"];
 
 const JobSearch = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [locationTerm, setLocationTerm] = useState("");
   const [category, setCategory] = useState("All Categories");
   const [jobType, setJobType] = useState("All Types");
   const [showFilters, setShowFilters] = useState(false);
 
   const filteredJobs = mockJobs.filter((job) => {
     const matchesSearch =
       searchTerm === "" ||
       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.description.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesLocation =
       locationTerm === "" ||
       job.location.toLowerCase().includes(locationTerm.toLowerCase());
     const matchesCategory =
       category === "All Categories" || job.category === category;
     const matchesType =
       jobType === "All Types" || job.type === jobType;
     return matchesSearch && matchesLocation && matchesCategory && matchesType;
   });
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-40">
         {/* Search Hero */}
         <section className="bg-primary py-12">
           <div className="container-main px-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-8"
             >
               <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                 Search Jobs
               </h1>
               <p className="text-lg text-primary-foreground/90">
                 Find your next opportunity from hundreds of positions
               </p>
             </motion.div>
 
             {/* Search Form */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-card rounded-lg p-6 shadow-lg max-w-4xl mx-auto"
             >
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="relative">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                   <Input
                     placeholder="Job Title, Industry or Skill"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="pl-10"
                   />
                 </div>
                 <div className="relative">
                   <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                   <Input
                     placeholder="City or Postal Code"
                     value={locationTerm}
                     onChange={(e) => setLocationTerm(e.target.value)}
                     className="pl-10"
                   />
                 </div>
                 <div className="flex gap-2">
                   <Button className="flex-1">
                     <Search className="w-4 h-4 mr-2" />
                     Search
                   </Button>
                   <Button
                     variant="outline"
                     onClick={() => setShowFilters(!showFilters)}
                     className="lg:hidden"
                   >
                     <Filter className="w-4 h-4" />
                   </Button>
                 </div>
               </div>
 
               {/* Filters */}
               <div className={`mt-4 pt-4 border-t border-border grid md:grid-cols-2 gap-4 ${showFilters ? "block" : "hidden lg:grid"}`}>
                 <div>
                   <label className="text-sm font-medium text-muted-foreground mb-1 block">
                     Category
                   </label>
                   <Select value={category} onValueChange={setCategory}>
                     <SelectTrigger>
                       <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                       {categories.map((cat) => (
                         <SelectItem key={cat} value={cat}>
                           {cat}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 <div>
                   <label className="text-sm font-medium text-muted-foreground mb-1 block">
                     Job Type
                   </label>
                   <Select value={jobType} onValueChange={setJobType}>
                     <SelectTrigger>
                       <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                       {jobTypes.map((type) => (
                         <SelectItem key={type} value={type}>
                           {type}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
               </div>
             </motion.div>
           </div>
         </section>
 
         {/* Results */}
         <section className="py-12 bg-background">
           <div className="container-main px-4">
             <div className="flex items-center justify-between mb-8">
               <p className="text-muted-foreground">
                 <span className="font-semibold text-foreground">{filteredJobs.length}</span>{" "}
                 jobs found
               </p>
               <Select defaultValue="newest">
                 <SelectTrigger className="w-40">
                   <SelectValue placeholder="Sort by" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="newest">Newest First</SelectItem>
                   <SelectItem value="oldest">Oldest First</SelectItem>
                   <SelectItem value="relevant">Most Relevant</SelectItem>
                 </SelectContent>
               </Select>
             </div>
 
             {filteredJobs.length === 0 ? (
               <div className="text-center py-16">
                 <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                 <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                   No jobs found
                 </h3>
                 <p className="text-muted-foreground">
                   Try adjusting your search filters
                 </p>
               </div>
             ) : (
               <div className="space-y-4">
                 {filteredJobs.map((job, index) => (
                   <motion.div
                     key={job.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.05 }}
                     className="bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-secondary/50 transition-all cursor-pointer"
                   >
                     <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                       <div className="flex-1">
                         <div className="flex flex-wrap items-center gap-2 mb-2">
                           <h3 className="text-xl font-heading font-semibold text-card-foreground hover:text-secondary transition-colors">
                             {job.title}
                           </h3>
                           <Badge variant="secondary">{job.type}</Badge>
                         </div>
                         <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                           <span className="flex items-center gap-1">
                             <Building2 className="w-4 h-4" />
                             {job.company}
                           </span>
                           <span className="flex items-center gap-1">
                             <MapPin className="w-4 h-4" />
                             {job.location}
                           </span>
                           <span className="flex items-center gap-1">
                             <Clock className="w-4 h-4" />
                             {job.posted}
                           </span>
                         </div>
                         <p className="text-muted-foreground line-clamp-2">
                           {job.description}
                         </p>
                       </div>
                       <div className="flex gap-2">
                         <Button variant="outline" size="sm">
                           Save
                         </Button>
                         <Button size="sm">Apply Now</Button>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             )}
 
             {filteredJobs.length > 0 && (
               <div className="text-center mt-12">
                 <Button variant="outline" size="lg">
                   Load More Jobs
                 </Button>
               </div>
             )}
           </div>
         </section>
 
         {/* CTA */}
         <section className="py-16 bg-primary">
           <div className="container-main px-4 text-center">
             <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
               Can't find what you're looking for?
             </h2>
             <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
               Create a profile and let us find the perfect job for you. Get personalized job alerts delivered to your inbox.
             </p>
             <Button size="lg" variant="secondary">
               Create Your Profile
             </Button>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default JobSearch;