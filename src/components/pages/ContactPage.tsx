import Navbar from "../layout/Navbar";
import BottomNavigation from "../layout/BottomNavigation";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-20 md:pb-0 max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t("contact.title")}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {t("contact.touch.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("language") === "it"
                ? "Hai domande sui nostri prodotti o hai bisogno di assistenza con il tuo ordine? Il nostro team di assistenza clienti è qui per aiutarti con qualsiasi richiesta."
                : "Have questions about our products or need assistance with your order? Our customer service team is here to help you with any inquiries."}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.location")}</h3>
                  <p className="text-muted-foreground">
                    123 Stadium Avenue, Sports District, London, UK
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.phone")}</h3>
                  <p className="text-muted-foreground">+44 (0) 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.email")}</h3>
                  <p className="text-muted-foreground">
                    support@footballstore.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.hours")}</h3>
                  <p className="text-muted-foreground">
                    {t("language") === "it"
                      ? "Lunedì - Venerdì: 9:00 - 18:00"
                      : "Monday - Friday: 9am - 6pm"}
                  </p>
                  <p className="text-muted-foreground">
                    {t("language") === "it"
                      ? "Sabato: 10:00 - 16:00"
                      : "Saturday: 10am - 4pm"}
                  </p>
                  <p className="text-muted-foreground">
                    {t("language") === "it"
                      ? "Domenica: Chiuso"
                      : "Sunday: Closed"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=600&q=80"
                alt={t("language") === "it" ? "Il Nostro Negozio" : "Our Store"}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {t("contact.form.title")}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    {t("contact.form.firstName")}
                  </label>
                  <Input
                    id="firstName"
                    placeholder={t("language") === "it" ? "Mario" : "John"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    {t("contact.form.lastName")}
                  </label>
                  <Input
                    id="lastName"
                    placeholder={t("language") === "it" ? "Rossi" : "Doe"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={
                    t("language") === "it"
                      ? "mario.rossi@esempio.com"
                      : "john.doe@example.com"
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.form.subject")}
                </label>
                <Input
                  id="subject"
                  placeholder={
                    t("language") === "it"
                      ? "Richiesta Informazioni"
                      : "Order Inquiry"
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={
                    t("language") === "it"
                      ? "Come possiamo aiutarti?"
                      : "How can we help you?"
                  }
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">
                {t("contact.form.send")}
              </Button>
            </form>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-80 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542356599117!2d-0.1928224!3d51.5085297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760567da220a01%3A0x31911b371c692e86!2sStamford%20Bridge!5e0!3m2!1sen!2sus!4v1654789542873!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default ContactPage;
