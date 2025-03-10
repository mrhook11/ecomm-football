import { create } from "zustand";

type Language = "en" | "it";

type Translations = {
  [key: string]: {
    en: string;
    it: string;
  };
};

export const translations: Translations = {
  // Language identifier (for conditional rendering)
  language: {
    en: "en",
    it: "it",
  },

  // Navigation
  "nav.home": {
    en: "Home",
    it: "Home",
  },
  "nav.store": {
    en: "Store",
    it: "Negozio",
  },
  "nav.about": {
    en: "About Us",
    it: "Chi Siamo",
  },
  "nav.contact": {
    en: "Contact",
    it: "Contatti",
  },
  "nav.search": {
    en: "Search",
    it: "Cerca",
  },
  "nav.search.placeholder": {
    en: "Search for footballs...",
    it: "Cerca palloni da calcio...",
  },

  // Home Page
  "hero.title": {
    en: "Premium Footballs for Every Player",
    it: "Palloni da Calcio Premium per Ogni Giocatore",
  },
  "hero.subtitle": {
    en: "Discover our collection of high-quality footballs designed for performance, durability, and precision.",
    it: "Scopri la nostra collezione di palloni da calcio di alta qualità progettati per prestazioni, durata e precisione.",
  },
  "hero.cta.shop": {
    en: "Shop Now",
    it: "Acquista Ora",
  },
  "hero.cta.collections": {
    en: "View Collections",
    it: "Vedi Collezioni",
  },
  "products.featured": {
    en: "Featured Products",
    it: "Prodotti in Evidenza",
  },

  // Product Grid
  "products.sort.popular": {
    en: "Most Popular",
    it: "Più Popolari",
  },
  "products.sort.newest": {
    en: "Newest",
    it: "Più Recenti",
  },
  "products.sort.price.low": {
    en: "Price: Low to High",
    it: "Prezzo: Crescente",
  },
  "products.sort.price.high": {
    en: "Price: High to Low",
    it: "Prezzo: Decrescente",
  },
  "products.showing": {
    en: "Showing",
    it: "Mostrando",
  },
  "products.of": {
    en: "of",
    it: "di",
  },
  "products.products": {
    en: "products",
    it: "prodotti",
  },

  // Product Card
  "product.new": {
    en: "New",
    it: "Nuovo",
  },
  "product.add": {
    en: "Add",
    it: "Aggiungi",
  },

  // Filter Sidebar
  "filter.title": {
    en: "Filters",
    it: "Filtri",
  },
  "filter.clear": {
    en: "Clear All",
    it: "Cancella Tutto",
  },
  "filter.price": {
    en: "Price Range",
    it: "Fascia di Prezzo",
  },
  "filter.brands": {
    en: "Brands",
    it: "Marche",
  },
  "filter.size": {
    en: "Size",
    it: "Taglia",
  },
  "filter.features": {
    en: "Features",
    it: "Caratteristiche",
  },
  "filter.apply": {
    en: "Apply Filters",
    it: "Applica Filtri",
  },

  // Store Page
  "store.title": {
    en: "Football Store",
    it: "Negozio di Palloni da Calcio",
  },
  "store.subtitle": {
    en: "Browse our collection of premium footballs for every player and every game",
    it: "Sfoglia la nostra collezione di palloni da calcio premium per ogni giocatore e ogni partita",
  },
  "store.categories": {
    en: "Categories",
    it: "Categorie",
  },
  "store.category.all": {
    en: "All Products",
    it: "Tutti i Prodotti",
  },
  "store.category.match": {
    en: "Match Balls",
    it: "Palloni da Partita",
  },
  "store.category.training": {
    en: "Training Balls",
    it: "Palloni da Allenamento",
  },
  "store.category.indoor": {
    en: "Indoor Balls",
    it: "Palloni da Indoor",
  },
  "store.category.youth": {
    en: "Youth Balls",
    it: "Palloni per Ragazzi",
  },
  "store.category.accessories": {
    en: "Accessories",
    it: "Accessori",
  },

  // About Page
  "about.title": {
    en: "About Us",
    it: "Chi Siamo",
  },
  "about.subtitle": {
    en: "Passionate about football since 2005",
    it: "Appassionati di calcio dal 2005",
  },
  "about.story.title": {
    en: "Our Story",
    it: "La Nostra Storia",
  },
  "about.values.title": {
    en: "Our Values",
    it: "I Nostri Valori",
  },
  "about.team.title": {
    en: "Our Team",
    it: "Il Nostro Team",
  },
  "about.join.title": {
    en: "Join Our Team",
    it: "Unisciti al Nostro Team",
  },
  "about.join.cta": {
    en: "View Careers",
    it: "Vedi Opportunità di Lavoro",
  },

  // Contact Page
  "contact.title": {
    en: "Contact Us",
    it: "Contattaci",
  },
  "contact.touch.title": {
    en: "Get in Touch",
    it: "Mettiti in Contatto",
  },
  "contact.location": {
    en: "Our Location",
    it: "La Nostra Sede",
  },
  "contact.phone": {
    en: "Phone Number",
    it: "Numero di Telefono",
  },
  "contact.email": {
    en: "Email Address",
    it: "Indirizzo Email",
  },
  "contact.hours": {
    en: "Business Hours",
    it: "Orari di Apertura",
  },
  "contact.form.title": {
    en: "Send Us a Message",
    it: "Inviaci un Messaggio",
  },
  "contact.form.firstName": {
    en: "First Name",
    it: "Nome",
  },
  "contact.form.lastName": {
    en: "Last Name",
    it: "Cognome",
  },
  "contact.form.email": {
    en: "Email Address",
    it: "Indirizzo Email",
  },
  "contact.form.subject": {
    en: "Subject",
    it: "Oggetto",
  },
  "contact.form.message": {
    en: "Message",
    it: "Messaggio",
  },
  "contact.form.send": {
    en: "Send Message",
    it: "Invia Messaggio",
  },

  // Footer
  "footer.quickLinks": {
    en: "Quick Links",
    it: "Link Rapidi",
  },
  "footer.customerService": {
    en: "Customer Service",
    it: "Servizio Clienti",
  },
  "footer.newsletter": {
    en: "Newsletter",
    it: "Newsletter",
  },
  "footer.subscribe": {
    en: "Subscribe",
    it: "Iscriviti",
  },
  "footer.rights": {
    en: "All rights reserved.",
    it: "Tutti i diritti riservati.",
  },
  "footer.shipping": {
    en: "Shipping Policy",
    it: "Politica di Spedizione",
  },
  "footer.returns": {
    en: "Returns & Refunds",
    it: "Resi e Rimborsi",
  },
  "footer.faq": {
    en: "FAQ",
    it: "FAQ",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    it: "Informativa sulla Privacy",
  },
  "footer.terms": {
    en: "Terms & Conditions",
    it: "Termini e Condizioni",
  },
  "footer.newsletter.text": {
    en: "Subscribe to receive updates, access to exclusive deals, and more.",
    it: "Iscriviti per ricevere aggiornamenti, accesso a offerte esclusive e altro ancora.",
  },
};

type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

export const useLanguage = create<LanguageStore>((set, get) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
  t: (key) => {
    const { language } = get();
    return translations[key]?.[language] || key;
  },
}));
