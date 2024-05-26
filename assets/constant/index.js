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
      text: "I am an Information Systems graduate who has work experience as an IT staff where I am responsible for creating systems and managing internal systems such as POS and ERP in companies. Currently I am interested in the field of AI / ML Engineer",
    },
    id: {
      title: "Bio",
      text: "Saya lulusan Sistem Informasi yang memiliki pengalaman pekerjaan sebagai IT staff dimana bertanggung jawab dalam pembuatan sistem dan mengelola sistem internal seperti POS dan ERP di perusahaan. Saat ini saya tertarik di bidang AI / ML Engineer",
    },
  },
  exp: {
    en: {
      title: "Experience",
      text: [
        {
          jobTitle: "IT Staff",
          comp: " PT. Galuh Citarum",
          date: "Jan 2021 - present"
        },
        {
          jobTitle: "HRGA Staff",
          comp: " PT. DaikyoNishikawa Tenma Indonesia",
          date: "Nov 2018 - Okt 2020"
        },
        {
          jobTitle: "Production Operator",
          comp: " PT. HPPM",
          date: "Agst 2017 - Agst 2018"
        },
        {
          jobTitle: "Production Operator",
          comp: " PT. Shin-Etsu Polymer Indonesia",
          date: "Apr 2015 - Apr 2017"
        },
      ],
    },
    id: {
      title: "Pengalaman",
      text:  [
        {
          jobTitle: "IT Staff",
          comp: " PT. Galuh Citarum",
          date: "Jan 2021 - present"
        },
        {
          jobTitle: "HRGA Staff",
          comp: " PT. DaikyoNishikawa Tenma Indonesia",
          date: "Nov 2018 - Okt 2020"
        },
        {
          jobTitle: "Operator Produksi",
          comp: " PT. HPPM",
          date: "Agustus 2017 - Agustus 2018"
        },
        {
          jobTitle: "Operator Produksi",
          comp: " PT. Shin-Etsu Polymer Indonesia",
          date: "Apr 2015 - Apr 2017"
        },
      ],
    },
  },
  education : {
    en : {
      title : "Education",
      text : [
      {
          name : "STMIK Kharisma Karawang",
          major : "Information System",
          date: "Sept 2016 - Sept 2020"
      },
      {
          name : "SMAN 5 Karawang",
          major : "Science",
          date: " Mei 2011 - Mei 2014"
      },
      ]
    },
    id : {
      title : "Pendidikan",
      text : [
      {
          name : "STMIK Kharisma Karawang",
          major : "Sistem Informasi",
          date: "Sept 2016 - Sept 2020"
      },
      {
          name : "SMAN 5 Karawang",
          major : "IPA",
          date: " Mei 2011 - Mei 2014"
      },
      ]
    },
  }
};

// Fungsi untuk mengubah bahasa
function changeLanguage() {
  var selectedLanguage = document.getElementById("languageSelect").value;
  document.getElementById("greeting").textContent =
    portfolio.greeting[selectedLanguage];
  document.getElementById("textButton").textContent =
    portfolio.textButton[selectedLanguage];
  document.getElementById("bioTitle").textContent =
    portfolio.bio[selectedLanguage].title;
  document.getElementById("bio").textContent = portfolio.bio[selectedLanguage].text;
  document.getElementById("experienceTitle").textContent =
    portfolio.exp[selectedLanguage]["title"];

  var expContainer = document.getElementById("expContainer");
  expContainer.innerHTML = '';

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


  document.getElementById("eduTitle").textContent =
    portfolio.education[selectedLanguage]["title"];

  var eduContainer = document.getElementById("eduContainer");
  eduContainer.innerHTML = '';

  var edu = portfolio.education[selectedLanguage].text;
  edu.forEach(function (job) {
    var qualificationData = document.createElement("div");
    qualificationData.classList.add("qualification__data");

    // Menambahkan judul area kualifikasi (judul pekerjaan)
    var qualificationArea = document.createElement("h3");
    qualificationArea.classList.add("qualification__area");
    qualificationArea.textContent = job.name;
    qualificationData.appendChild(qualificationArea);

    // Membuat kotak untuk informasi pekerjaan
    var qualificationBox = document.createElement("div");
    qualificationBox.classList.add("qualification__box");

    // Menambahkan informasi pekerjaan: perusahaan
    var workCompany = document.createElement("span");
    workCompany.classList.add("qualification__work");
    workCompany.innerHTML =
      "<i class='bx bx-briefcase-alt qualification__icon'></i> " + job.major;
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
    eduContainer.appendChild(qualificationData);
  });
}

// Panggil fungsi changeLanguage() agar tampilan awal menggunakan bahasa default
changeLanguage();
