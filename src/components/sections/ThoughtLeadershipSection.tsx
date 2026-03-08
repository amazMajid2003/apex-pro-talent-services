import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import surveyImage from "@/assets/employment-survey.jpg";

export const ThoughtLeadershipSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">{t("thoughtLeadership.label")}</span>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-lg overflow-hidden shadow-xl">
            <img src={surveyImage} alt="Employment Outlook Survey" className="w-full h-auto" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="heading-section text-foreground mb-6">{t("thoughtLeadership.title")}</h2>
            <p className="text-body text-muted-foreground mb-8">{t("thoughtLeadership.description")}</p>
            <a href="/blog" className="btn-outline inline-block">{t("thoughtLeadership.button")}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
