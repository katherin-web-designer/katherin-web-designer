const texts = {
    es: {
        title: "Diseño de Páginas Web para Negocios Pequeños",
        subtitle: "Soluciones accesibles, profesionales y rápidas",
        aboutTitle: "¿Quién soy?",
        aboutText: "Soy Katherin, creadora de páginas web rápidas, modernas y perfectas para negocios pequeños. Trabajo con precios accesibles para todos.",
        servicesTitle: "Servicios",
        pricingTitle: "Precios",
        pricingText: "$30 – $50 según la complejidad. Entrega en 48 horas.",
        contactTitle: "Contacto",
        contactText: "Envíame un mensaje por WhatsApp para comenzar tu página web.",
    },

    en: {
        title: "Web Design for Small Businesses",
        subtitle: "Affordable, professional and fast solutions",
        aboutTitle: "Who am I?",
        aboutText: "I am Katherin, a web designer who creates fast, modern websites for small businesses. I work with accessible prices for everyone.",
        servicesTitle: "Services",
        pricingTitle: "Pricing",
        pricingText: "$30 – $50 depending on complexity. Delivery in 48 hours.",
        contactTitle: "Contact",
        contactText: "Send me a WhatsApp message to start your website.",
    }
};

let current = "es";

document.getElementById("language-toggle").addEventListener("click", () => {
    current = current === "es" ? "en" : "es";

    const lang = texts[current];

    document.getElementById("title").textContent = lang.title;
    document.getElementById("subtitle").textContent = lang.subtitle;
    document.getElementById("about-title").textContent = lang.aboutTitle;
    document.getElementById("about-text").textContent = lang.aboutText;
    document.getElementById("services-title").textContent = lang.servicesTitle;
    document.getElementById("pricing-title").textContent = lang.pricingTitle;
    document.getElementById("pricing-text").textContent = lang.pricingText;
    document.getElementById("contact-title").textContent = lang.contactTitle;
    document.getElementById("contact-text").textContent = lang.contactText;
});
