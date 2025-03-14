// Language dictionary for translations
const translations = {
    "en": {
        "title": "Personal Website",
        "nav-brand": "Hello There 🌍",
        "nav-about": "About",
        "nav-game": "Reflex Game",
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
        "contact-placeholder-message": "Write your message...",
        "form-success": "Message sent successfully!",
        "form-error": "Error sending message. Try again later.",
        "timeline-title-1": "2018 - Started Programming",
        "timeline-text-1": "Bachelor's Degree in Electronics and Communication Engineering and my first encounter with programming using C",
        "timeline-title-2": "2019 - 2020",
        "timeline-text-2": "In my undergraduate education, I took the subject of software to a higher level with Java and Python",
        "timeline-title-3": "2021",
        "timeline-text-3": "Introduction to embedded systems using Raspberry Pi and Python.",
        "timeline-title-4": "2021 - 2022",
        "timeline-text-4": "To delve deeper into software using C and Python in my internships",
        "timeline-title-5": "2022",
        "timeline-text-5": "Starting your career as a back-end software developer (Java - Python)",
        "timeline-title-6": "2025 - Future Goals",
        "timeline-text-6": "Focusing on innovation, following technology closely and sailing to future horizons with artificial intelligence.",
        "game-title": "Test Your Reflexes!",
        "game-desc": "Click as soon as the color changes!",
        "game-start": "Start Game",
        "game-wait": "Wait for the color change...",
        "game-click": "CLICK NOW!",
        "game-result": "Your reaction time: ",
        "game-restart": "Click Start to play again!",
        "game-best-score": "Best Score: "
    },
    "tr": {
        "title": "Kişisel Web Sitesi",
        "nav-brand": "Merhabalar Hoşgeldiniz 🌍",
        "nav-about": "Hakkımda",
        "nav-game": "Refleks Oyunu",
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
        "contact-placeholder-message": "Mesajınızı yazın...",
        "form-success": "Mesaj başarıyla gönderildi!",
        "form-error": "Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.",
        "timeline-title-1": "2018 - Programlamaya Başladım",
        "timeline-text-1": "Elektrik ve Haberleşme Mühendisliği lisans eğitimim ve C dili ile programlamayla ilk tanışmam",
        "timeline-title-2": "2019 - 2020",
        "timeline-text-2": "Lisans eğitimimde yazılım konusunu Java ve Python ile daha ileri seviyeye taşıdım",
        "timeline-title-3": "2021",
        "timeline-text-3": "Raspberry Pi ve Python kullanarak gömülü sistemlere giriş yaptım.",
        "timeline-title-4": "2021 - 2022",
        "timeline-text-4": "Stajlarımda C ve Python kullanarak yazılım alanında daha derinlemesine çalıştım",
        "timeline-title-5": "2022",
        "timeline-text-5": "Back-end yazılım geliştirici olarak kariyerime başladım (Java - Python)",
        "timeline-title-6": "2025 - Gelecek Hedeflerim",
        "timeline-text-6": "Yeniliklere odaklanarak, teknolojiyi yakından takip ederek ve yapay zeka ile geleceğe yelken açıyorum.",
        "game-title": "Reflekslerinizi Test Edin!",
        "game-desc": "Renk değiştiğinde hemen tıklayın!",
        "game-start": "Oyunu Başlat",
        "game-wait": "Renk değişmesini bekleyin...",
        "game-click": "HEMEN TIKLAYIN!",
        "game-result": "Tepki süreniz: ",
        "game-restart": "Tekrar oynamak için Başlat'a tıklayın!",
        "game-best-score": "En İyi Skor: "
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

$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
        let formMessage = $("#form-message");

        // Basic form validation
        if (!name || !email || !message) {
            formMessage.text("Please fill out all fields.").css("color", "red");
            return;
        }

        formMessage.text("Sending...").css("color", "blue");

        $.ajax({
            url: "https://formspree.io/f/xdkeorbd",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ name: name, email: email, message: message }),
            success: function (response) {
                formMessage.text("Message sent successfully!").css("color", "green");
                $("#contact-form")[0].reset(); // Formu temizle
            },
            error: function (xhr) {
                console.error("Form submission error:", xhr);
                formMessage.text("Error sending message. Please check your Form ID or try again later.").css("color", "red");
            }
        });
    });
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

document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".timeline-item").forEach(el => el.classList.remove("active"));

        this.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let gameBox = document.getElementById("game-box");
    let gameText = document.getElementById("game-text");
    let startButton = document.getElementById("start-game");
    let reactionTimeDisplay = document.getElementById("reaction-time");
    let bestScoreDisplay = document.getElementById("best-score");

    let startTime, timeout, countdownInterval;
    let gameActive = false; // Oyunun başlatılıp başlatılmadığını takip etmek için

    // En iyi skoru localStorage'dan al
    let bestScore = localStorage.getItem("bestScore");
    if (bestScore) {
        bestScoreDisplay.innerText = `Best Score: ${bestScore} ms`;
    }

    // Oyunu Başlat
    startButton.addEventListener("click", function () {
        if (gameActive) return; // Eğer oyun zaten başladıysa tekrar başlamasın

        gameActive = true;
        gameBox.style.backgroundColor = "red"; // Kutu başlangıçta kırmızıya dönüyor
        gameText.innerText = "Starting in 3..."; // İlk geri sayımı gösteriyoruz
        reactionTimeDisplay.innerText = ""; // Sonuçları temizle

        let countdown = 3;
        countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                gameText.innerText = `Starting in ${countdown}...`;
            } else {
                clearInterval(countdownInterval);
                gameText.innerText = "Wait for color change...";

                let randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 saniye rastgele bekleme süresi

                timeout = setTimeout(() => {
                    gameBox.style.backgroundColor = "green";
                    gameText.innerText = "CLICK NOW!";
                    startTime = new Date().getTime();
                }, randomDelay);
            }
        }, 1000);
    });

    // Refleks Süresini Ölçme ve En İyi Skoru Güncelleme
    gameBox.addEventListener("click", function () {
        if (gameBox.style.backgroundColor === "green") {
            let reactionTime = new Date().getTime() - startTime;
            reactionTimeDisplay.innerText = `Your reaction time: ${reactionTime} ms`;
            gameBox.style.backgroundColor = "red";
            gameText.innerText = "Click Start to play again!";
            gameActive = false; // Oyun tamamlandı

            // En iyi skoru güncelle
            if (!bestScore || reactionTime < bestScore) {
                bestScore = reactionTime;
                localStorage.setItem("bestScore", bestScore);
                bestScoreDisplay.innerText = `Best Score: ${bestScore} ms`;
            }
        }
    });
});