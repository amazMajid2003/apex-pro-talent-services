import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import logoPng from "@/assets/logo.png";
export const EngineeringSection = () => {
  return <section className="section-padding bg-primary">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo / Icon */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img alt="Apex Pro Talent Services" className="h-12 w-auto" src={logoPng} />
              <div>
                <span className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                  Apex Pro
                </span>
                <div className="flex items-center gap-2 text-secondary">
                  <Cog className="w-5 h-5" />
                  <span className="font-heading font-semibold uppercase tracking-wider">
                    Skilled Trades
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="heading-section text-primary-foreground mb-6">
              Apex Pro Skilled Trades
            </h2>
            <p className="text-body text-primary-foreground/80 mb-8">
              From construction and manufacturing to IT and beyond, there is a wide range of
              opportunities within skilled trades. For employers, this means having a clear
              understanding of the skills candidates need to possess to fill your open positions.
              We connect you with top talent across all industries.
            </p>
            <a href="/employers" className="text-primary-foreground font-semibold uppercase tracking-wide underline underline-offset-4 decoration-secondary decoration-2 hover:text-secondary transition-colors">
              Read More
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};