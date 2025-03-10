import Navbar from "../layout/Navbar";
import BottomNavigation from "../layout/BottomNavigation";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/i18n";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-20 md:pb-0 max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative w-full h-80 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg mb-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t("about.title")}
              </h1>
              <p className="text-blue-100 md:text-xl max-w-2xl">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {t("about.story.title")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Fondato nel 2005, FootballStore è nato con una missione semplice: fornire ai giocatori di tutti i livelli l'accesso a palloni da calcio di alta qualità che migliorano il loro gioco. Quello che è iniziato come un piccolo negozio a Londra è cresciuto fino a diventare un marchio globale di fiducia sia per gli appassionati dilettanti che per gli atleti professionisti."
                : "Founded in 2005, FootballStore began with a simple mission: to provide players of all levels with access to high-quality footballs that enhance their game. What started as a small shop in London has grown into a global brand trusted by amateur enthusiasts and professional athletes alike."}
            </p>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Il nostro fondatore, James Wilson, ex calciatore professionista, ha riconosciuto la necessità di palloni da calcio durevoli e performanti accessibili a tutti. La sua visione era quella di creare un negozio dove ogni appassionato di calcio potesse trovare il pallone perfetto per le proprie esigenze, che stesse giocando nel proprio cortile o in uno stadio professionale."
                : "Our founder, James Wilson, a former professional footballer, recognized the need for durable, performance-enhancing footballs that were accessible to everyone. His vision was to create a store where every football enthusiast could find the perfect ball for their needs, whether they were playing in their backyard or in a professional stadium."}
            </p>
            <p className="text-muted-foreground">
              {t("language") === "it"
                ? "Oggi, continuiamo a sostenere la visione di James offrendo una selezione curata dei migliori palloni da calcio da tutto il mondo, tutti testati e approvati dal nostro team di esperti."
                : "Today, we continue to uphold James's vision by offering a curated selection of the finest footballs from around the world, all tested and approved by our team of experts."}
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&q=80"
              alt={t("language") === "it" ? "Il Nostro Negozio" : "Our Store"}
              className="rounded-lg w-full h-auto shadow-md"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("about.values.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("language") === "it" ? "Qualità" : "Quality"}
              </h3>
              <p className="text-muted-foreground">
                {t("language") === "it"
                  ? "Ci impegniamo a offrire solo palloni da calcio della più alta qualità che soddisfano i nostri rigorosi standard di durata, prestazioni e design."
                  : "We are committed to offering only the highest quality footballs that meet our rigorous standards for durability, performance, and design."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("language") === "it" ? "Inclusività" : "Inclusivity"}
              </h3>
              <p className="text-muted-foreground">
                {t("language") === "it"
                  ? "Crediamo che il calcio sia per tutti. I nostri prodotti sono pensati per giocatori di tutte le età, livelli di abilità e background, rendendo il bellissimo gioco accessibile a tutti."
                  : "We believe football is for everyone. Our products cater to players of all ages, skill levels, and backgrounds, making the beautiful game accessible to all."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("language") === "it" ? "Sostenibilità" : "Sustainability"}
              </h3>
              <p className="text-muted-foreground">
                {t("language") === "it"
                  ? "Ci dedichiamo a ridurre il nostro impatto ambientale collaborando con produttori che utilizzano materiali sostenibili e metodi di produzione etici."
                  : "We are dedicated to reducing our environmental impact by partnering with manufacturers who use sustainable materials and ethical production methods."}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("about.team.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("language") === "it" ? member.roleIt : member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("about.join.title")}
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t("language") === "it"
              ? "Siamo sempre alla ricerca di persone appassionate da aggiungere al nostro team in crescita. Se ami il calcio e vuoi far parte della nostra missione, dai un'occhiata alle nostre posizioni aperte."
              : "We're always looking for passionate individuals to join our growing team. If you love football and want to be part of our mission, check out our current openings."}
          </p>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
            {t("about.join.cta")}
          </Button>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

const teamMembers = [
  {
    name: "James Wilson",
    role: "Founder & CEO",
    roleIt: "Fondatore & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    roleIt: "Responsabile Prodotto",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Michael Chen",
    role: "Lead Designer",
    roleIt: "Designer Principale",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Emma Rodriguez",
    role: "Customer Experience",
    roleIt: "Esperienza Cliente",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
];

export default AboutPage;
