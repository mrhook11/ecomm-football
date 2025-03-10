import Navbar from "../layout/Navbar";
import BottomNavigation from "../layout/BottomNavigation";
import Footer from "../layout/Footer";
import { useLanguage } from "@/lib/i18n";

const CustomDomainGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-20 md:pb-0 max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {t("language") === "it"
            ? "Configurare un Dominio Personalizzato"
            : "Setting Up a Custom Domain"}
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {t("language") === "it" ? "Panoramica" : "Overview"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {t("language") === "it"
              ? "Per collegare un dominio personalizzato al tuo negozio di football online, dovrai seguire questi passaggi principali:"
              : "To connect a custom domain to your football online store, you'll need to follow these main steps:"}
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>
              {t("language") === "it"
                ? "Acquistare un dominio da un registrar"
                : "Purchase a domain from a registrar"}
            </li>
            <li>
              {t("language") === "it"
                ? "Configurare i record DNS"
                : "Configure DNS records"}
            </li>
            <li>
              {t("language") === "it"
                ? "Collegare il dominio alla tua piattaforma di hosting"
                : "Connect the domain to your hosting platform"}
            </li>
            <li>
              {t("language") === "it"
                ? "Verificare e attendere la propagazione DNS"
                : "Verify and wait for DNS propagation"}
            </li>
          </ol>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              <span className="inline-block w-8 h-8 bg-primary text-white rounded-full text-center leading-8 mr-2">
                1
              </span>
              {t("language") === "it"
                ? "Acquistare un Dominio"
                : "Purchase a Domain"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Acquista un dominio da un registrar affidabile come:"
                : "Purchase a domain from a reliable registrar such as:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Namecheap</li>
              <li>GoDaddy</li>
              <li>Google Domains</li>
              <li>Cloudflare</li>
            </ul>
            <p className="text-muted-foreground">
              {t("language") === "it"
                ? "Scegli un nome di dominio che rappresenti il tuo marchio e sia facile da ricordare. Considera di utilizzare parole chiave relative al calcio o allo sport."
                : "Choose a domain name that represents your brand and is easy to remember. Consider using keywords related to football or sports."}
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              <span className="inline-block w-8 h-8 bg-primary text-white rounded-full text-center leading-8 mr-2">
                2
              </span>
              {t("language") === "it"
                ? "Configurare i Record DNS"
                : "Configure DNS Records"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Accedi al pannello di controllo del tuo registrar di domini e configura i seguenti record DNS:"
                : "Log in to your domain registrar's control panel and set up the following DNS records:"}
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border text-left">
                      {t("language") === "it" ? "Tipo" : "Type"}
                    </th>
                    <th className="px-4 py-2 border text-left">
                      {t("language") === "it" ? "Nome" : "Name"}
                    </th>
                    <th className="px-4 py-2 border text-left">
                      {t("language") === "it" ? "Valore" : "Value"}
                    </th>
                    <th className="px-4 py-2 border text-left">TTL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">A</td>
                    <td className="px-4 py-2 border">@</td>
                    <td className="px-4 py-2 border">
                      {t("language") === "it"
                        ? "Indirizzo IP del tuo server"
                        : "Your server IP address"}
                    </td>
                    <td className="px-4 py-2 border">3600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">CNAME</td>
                    <td className="px-4 py-2 border">www</td>
                    <td className="px-4 py-2 border">@</td>
                    <td className="px-4 py-2 border">3600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground">
              {t("language") === "it"
                ? "Se stai utilizzando un servizio di hosting come Vercel, Netlify o GitHub Pages, potrebbero fornirti istruzioni specifiche per la configurazione DNS."
                : "If you're using a hosting service like Vercel, Netlify, or GitHub Pages, they may provide you with specific DNS configuration instructions."}
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              <span className="inline-block w-8 h-8 bg-primary text-white rounded-full text-center leading-8 mr-2">
                3
              </span>
              {t("language") === "it"
                ? "Collegare il Dominio alla Piattaforma di Hosting"
                : "Connect the Domain to Your Hosting Platform"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Accedi al pannello di controllo della tua piattaforma di hosting e aggiungi il tuo dominio personalizzato:"
                : "Log in to your hosting platform's dashboard and add your custom domain:"}
            </p>

            <h3 className="font-medium mb-2">
              {t("language") === "it" ? "Per Vercel:" : "For Vercel:"}
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-4">
              <li>
                {t("language") === "it"
                  ? "Vai al tuo progetto su Vercel"
                  : "Go to your project on Vercel"}
              </li>
              <li>
                {t("language") === "it"
                  ? 'Clicca su "Settings" → "Domains"'
                  : 'Click on "Settings" → "Domains"'}
              </li>
              <li>
                {t("language") === "it"
                  ? "Aggiungi il tuo dominio e segui le istruzioni"
                  : "Add your domain and follow the instructions"}
              </li>
            </ol>

            <h3 className="font-medium mb-2">
              {t("language") === "it" ? "Per Netlify:" : "For Netlify:"}
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-4">
              <li>
                {t("language") === "it"
                  ? "Vai al tuo sito su Netlify"
                  : "Go to your site on Netlify"}
              </li>
              <li>
                {t("language") === "it"
                  ? 'Clicca su "Domain settings" → "Add custom domain"'
                  : 'Click on "Domain settings" → "Add custom domain"'}
              </li>
              <li>
                {t("language") === "it"
                  ? "Inserisci il tuo dominio e verifica la proprietà"
                  : "Enter your domain and verify ownership"}
              </li>
            </ol>

            <h3 className="font-medium mb-2">
              {t("language") === "it" ? "Per AWS Amplify:" : "For AWS Amplify:"}
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
              <li>
                {t("language") === "it"
                  ? "Vai alla console AWS Amplify"
                  : "Go to the AWS Amplify console"}
              </li>
              <li>
                {t("language") === "it"
                  ? 'Seleziona la tua app → "Domain management"'
                  : 'Select your app → "Domain management"'}
              </li>
              <li>
                {t("language") === "it"
                  ? 'Clicca su "Add domain" e segui il processo di configurazione'
                  : 'Click on "Add domain" and follow the setup process'}
              </li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              <span className="inline-block w-8 h-8 bg-primary text-white rounded-full text-center leading-8 mr-2">
                4
              </span>
              {t("language") === "it"
                ? "Verificare e Attendere la Propagazione DNS"
                : "Verify and Wait for DNS Propagation"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Dopo aver configurato i record DNS, potrebbe essere necessario attendere fino a 48 ore per la propagazione completa. Puoi verificare lo stato della propagazione DNS utilizzando strumenti come:"
                : "After setting up DNS records, you may need to wait up to 48 hours for full propagation. You can check DNS propagation status using tools like:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>
                <a
                  href="https://www.whatsmydns.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  whatsmydns.net
                </a>
              </li>
              <li>
                <a
                  href="https://dnschecker.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  dnschecker.org
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground">
              {t("language") === "it"
                ? "Una volta completata la propagazione DNS, il tuo sito web sarà accessibile tramite il tuo dominio personalizzato."
                : "Once DNS propagation is complete, your website will be accessible via your custom domain."}
            </p>
          </div>

          {/* SSL Certificate */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {t("language") === "it"
                ? "Configurare il Certificato SSL"
                : "Set Up SSL Certificate"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("language") === "it"
                ? "Per garantire che il tuo sito sia sicuro e utilizzi HTTPS, avrai bisogno di un certificato SSL:"
                : "To ensure your site is secure and uses HTTPS, you'll need an SSL certificate:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                {t("language") === "it"
                  ? "La maggior parte delle piattaforme di hosting moderne (Vercel, Netlify, AWS Amplify) forniscono certificati SSL gratuiti automaticamente."
                  : "Most modern hosting platforms (Vercel, Netlify, AWS Amplify) provide free SSL certificates automatically."}
              </li>
              <li>
                {t("language") === "it"
                  ? "Se gestisci il tuo server, puoi ottenere un certificato SSL gratuito da Let's Encrypt."
                  : "If you're managing your own server, you can get a free SSL certificate from Let's Encrypt."}
              </li>
              <li>
                {t("language") === "it"
                  ? "Alcuni registrar di domini offrono anche certificati SSL come servizio aggiuntivo."
                  : "Some domain registrars also offer SSL certificates as an add-on service."}
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default CustomDomainGuide;
