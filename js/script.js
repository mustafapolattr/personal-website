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

    // Apply dark mode if saved
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").innerText = "☀️ Light Mode";
    }
});

// Function to change language dynamically
function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        let key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            if (element.tagName === "SPAN") {
                element.innerText = translations[lang][key]; // Handle span inside buttons/links
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach(element => {
        let key = element.getAttribute("data-placeholder");
        if (translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

    localStorage.setItem("selectedLanguage", lang);
}

// Function to toggle dark mode
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
    this.innerText = mode === "dark" ? "☀️" : "🌙";
});

// Check user preference on page load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").innerText = "☀️";
    } else {
        document.getElementById("dark-mode-toggle").innerText = "🌙";
    }
});

// Function to trigger fade-in animation when elements are in viewport
function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
}

document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
