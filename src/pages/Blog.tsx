 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { Button } from "@/components/ui/button";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 import { motion } from "framer-motion";
 import { useState } from "react";
 import blogRobots from "@/assets/blog-robots.jpg";
 import blogSoftSkills from "@/assets/blog-soft-skills.jpg";
 import blogAnalytics from "@/assets/blog-analytics.jpg";
 import careerTraining from "@/assets/career-training.jpg";
 import warehouseWorkers from "@/assets/warehouse-workers.jpg";
 import employmentSurvey from "@/assets/employment-survey.jpg";
 
 const articles = [
   {
     id: 1,
     image: blogSoftSkills,
     title: "How to Nail an Interview: The New Rules",
     category: "Articles",
     date: "2026/01/16",
     audience: "job-seekers",
     topic: "interview-preparation",
   },
   {
     id: 2,
     image: warehouseWorkers,
     title: "Workforce Optimization Saves Client $1.87M",
     category: "Case Studies",
     date: "2026/01/15",
     audience: "employers",
     topic: "workforce-strategies",
   },
   {
     id: 3,
     image: blogAnalytics,
     title: "Enhance Workforce Planning with MPact Advantage",
     category: "Articles",
     date: "2026/01/12",
     audience: "employers",
     topic: "workforce-strategies",
   },
   {
     id: 4,
     image: blogRobots,
     title: "Putting Industrial Robots on the Payroll",
     category: "Articles",
     date: "2026/01/10",
     audience: "employers",
     topic: "workforce-strategies",
   },
   {
     id: 5,
     image: careerTraining,
     title: "Navigating Talent Shortages: The Importance of Soft Skills",
     category: "Articles",
     date: "2026/01/08",
     audience: "job-seekers",
     topic: "job-skills",
   },
   {
     id: 6,
     image: employmentSurvey,
     title: "Using Data Analytics to Drive Continuous Improvement in Manufacturing",
     category: "Articles",
     date: "2026/01/05",
     audience: "employers",
     topic: "workforce-strategies",
   },
   {
     id: 7,
     image: blogSoftSkills,
     title: "Tips for Writing an Effective Resume and Cover Letter",
     category: "Articles",
     date: "2026/01/03",
     audience: "job-seekers",
     topic: "resume-tips",
   },
   {
     id: 8,
     image: warehouseWorkers,
     title: "8 Steps to Building Your Own Skilled Technical Workforce",
     category: "Articles",
     date: "2025/12/28",
     audience: "employers",
     topic: "training-talent",
   },
   {
     id: 9,
     image: careerTraining,
     title: "Behind Every Great Office: The Role of Administrative Assistants",
     category: "Articles",
     date: "2025/12/20",
     audience: "job-seekers",
     topic: "career-development",
   },
 ];
 
 const Blog = () => {
   const [audienceFilter, setAudienceFilter] = useState("all");
   const [topicFilter, setTopicFilter] = useState("all");
 
   const filteredArticles = articles.filter((article) => {
     const audienceMatch = audienceFilter === "all" || article.audience === audienceFilter;
     const topicMatch = topicFilter === "all" || article.topic === topicFilter;
     return audienceMatch && topicMatch;
   });
 
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
               <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                 Insights
               </span>
               <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-2 mb-4">
                 Blog
               </h1>
               <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
                 Our Blog provides both employers and job seekers with expertise, guidance, surveys and reports on today's most relevant topics, such as job reports, talent management, workforce strategies, as well as articles about how to navigate finding and landing a job.
               </p>
             </motion.div>
           </div>
         </section>
 
         {/* Filters */}
         <section className="py-8 bg-muted/30 border-b border-border">
           <div className="container-main px-4">
             <div className="flex flex-wrap gap-4 items-center justify-center">
               <div className="flex items-center gap-2">
                 <span className="text-sm font-medium text-muted-foreground">Audience:</span>
                 <Select value={audienceFilter} onValueChange={setAudienceFilter}>
                   <SelectTrigger className="w-40">
                     <SelectValue />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="all">All</SelectItem>
                     <SelectItem value="job-seekers">For Job Seekers</SelectItem>
                     <SelectItem value="employers">For Employers</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-sm font-medium text-muted-foreground">Topic:</span>
                 <Select value={topicFilter} onValueChange={setTopicFilter}>
                   <SelectTrigger className="w-48">
                     <SelectValue />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="all">All Topics</SelectItem>
                     <SelectItem value="interview-preparation">Interview Preparation</SelectItem>
                     <SelectItem value="resume-tips">Resume Tips</SelectItem>
                     <SelectItem value="job-skills">Job Skills</SelectItem>
                     <SelectItem value="career-development">Career Development</SelectItem>
                     <SelectItem value="workforce-strategies">Workforce Strategies</SelectItem>
                     <SelectItem value="training-talent">Training Talent</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
               {(audienceFilter !== "all" || topicFilter !== "all") && (
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => {
                     setAudienceFilter("all");
                     setTopicFilter("all");
                   }}
                 >
                   Clear Filters
                 </Button>
               )}
             </div>
           </div>
         </section>
 
         {/* Articles Grid */}
         <section className="py-8 bg-background">
           <div className="container-main px-4">
             {filteredArticles.length === 0 ? (
               <div className="text-center py-12">
                 <p className="text-muted-foreground">No articles found matching your filters.</p>
               </div>
             ) : (
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {filteredArticles.map((article, index) => (
                   <motion.article
                     key={article.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.05 }}
                     className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                   >
                     <div className="aspect-video overflow-hidden">
                       <img
                         src={article.image}
                         alt={article.title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       />
                     </div>
                     <div className="p-5">
                       <div className="flex items-center gap-3 mb-3">
                         <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                           {article.category}
                         </span>
                         <span className="text-xs text-muted-foreground">
                           {article.date}
                         </span>
                       </div>
                       <h3 className="font-heading font-semibold text-lg text-card-foreground group-hover:text-secondary transition-colors line-clamp-2">
                         {article.title}
                       </h3>
                       <span className="text-secondary text-sm font-medium mt-3 inline-block">
                         Read More →
                       </span>
                     </div>
                   </motion.article>
                 ))}
               </div>
             )}
 
             {filteredArticles.length > 0 && (
               <div className="text-center mt-12">
                 <Button variant="outline" size="lg">
                   Load More Articles
                 </Button>
               </div>
             )}
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Blog;