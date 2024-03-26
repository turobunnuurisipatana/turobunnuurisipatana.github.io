var kopSurat1 = "BADAN TA’MIRUL MASJID";
var kopSurat2 = "TUROBUNNUURI SIPATANA";
// Website
var judulWeb = "BTM Turobunnuuri Sipatana";
var logoWeb = "logo turobunnur sipatana.png";
var logoWeb2 = "logo turobunnur sipatana.jpg";
var logoFooter = "logo turobunnur sipatana shadow.png";

// List Kontak
let dataAlamat = "Jl. Yusuf Hasiru, Kel. Bulotadaa Timur, Kec. Sipatana, Kota Gorontalo";
let dataTelepon = "6281234567890";
let dataEmail = "turobunnuuri.sipatana@gmail.com";
let dataWebsite = "turobunnuurisipatana.github.io";
let dataGithub = "turobunnuurisipatana";
let dataVersi = `v1.0.1 <small class="small badge badge-success font-weight-normal text-dark badge-pill">Beta</small>`;

// WAKTU HARI INI
let waktu = new Date();
let hr = waktu.getDay()
const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
let hari = namaHari[hr];
let tanggal = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
let bln = waktu.getMonth();
const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
let bulan = namaBulan[bln];
let tahun = waktu.getFullYear();
let tahunHijriah = tahun - 579;

// Format Tanggal Indonesia
function formatTanggal(date){
    let waktu = new Date(date);
    let hr = waktu.getDay()
    const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    let hari = namaHari[hr];
    let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
    let bln = waktu.getMonth();
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    let bulan = namaBulan[bln];
    let thn = waktu.getFullYear();

    return `${hari}, ${tgl} ${bulan} ${thn}`;
}

// UCWORD
function ucword(text){
    return text[0].toUpperCase() + text.substring(1);
}

// Format Angka
function angka(number){
    return number.toLocaleString("id-ID");
}

AOS.init();