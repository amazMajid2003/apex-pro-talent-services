import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ctaBannerImage from "@/assets/cta-banner.jpg";

export const CTABannerSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBannerImage} alt="Diverse professionals" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      <div className="container-main relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-section text-primary-foreground mb-6">
            {t("ctaBanner.title")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-body text-primary-foreground/80 mb-8">
            {t("ctaBanner.description")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <a href="/job-seekers" className="btn-secondary inline-block">{t("ctaBanner.button")}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
