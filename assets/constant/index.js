var portfolio = {
  greeting: {
    en: "Hi My Name",
    id: "Halo Nama Saya",
  },
  textButton: {
    en: "Download CV",
    id: "Unduh CV",
  },
  about: {
    en: "",
    id: "Saya lulusan Sistem Informasi yang memiliki pengalaman pekerjaan sebagai IT Staff dimana bertangungg jawab dalam pembuatan",
  },
};

// Fungsi untuk mengubah bahasa
function changeLanguage() {
  var selectedLanguage = document.getElementById("languageSelect").value;
  document.getElementById("greeting").textContent =
    portfolio.greeting[selectedLanguage];
  document.getElementById("textButton").textContent =
    portfolio.textButton[selectedLanguage];
  document.getElementById("about").textContent =
    portfolio.about[selectedLanguage];
}

// Panggil fungsi changeLanguage() agar tampilan awal menggunakan bahasa default
changeLanguage();
