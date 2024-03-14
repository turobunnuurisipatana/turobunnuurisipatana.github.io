const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Website
var judulWeb = "BTM Turobunnuur Sipatana";
var logoWeb = "assets/images/logo turobunnur sipatana.png";

// Initialized
document.title = judulWeb;
let iconWeb = document.querySelector("link[rel='icon']");
iconWeb.setAttribute('href',logoWeb);

// List Kontak
let dataAlamat = "Jl. Yusuf Hasiru No.686, Kel. Bulotadaa Timur, Kec. Sipatana, Kota Gorontalo, Gorontalo 96139";
let dataTelepon = "6281234567890";
let dataEmail = "turobunnuuri.sipatana@gmail.com";
let dataWebsite = "turobunnuurisipatana.github.io";
let dataGithub = "turobunnuurisipatana";

// JADWAL SHOLAT
let jadwalSholat = [
    {
        waktu : "Imsyak",
        jam : "04:29"
    },
    {
        waktu : "Shubuh",
        jam : "04:39"
    },
    {
        waktu : "Terbit Fajar",
        jam : "05:52"
    },
    {
        waktu : "Dhuha",
        jam : "06:16"
    },
    {
        waktu : "Dzuhur",
        jam : "11:59"
    },
    {
        waktu : "Ashr",
        jam : "15:04"
    },
    {
        waktu : "Maghrib",
        jam : "18:02"
    },
    {
        waktu : "Isya",
        jam : "19:11"
    }
]

// Navbar
function renderNavMenu(){
    var navMenu = document.querySelector('#navMenu');
    navMenu.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-lg bg-success bg-gradient shadow" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand fw-bold" href="/"><img src="${logoWeb}" alt="Logo" width="35px" class="rounded-circle me-2">${judulWeb}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="ulMenu"></ul>
                    <div class="navbar-text text-light" id="divWaktu"></div>
                </div>
            </div>
        </nav>
    `;
}

// Menu
function renderMenu() {
    var ulMenu = document.querySelector('#ulMenu');
    let menu = [
        // {
        //     judul: "Beranda",
        //     link: "/",
        // },
        {
            judul: "Organisasi",
            link: "organisasi.html",
        },
        {
            judul: "Kas",
            link: "kas.html",
        },
        {
            judul: "Kontak",
            link: "kontak.html",
        },
    ];
    let liMenu = "";
    menu.forEach((mn) => {
        if("/" + mn.link == window.location.pathname){
            liMenu += `<li class="nav-item"><a class="nav-link active fw-bold text-decoration-underline" href="${mn.link}">${mn.judul}</a></li>`;
        }else{
            liMenu += `<li class="nav-item"><a class="nav-link" href="${mn.link}">${mn.judul}</a></li>`;
        }
    });
    ulMenu.innerHTML = liMenu;
}

// Running Text
function renderRunningText() {
    var runningText = document.querySelector('#runningText');
    let listText = [
        "BTM Turobunnur Sipatana",
        `<i class="bi bi-geo-alt m-0"></i> ${dataAlamat}`,
        `<i class="bi bi-whatsapp m-0"></i> +${dataTelepon}`,
        `<i class="bi bi-envelope-at m-0"></i> ${dataEmail}`,
        `<i class="bi bi-browser-chrome m-0"></i> ${dataWebsite}`,
        `<i class="bi bi-github m-0"></i> @${dataGithub}`,
        "BTM Turobunnur Sipatana",
    ];
    let liRT = `<div class="bg-success-subtle fixed-bottom shadow py-2 small" role="alert"><marquee class="m-0 d-flex align-item-center">`;
    liRT += `<img src="${logoWeb}" alt="Logo" width="20px" class="rounded-circle mx-2">Jadwal Sholat Hari Ini :`;
    jadwalSholat.forEach((js) => {
        liRT += `<img src="${logoWeb}" alt="Logo" width="20px" class="rounded-circle mx-2">${js.waktu} : ${js.jam}`;
    });
    for (let t = 0; t < listText.length; t++) {
        liRT += `<img src="${logoWeb}" alt="Logo" width="20px" class="rounded-circle mx-2">${listText[t]}`;
    }
    liRT += `<img src="${logoWeb}" alt="Logo" width="20px" class="rounded-circle mx-2"></marquee></div>`;
    runningText.innerHTML = liRT;
}

// Render
renderNavMenu();
renderMenu();
renderRunningText();

// Waktu
let divWaktu = document.querySelector('#divWaktu');
let tanggalHariIni = document.querySelectorAll('.tanggalHariIni');
setInterval(() => {
    let waktu = new Date();
    let hr = waktu.getDay()
    const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    let hari = namaHari[hr];
    let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
    let bln = waktu.getMonth();
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    let bulan = namaBulan[bln];
    let thn = waktu.getFullYear();
    let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
    let menit = waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
    let detik = waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();        
    divWaktu.innerHTML = `
        <span class="me-2"><i class="bi bi-calendar3 me-2"></i>${hari}, ${tgl} ${bulan} ${thn}</span> -
        <span class="ms-2"><i class="bi bi-clock me-2"></i>${jam} : ${menit} : ${detik}</span> WITA
    `;
    tanggalHariIni.forEach((tglHr) => {
        tglHr.innerHTML = `${hari}, ${tgl} ${bulan} ${thn}`;
    });
}, 1);