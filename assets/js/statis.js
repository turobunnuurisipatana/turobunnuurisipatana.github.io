// Initialized
document.title = judulWeb;
let iconWeb = document.querySelector("link[rel='icon']");
iconWeb.setAttribute('href','assets/img/' + logoWeb);

let namaWebsite = document.querySelectorAll(".namaWebsite");
namaWebsite.forEach((nw) => {
    nw.innerHTML = judulWeb;
});

// Navbar
function renderNavMenu(){
    var navMenu = document.querySelector('#navMenu');
    navMenu.innerHTML = `<div class="bg-success navbar-dark shadow" data-sticky="top">
                            <div class="container">
                                <nav class="navbar navbar-expand-lg">
                                    <a class="navbar-brand d-flex flex-row align-items-center" href="index.html" data-aos="fade-right">
                                        <img alt="${judulWeb}" class="mr-1" src="assets/img/${logoFooter}" width="30px" />
                                        <h5 class="h5 font-weight-bold text-white">${judulWeb}</h5>
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="offcanvas">
                                        <i class="bi bi-list"></i>
                                    </button>
                                    <div class="navbar-collapse offcanvas-collapse" id="navbarNav">
                                        <!-- Kiri -->
                                        <ul class="navbar-nav  mr-auto" id="ulMenu" data-aos="fade-down"></ul>
                                        <!-- Kanan -->
                                        <div class="text-white text-center" id="divWaktu" data-aos="fade-left"></div>
                                    </div>
                                    <!--end nav collapse-->
                                </nav>
                            </div>
                            <!--end of container-->
                        </div>`;
}

// Menu
function renderMenu() {
    var ulMenu = document.querySelector('#ulMenu');
    var ulFooterMenu = document.querySelector('#ulFooterMenu');
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
            judul: "Jadwal Sholat",
            link: "jadwalsholat.html",
        },
        {
            judul: "Kontak",
            link: "kontak.html",
        },
    ];
    let liMenu = "";
    let liFooterMenu = "";
    menu.forEach((mn) => {
        if("/" + mn.link == window.location.pathname){
            liMenu += `<li class="nav-item text-center font-weight-bold"><a href="${mn.link}" class="nav-link">${mn.judul.toUpperCase()}</a></li>`;
        }else{
            liMenu += `<li class="nav-item text-center"><a href="${mn.link}" class="nav-link">${mn.judul}</a></li>`;
        }
        liFooterMenu += `<li><a href="${mn.link}">${mn.judul}</a></li>`;
    });
    ulMenu.innerHTML = liMenu;
    ulFooterMenu.innerHTML = liFooterMenu;
}

// Footer
function renderFooter(){
    // Profil
    let footer = document.querySelector("footer");
    footer.innerHTML = `<div class="container">
                            <div class="row">
                                <div class="col-12 col-md-5 d-flex flex-column justify-content-center text-center mb-3" data-aos="zoom-in">
                                    <img alt="Logo" src="assets/img/${logoFooter}" class="mx-auto mb-2" width="100px" />
                                    <small class="text-muted m-0"><i class="bi bi-geo-alt m-0"></i> ${dataAlamat}</small>
                                    <small class="m-0"><a href="https://wa.me/${dataTelepon}" class="text-muted" target="_blank"><i class="bi bi-whatsapp m-0"></i> +${dataTelepon}</a></small>
                                    <small class="text-muted m-0"><i class="bi bi-envelope-at m-0"></i> ${dataEmail}</small>
                                    <small class="text-muted m-0"><a href="https://${dataWebsite}" class="text-muted" target="_blank"><i class="bi bi-browser-chrome m-0"></i> ${dataWebsite}</a></small>
                                    <small class="text-muted m-0"><a href="https://github.com/${dataGithub}" class="text-muted" target="_blank"><i class="bi bi-github m-0"></i> @${dataGithub}</a></small>
                                </div>
                                <div class="col-12 col-md-7 justify-content-center text-center" data-aos="zoom-out">
                                    <a href="#mainContent" class="h1 font-weight-bold" >${judulWeb}</a>
                                    <div class="row justify-content-center no-gutters" id="footer" data-aos="fade-down">
                                        <div class="col-6 col-lg-4 mb-3">
                                            <h6>MENU</h6>
                                            <ul class="list-unstyled" id="ulFooterMenu"></ul>
                                        </div>
                                        <div class="col-6 col-lg-4 mb-3">
                                            <h6>WAKTU</h6>
                                            <ul class="list-unstyled">
                                                <li><i class="bi bi-calendar3 mr-1"></i> <a href="#" class="tanggalHariIni"></a></li>
                                                <li><i class="bi bi-clock mr-1"></i> <a href="#" class="jamBerjalan"></a></li>
                                            </ul>
                                        </div>
                                        <div class="col-6 col-lg-4 mb-3">
                                            <h6>VERSI</h6>
                                            <ul class="list-unstyled">
                                                <li><a href="#">${dataVersi}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

// Render
renderNavMenu();
renderFooter();
renderMenu();

// Waktu
let divWaktu = document.querySelector('#divWaktu');
let tanggalHariIni = document.querySelectorAll('.tanggalHariIni');
let jamBerjalan = document.querySelectorAll('.jamBerjalan');
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
        <i class="bi bi-calendar3"></i><span class="ml-1 mr-1">${hari}, ${tgl} ${bulan} ${thn}</span>
        <i class="bi bi-clock ml-1"></i><span class="ml-1 mr-1">${jam} : ${menit} : ${detik}</span> WITA
    `;
    tanggalHariIni.forEach((tglHr) => {
        tglHr.innerHTML = `${hari}, ${tgl} ${bulan} ${thn}`;
    });
    jamBerjalan.forEach((jmb) => {
        jmb.innerHTML = `${jam} : ${menit} : ${detik} WITA`;
    });
}, 1);

// $(function () {
//   'use strict'

//   $('[data-toggle="offcanvas"]').on('click', function () {
//     $('.offcanvas-collapse').toggleClass('open')
//   })
// })

document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', function(){
    // console.log('toggle offcanvas');
    document.querySelector('#navbarNav').classList.toggle('open');
    // document.querySelector('#navbarNav').classList.toggle('collapse');
});