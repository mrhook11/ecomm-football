import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FootballStore</h3>
            <p className="mb-4 text-sm">
              Your premier destination for high-quality footballs and
              accessories for players of all levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/store" className="hover:text-white transition-colors">
                  {t("nav.store")}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
              <li>
                <a
                  href="/custom-domain"
                  className="hover:text-white transition-colors"
                >
                  {t("language") === "it"
                    ? "Dominio Personalizzato"
                    : "Custom Domain"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.customerService")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.shipping")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.returns")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.faq")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.newsletter")}
            </h4>
            <p className="mb-4 text-sm">{t("footer.newsletter.text")}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FootballStore.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src="/payment-visa.svg" alt="Visa" className="h-6" />
            <img
              src="/payment-mastercard.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img src="/payment-paypal.svg" alt="PayPal" className="h-6" />
            <img src="/payment-apple.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
