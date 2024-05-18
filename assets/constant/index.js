var portfolio = {
  greeting: {
    en: "Hi My Name",
    id: "Halo Nama Saya",
  },
  textButton: {
    en: "Download CV",
    id: "Unduh CV",
  },
  bio: {
    en: {
      title: "My Bio",
      text: "Saya",
    },
    id: {
      title: "Bio",
      text: "Saya lulusan Sistem Informasi yang memiliki pengalaman pekerjaan sebagai IT Staff dimana bertangungg jawab dalam pembuatan",
    },
  },
  exp: {
    en: {
      title: "Experience",
      text: [
        {
          jobTitle: "IT Staff",
          comp: "PT. Galuh Citarum",
          date: "2021 - present",
          jobdesk: [
            "Mengatur Kewenangan hak akses user dalam sistem internal seperti POS System dan ERP",
            "Menjadi liaison antara user dengan vendor dalam menganalisa kendala yang dihadapi oleh end user.",
            "Membuat program internal untuk perusahaan.",
          ],
        },
        {
          jobTitle: "HRGA Staff",
          comp: "PT. DaikyoNishikawa Tenma Indonesia",
          date: "2018 - 2020",
          jobdesk: [
            "Mengatur Kewenangan hak akses user dalam sistem internal seperti POS System dan ERP",
            "Menjadi liaison antara user dengan vendor dalam menganalisa kendala yang dihadapi oleh end user.",
            "Membuat program internal untuk perusahaan.",
          ],
        },
      ],
    },
    id: {
      title: "Pengalaman",
      text: "",
    },
  },
};

// Fungsi untuk mengubah bahasa
function changeLanguage() {
  var selectedLanguage = document.getElementById("languageSelect").value;
  document.getElementById("greeting").textContent =
    portfolio.greeting[selectedLanguage];
  document.getElementById("textButton").textContent =
    portfolio.textButton[selectedLanguage];
  document.getElementById("bioTitle").textContent =
    portfolio.bio[selectedLanguage]["title"];
  document.getElementById("bio").textContent = portfolio.bio[selectedLanguage];
  document.getElementById("experienceTitle").textContent =
    portfolio.exp[selectedLanguage]["title"];

  var expContainer = document.getElementById("expContainer");
  var experience = portfolio.exp[selectedLanguage].text;
  experience.forEach(function (job) {
    var qualificationData = document.createElement("div");
    qualificationData.classList.add("qualification__data");

    // Menambahkan judul area kualifikasi (judul pekerjaan)
    var qualificationArea = document.createElement("h3");
    qualificationArea.classList.add("qualification__area");
    qualificationArea.textContent = job.jobTitle;
    qualificationData.appendChild(qualificationArea);

    // Membuat kotak untuk informasi pekerjaan
    var qualificationBox = document.createElement("div");
    qualificationBox.classList.add("qualification__box");

    // Menambahkan informasi pekerjaan: perusahaan
    var workCompany = document.createElement("span");
    workCompany.classList.add("qualification__work");
    workCompany.innerHTML =
      "<i class='bx bx-briefcase-alt qualification__icon'></i>" + job.comp;
    qualificationBox.appendChild(workCompany);

    // Menambahkan informasi pekerjaan: periode
    var workDate = document.createElement("span");
    workDate.classList.add("qualification__work");
    workDate.innerHTML =
      "<i class='bx bx-calendar-alt qualification__icon'></i>" + job.date;
    qualificationBox.appendChild(workDate);

    // Menambahkan kotak informasi pekerjaan ke dalam data kualifikasi
    qualificationData.appendChild(qualificationBox);

    // Menambahkan elemen kualifikasi ke dalam container
    expContainer.appendChild(qualificationData);
  });
}

// Panggil fungsi changeLanguage() agar tampilan awal menggunakan bahasa default
changeLanguage();
