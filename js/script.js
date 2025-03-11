// Language dictionary for translations
const translations = {
    "en": {
        "title": "Personal Website",
        "nav-brand": "Hello There 🌍",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "lang-text": "Language",
        "about-title": "About Me",
        "about-desc": "Technology is not just about writing code, it’s about solving real-world problems and building a better future.",
        "about-text": "I am a problem solver, a builder, and a technology enthusiast who believes that software is not just about lines of code, but about shaping the way we interact with the world.",
        "resume-button": "Download My Resume",
        "contact-title": "Contact Me",
        "contact-name": "Your Name:",
        "contact-email": "Your Email:",
        "contact-message": "Your Message:",
        "contact-button": "Send",
        "contact-placeholder-name": "Enter your name",
        "contact-placeholder-email": "Enter your email",
        "contact-placeholder-message": "Write your message"
    },
    "tr": {
        "title": "Kişisel Web Sitesi",
        "nav-brand": "Merhabalar Hoşgeldiniz 🌍",
        "nav-about": "Hakkımda",
        "nav-projects": "Projeler",
        "nav-contact": "İletişim",
        "lang-text": "Dil",
        "about-title": "Hakkımda",
        "about-desc": "Teknoloji sadece kod yazmak değil, gerçek dünya problemlerini çözmek ve daha iyi bir gelecek inşa etmektir.",
        "about-text": "Ben bir problem çözücü, bir geliştirici ve teknoloji meraklısıyım. Yazılımın sadece kod satırlarından ibaret olmadığına, dünyayla nasıl etkileşim kurduğumuzu şekillendirdiğine inanıyorum.",
        "resume-button": "Özgeçmişimi İndir",
        "contact-title": "Bana Ulaşın",
        "contact-name": "Adınız:",
        "contact-email": "E-posta Adresiniz:",
        "contact-message": "Mesajınız:",
        "contact-button": "Gönder",
        "contact-placeholder-name": "Adınızı girin",
        "contact-placeholder-email": "E-posta adresinizi girin",
        "contact-placeholder-message": "Mesajınızı yazın..."
    }
};

// Change language function
function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        let key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-placeholder]").forEach(element => {
        let key = element.getAttribute("data-placeholder");
        if (translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // Store selected language in localStorage
    localStorage.setItem("selectedLanguage", lang);
}

// Load saved language preference
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default English
    changeLanguage(savedLanguage);
});

// Function to update active navbar link
function updateActiveNavLink(event) {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
}

// Call function on page load
document.addEventListener("DOMContentLoaded", updateActiveNavLink);

// Call function when user clicks a navbar link
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", updateActiveNavLink);
});