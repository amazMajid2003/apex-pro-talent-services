import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import lookingForJob from "@/assets/looking-for-job.jpg";
import businessmenMeeting from "@/assets/businessmen-meeting.jpg";
import careerTraining from "@/assets/career-training.jpg";
import diversityInclusion from "@/assets/diversity-inclusion.jpg";
import warehouseWorkers from "@/assets/warehouse-workers.jpg";

const stats = [
  { value: "24/7", label: "Round-the-clock workforce solutions" },
  { value: "10+", label: "Industries served across Canada" },
  { value: "100%", label: "Canadian-owned employment agency" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutHero} alt="Conference room" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="container-main relative z-10 grid lg:grid-cols-2 gap-8 px-4 py-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                About Apex Pro Talent Services
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-xl">
                A proudly Canadian employment agency committed to delivering dependable workforce solutions across all industries—24 hours a day, 7 days a week.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 bg-secondary">
          <div className="container-main px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4">
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

        {/* Our Mission */}
        <section className="py-10 bg-background">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="relative">
                  <img src={diversityInclusion} alt="Our diverse team" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="border-l-4 border-secondary pl-6">
                  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Our Mission
                  </motion.h2>
                  <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-lg text-muted-foreground">
                    At Apex Pro Talent Services, our mission is to connect reliable talent with meaningful opportunities 24 hours a day, 7 days a week. As a proudly Canadian employment agency, we are committed to delivering dependable workforce solutions across all industries—ensuring our clients have the right people, at the right time, every time. We handle the manpower and the paperwork so our clients can focus on growing and running their business with confidence.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-10 bg-muted/30">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
                <div className="border-l-4 border-secondary pl-6">
                  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Our Vision
                  </motion.h2>
                  <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-lg text-muted-foreground">
                    Our vision is to become a trusted national leader in employment and workforce solutions across Canada, recognized for our strong Canadian values, integrity, and round-the-clock service. We strive to build long-term partnerships with businesses while creating stable, rewarding opportunities for workers in construction, labour, skilled trades, agriculture, hospitality, manufacturing, IT, and beyond. Through dedication and reliability, we aim to strengthen Canadian industries by supporting the people who keep them moving.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
                <div className="relative">
                  <img src={warehouseWorkers} alt="Our vision for the workforce" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                  <div className="absolute -top-3 -left-3 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Looking for a Job */}
        <section className="py-10 bg-background">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={lookingForJob} alt="Job seeker" className="rounded-lg shadow-xl" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Looking for a Job?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're looking for a temporary role or a permanent position, we offer a wide range of job listings so you can find the job that perfectly meets your preferences. Send your resume to <a href="mailto:jobs@atspro.ca" className="text-secondary font-semibold hover:underline">jobs@atspro.ca</a> and we'll help you find the right fit.
                </p>
                <Link to="/job-seekers"><Button variant="secondary" size="lg">Learn More</Button></Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Optimize Your Workforce */}
        <section className="py-10 bg-muted/30">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Optimize Your Workforce</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our staffing solutions ensure optimal job matches while fostering employee productivity, growth, and alignment with your company objectives. Contact our sales team at <a href="mailto:Sales@atspro.ca" className="text-secondary font-semibold hover:underline">Sales@atspro.ca</a> to discuss your needs.
                </p>
                <Link to="/employers"><Button variant="secondary" size="lg">Learn More</Button></Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                <img src={businessmenMeeting} alt="Business meeting" className="rounded-lg shadow-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Searching for Talent */}
        <section className="py-10 bg-primary">
          <div className="container-main px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">Searching for the Right Talent?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                In the diverse talent landscape, pinpointing the ideal candidate can be a challenge. With Apex Pro Talent Services, it becomes a seamless endeavor. Whether a local business or a nationwide enterprise, rely on us to optimize your recruitment success—24/7.
              </p>
              <Link to="/contact"><Button size="lg" variant="secondary">Request Talent</Button></Link>
            </motion.div>
          </div>
        </section>

        {/* Workforce Insights */}
        <section className="py-10 bg-background">
          <div className="container-main px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">Workforce Insights and Reports</h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img src={careerTraining} alt="Career training" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">Attracting, Retaining, and Developing Talent</h3>
                  <p className="text-muted-foreground mb-4">We're committed to workforce development with comprehensive programs that empower workers to develop essential skills across construction, manufacturing, IT, and more.</p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-8 bg-muted/30">
          <div className="container-main px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>6790 Davand Dr Unit #6, Mississauga, ON L5T 2G5</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:4169481058" className="hover:text-secondary transition-colors">416-948-1058</a>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Have questions? We're here to help 24/7. Reach out at <a href="mailto:Info@atspro.ca" className="text-secondary font-semibold hover:underline">Info@atspro.ca</a>
            </p>
            <Link to="/contact"><Button size="lg" variant="secondary">Get in Touch</Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
