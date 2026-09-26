const translations = {
  de: {
    heroBadge: "✨ Echte Empfehlungen & Luxus",
    heroSubtitle: "Bist du es auch leid, stundenlang nach dem perfekten Urlaub zu suchen?",
    searchPlaceholder: "Hotel, Stadt oder Ort suchen...",
    heroBtn: "Hotel-Tipps entdecken",
    hotelsTitle: "Handverlesene Hotel-Empfehlungen 🏨",
    aboutTitle: "Über uns 🌿",
    aboutText: "Hallo & Willkommen! Ich bin jemand, der das Reisen über alles liebt, neugierig auf neue Orte ist und großen Wert auf <strong>Qualität, Komfort und echte Entspannung</strong> legt. Ich kenne das Gefühl, stundenlang nach dem richtigen Hotel zu suchen – deshalb teile ich hier meine ehrlichen Tipps und Erfahrungen, damit dein nächster Urlaub einfach perfekt wird!",
    b2bText: "Sie führen ein exklusives Hotel oder Resort und möchten auf <strong>Travelwithkotkaa</strong> präsentiert werden? Schreiben Sie uns direkt an <strong>kotka.reisen@gmail.com</strong>.",
    contactTitle: "Kontakt & Anfragen ✉️",
    contactSubtitle: "Egal ob Reisender mit Fragen oder Hotel für Kooperationen – schreibe uns gerne direkt per E-Mail oder Formular!"
  },
  en: {
    heroBadge: "✨ Genuine Recommendations & Luxury",
    heroSubtitle: "Are you tired of searching for hours to find the perfect holiday?",
    searchPlaceholder: "Search hotel, city or place...",
    heroBtn: "Discover Hotel Tips",
    hotelsTitle: "Handpicked Hotel Recommendations 🏨",
    aboutTitle: "About Us 🌿",
    aboutText: "Hello & Welcome! I am someone who loves traveling above all else, curious about new places, and values <strong>quality, comfort, and true relaxation</strong>. I know the feeling of searching for hours for the right hotel – that's why I share my honest tips and experiences here so your next trip is simply perfect!",
    b2bText: "Do you run an exclusive hotel or resort and want to be featured on <strong>Travelwithkotkaa</strong>? Contact us directly at <strong>kotka.reisen@gmail.com</strong>.",
    contactTitle: "Contact & Inquiries ✉️",
    contactSubtitle: "Whether you are a traveler with questions or a hotel looking for partnership – feel free to contact us via email or the form!"
  },
  tr: {
    heroBadge: "✨ Gerçek Tavsiyeler & Lüks",
    heroSubtitle: "Mükemmel tatili bulmak için saatlerce arama yapmaktan sıkılmadınız mı?",
    searchPlaceholder: "Otel, şehir veya konum ara...",
    heroBtn: "Otel Tavsiyelerini Keşfet",
    hotelsTitle: "Seçkin Otel Tavsiyeleri 🏨",
    aboutTitle: "Hakkımızda 🌿",
    aboutText: "Merhaba & Hoş Geldiniz! Ben gezmeyi her şeyden çok seven, yeni yerlere meraklı, <strong>kaliteye, konfora ve gerçek rahatlığa</strong> önem veren biriyim. Doğru oteli bulmak için saatlerce arama yapmanın nasıl bir şey olduğunu çok iyi biliyorum – bu yüzden bir sonraki tatilinizin mükemmel geçmesi için en samimi tavsiyelerimi burada paylaşıyorum!",
    b2bText: "Lüks bir otel işletiyor ve <strong>Travelwithkotkaa</strong> üzerinde yer almak mı istiyorsunuz? Bize doğrudan <strong>kotka.reisen@gmail.com</strong> adresinden ulaşın.",
    contactTitle: "İletişim & Başvuru ✉️",
    contactSubtitle: "Sorusu olan bir gezgin veya iş birliği arayan bir otel olun – bize e-posta veya form üzerinden doğrudan yazabilirsiniz!"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith("tr")) changeLanguage("tr");
  else if (userLang.startsWith("en")) changeLanguage("en");
  else changeLanguage("de");
});

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.remove('open');
}

function changeLanguage(lang) {
  document.getElementById('btn-de').classList.remove('active');
  document.getElementById('btn-en').classList.remove('active');
  document.getElementById('btn-tr').classList.remove('active');
  document.getElementById(`btn-${lang}`).classList.add('active');

  const data = translations[lang];
  document.getElementById('hero-badge').innerHTML = data.heroBadge;
  document.getElementById('hero-subtitle').innerHTML = data.heroSubtitle;
  document.getElementById('searchInput').placeholder = data.searchPlaceholder;
  document.getElementById('hotels-title').innerHTML = data.hotelsTitle;
  document.getElementById('about-title').innerHTML = data.aboutTitle;
  document.getElementById('about-text').innerHTML = data.aboutText;
  document.getElementById('b2b-text').innerHTML = data.b2bText;
  document.getElementById('contact-title').innerHTML = data.contactTitle;
  document.getElementById('contact-subtitle').innerHTML = data.contactSubtitle;

  const langs = ['de', 'en', 'tr'];
  langs.forEach(l => {
    document.querySelectorAll(`.hotel-desc-${l}`).forEach(el => el.style.display = (l === lang) ? 'block' : 'none');
    document.querySelectorAll(`.tag-${l}`).forEach(el => el.style.display = (l === lang) ? 'inline-block' : 'none');
  });
}

function searchHotels() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  document.querySelectorAll('.hotel-card').forEach(card => {
    const keywords = card.getAttribute('data-keywords').toLowerCase();
    const content = card.innerText.toLowerCase();
    card.style.display = (keywords.includes(input) || content.includes(input)) ? 'block' : 'none';
  });
}

function filterCategory(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.hotel-card').forEach(card => {
    if (cat === 'all' || card.getAttribute('data-category').includes(cat)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
