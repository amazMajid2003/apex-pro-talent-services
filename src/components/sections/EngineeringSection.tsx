import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoPng from "@/assets/logo.png";

export const EngineeringSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-primary">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img alt="Apex Pro Talent Services" className="h-24 w-auto" src={logoPng} />
              <div>
                <span className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Apex Pro</span>
                <div className="flex items-center gap-2 text-secondary">
                  <Cog className="w-5 h-5" />
                  <span className="font-heading font-semibold uppercase tracking-wider">{t("engineering.subtitle")}</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-section text-primary-foreground mb-6">{t("engineering.title")}</h2>
            <p className="text-body text-primary-foreground/80 mb-8">{t("engineering.description")}</p>
            <a href="/employers" className="text-primary-foreground font-semibold uppercase tracking-wide underline underline-offset-4 decoration-secondary decoration-2 hover:text-secondary transition-colors">
              {t("engineering.readMore")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
