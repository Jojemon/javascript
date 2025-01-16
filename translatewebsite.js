const translations = {
    en: {
        title: "Welcome to Our Website",
        aboutTitle: "About Us",
        aboutText: "This website demonstrates how to implement a multilingual feature using JavaScript.",
        servicesTitle: "Our Services",
        servicesText: "We provide web development, mobile app development, and software solutions.",
        contactTitle: "Contact Us",
        contactText: "Email us at info@example.com or call us at +123 456 7890.",
        footerText: "&copy; 2025 Multilingual Website. All rights reserved."
    },
    bn: {
        title: "আমাদের ওয়েবসাইটে স্বাগতম",
        aboutTitle: "আমাদের সম্পর্কে",
        aboutText: "এই ওয়েবসাইটটি জাভাস্ক্রিপ্ট ব্যবহার করে বহুভাষিক বৈশিষ্ট্য কীভাবে বাস্তবায়ন করতে হয় তা প্রদর্শন করে।",
        servicesTitle: "আমাদের সেবাসমূহ",
        servicesText: "আমরা ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট এবং সফটওয়্যার সমাধান প্রদান করি।",
        contactTitle: "যোগাযোগ করুন",
        contactText: "info@example.com এ আমাদের ইমেল করুন বা +123 456 7890 এ কল করুন।",
        footerText: "&copy; ২০২৫ বহুভাষিক ওয়েবসাইট। সর্বস্বত্ব সংরক্ষিত।"
    },
    es: {
        title: "Bienvenido a Nuestro Sitio Web",
        aboutTitle: "Sobre Nosotros",
        aboutText: "Este sitio web demuestra cómo implementar una función multilingüe usando JavaScript.",
        servicesTitle: "Nuestros Servicios",
        servicesText: "Ofrecemos desarrollo web, desarrollo de aplicaciones móviles y soluciones de software.",
        contactTitle: "Contáctenos",
        contactText: "Envíenos un correo a info@example.com o llámenos al +123 456 7890.",
        footerText: "&copy; 2025 Sitio Web Multilingüe. Todos los derechos reservados."
    },
    fr: {
        title: "Bienvenue sur Notre Site Web",
        aboutTitle: "À Propos de Nous",
        aboutText: "Ce site Web démontre comment implémenter une fonctionnalité multilingue en utilisant JavaScript.",
        servicesTitle: "Nos Services",
        servicesText: "Nous fournissons des solutions de développement web, développement d'applications mobiles et logiciels.",
        contactTitle: "Contactez-Nous",
        contactText: "Envoyez-nous un email à info@example.com ou appelez-nous au +123 456 7890.",
        footerText: "&copy; 2025 Site Web Multilingue. Tous droits réservés."
    }
};

function translatePage() {
    const selectedLanguage = document.getElementById("languageSelect").value;
    const translation = translations[selectedLanguage];

    if (translation) {
        document.getElementById("title").textContent = translation.title;
        document.getElementById("aboutTitle").textContent = translation.aboutTitle;
        document.getElementById("aboutText").textContent = translation.aboutText;
        document.getElementById("servicesTitle").textContent = translation.servicesTitle;
        document.getElementById("servicesText").textContent = translation.servicesText;
        document.getElementById("contactTitle").textContent = translation.contactTitle;
        document.getElementById("contactText").textContent = translation.contactText;
        document.getElementById("footerText").innerHTML = translation.footerText;
    }
}
