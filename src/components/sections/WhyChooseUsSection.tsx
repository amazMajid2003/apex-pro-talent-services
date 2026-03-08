import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import findWorkImage from "@/assets/find-work-fast.jpg";
import peopleFirstImage from "@/assets/people-first.jpg";
import diversityImage from "@/assets/diversity-inclusion.jpg";

export const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const features = [
    { titleKey: "whyChooseUs.findWorkFast", descKey: "whyChooseUs.findWorkFastDesc", image: findWorkImage },
    { titleKey: "whyChooseUs.peopleFirst", descKey: "whyChooseUs.peopleFirstDesc", image: peopleFirstImage },
    { titleKey: "whyChooseUs.diversityInclusion", descKey: "whyChooseUs.diversityInclusionDesc", image: diversityImage },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-main">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-section text-center text-foreground mb-12">
          {t("whyChooseUs.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-feature">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={feature.image} alt={t(feature.titleKey)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-foreground mb-3">{t(feature.titleKey)}</h3>
                <p className="text-body text-muted-foreground">{t(feature.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
