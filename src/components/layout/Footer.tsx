import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logoPng from "@/assets/logo.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

interface FooterProps {
  showAllEmails?: boolean;
}

export const Footer = ({ showAllEmails = false }: FooterProps) => {
  const { t } = useTranslation();

  const footerLinks = {
    jobSeekers: [
      { label: t("footer.searchJobs"), href: "/search" },
      { label: t("footer.createProfile"), href: "/job-seekers" },
      { label: t("footer.careerResources"), href: "/blog" },
      { label: t("footer.mobileApp"), href: "/job-seekers" },
    ],
    employers: [
      { label: t("footer.findTalent"), href: "/employers" },
      { label: t("footer.staffingSolutions"), href: "/employers" },
      { label: t("footer.industries"), href: "/employers" },
      { label: t("footer.requestStaff"), href: "/contact" },
    ],
    company: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.locations"), href: "/contact" },
      { label: t("footer.careers"), href: "/search" },
      { label: t("footer.contact"), href: "/contact" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="bg-secondary">
        <div className="container-main px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold text-secondary-foreground">{t("footer.readyTitle")}</h3>
            <p className="text-secondary-foreground/90 mt-1">{t("footer.readyDesc")}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/search">
              <Button variant="outline" className="bg-background text-primary border-background hover:bg-background/90 hover:text-primary">
                {t("footer.findJobs")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t("footer.contactUs")} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img alt="Apex Pro Talent Services" className="h-36 w-auto" src={logoPng} />
              <div>
                <span className="text-xl font-heading font-bold tracking-tight block">Apex Pro</span>
                <span className="text-xs font-medium tracking-wider text-primary-foreground/80">Talent Services</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">{t("footer.tagline")}</p>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>6790 Davand Dr Unit #6, Mississauga, ON L5T 2G5</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:4169481058" className="hover:text-primary-foreground transition-colors">416-948-1058</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:Info@atspro.ca" className="hover:text-primary-foreground transition-colors">Info@atspro.ca</a>
              </div>
              {showAllEmails && (
                <>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                    <a href="mailto:Sales@atspro.ca" className="hover:text-primary-foreground transition-colors">Sales@atspro.ca</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                    <a href="mailto:jobs@atspro.ca" className="hover:text-primary-foreground transition-colors">jobs@atspro.ca</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                    <a href="mailto:Accounts@atspro.ca" className="hover:text-primary-foreground transition-colors">Accounts@atspro.ca</a>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">{t("footer.forJobSeekers")}</h4>
            <ul className="space-y-3">
              {footerLinks.jobSeekers.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-1 transition-all duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">{t("footer.forEmployers")}</h4>
            <ul className="space-y-3">
              {footerLinks.employers.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-1 transition-all duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-1 transition-all duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/10">
          <div className="flex gap-3 mb-4 md:mb-0">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200" aria-label={social.label}>
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="text-primary-foreground/50 text-sm text-center md:text-right">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.termsOfUse")}</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.accessibility")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
