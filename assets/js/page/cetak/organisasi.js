var kopSurat = document.querySelector('#kopSurat');
var headerOrganisasi = document.querySelector('#headerOrganisasi');
var headerPeriode = document.querySelector('#headerPeriode');

kopSurat.innerHTML = `<td class="text-center align-middle" width="10%"><img src="../assets/img/${logoWeb2}" alt="Logo" width="75px"></td>
                    <td class="align-middle">
                        <h5 class="text-center font-weight-bold m-0">${kopSurat1}</h5>
                        <h3 class="text-center font-weight-bold m-0">"${kopSurat2}"</h3>
                        <small class="d-block text-center small m-0">${dataAlamat}</small>
                        <small class="d-block text-center small m-0"><i class="bi bi-whatsapp m-0"></i> +${dataTelepon}&nbsp&nbsp&nbsp<i class="bi bi-envelope-at m-0"></i> ${dataEmail}</small>
                    </td>
                    <td class="text-center align-middle" width="10%"></td>`;
headerOrganisasi.innerHTML = "SUSUNAN PENGURUS BADAN TA’MIRUL MASJID TUROBUNNUURI<br>KEL. BULOTADAA TIMUR KEC. SIPATANA KOTA GORONTALO";
headerPeriode.innerHTML = "PERIODE 2023 - 2026";

// Data Organisasi
// Dewan Syuro dan Pembina
let tbodySyuroPembina = document.querySelector("#tbodySyuroPembina");
let isiSyuroPembina = "";
let syuroPembina = [
    {
        jabatan: "DEWAN SYURO",
        nama: [
            "Prof. DR. KARTIN LIHAWA, M.Pd (ROIS)",
            "H. SAMRAN HASAN (WAKIL ROIS)",
            "ARIFIN HELINGO (WAKIL ROIS)",
            "H. HUSNI HELINGO (KATIB)",
            "K.H. HELMI PODUNGGE (AHWAN)",
            "LURAH BULOTADAA TIMUR (AHWAN)",
        ]
    },
    {
        jabatan: "DEWAN PEMBINA",
        nama: [
            "Ha. RAHMIYATI JAHJA, M.Pd",
            "H. ABDUL RACHMAN ABUBAKAR BAHMID, Lc., MH",
        ]
    },
]

for (let sp = 0; sp < syuroPembina.length; sp++) {
    isiSyuroPembina += `<tr>
                            <th class="font-weight-bold" width="170px">${syuroPembina[sp].jabatan}</th>
                            <th class="font-weight-bold text-center" width="20px">:</th><td class="pb-3">`;
    syuroPembina[sp].nama.forEach((spn) => {
        isiSyuroPembina += `${spn}<br>`
    });
    isiSyuroPembina += `</td></tr>`;
}
tbodySyuroPembina.innerHTML = isiSyuroPembina;

// Pengurus Harian
let tbodyPengurusHarian = document.querySelector("#tbodyPengurusHarian");
let isiPengurusHarian = "";
let pengurusHarian = [
    {
        jabatan: "Ketua",
        nama: "H. ALWI PODUNGGE, S.IP"
    },
    {
        jabatan: "Wakil Ketua",
        nama: "H. SUHARTONO, SKM., M.Epid"
    },
    {
        jabatan: "Sekretaris",
        nama: "H. ABDULLAH N. TUE"
    },
    {
        jabatan: "Wakil Sekretaris",
        nama: "HENDRIK IDRUS"
    },
    {
        jabatan: "Bendahara",
        nama: "H. TONIYANTO KASIM"
    },
]

isiPengurusHarian += `<tr>
                    <th class="font-weight-bold" width="170px">PENGURUS HARIAN</th>
                    <th class="font-weight-bold text-center" width="20px">:</th><th class="font-weight-bold align-middle" width="110px">`;
                    
pengurusHarian.forEach((phj) => {
    isiPengurusHarian += `${phj.jabatan}<br>`;
});

isiPengurusHarian += `</th><th class="font-weight-bold text-center align-middle" width="20px">`;

pengurusHarian.forEach((pht) => {
    isiPengurusHarian += `:<br>`;
});

isiPengurusHarian += `</th><td class="align-middle">`;

pengurusHarian.forEach((phn) => {
    isiPengurusHarian += `${phn.nama}<br>`;
});


isiPengurusHarian += `</td></tr>`;

tbodyPengurusHarian.innerHTML = isiPengurusHarian;

// Data Bidang - Bidang
let tbodyBidang = document.querySelector("#tbodyBidang");
let isiBidang = ``;
let tbodyBidang2 = document.querySelector("#tbodyBidang2");
let isiBidang2 = ``;

// Bidang - Bidang
let bidangBidang = [
    {
        bidang: "IDARAH/PENGELOLAAN",
        ketua: "RASYID GIONTE",
        anggota: [
            "Ha. NIKMA MIOLO",
            "H. ZAENAL SALEH",
            "RIDA TOBAMBA",
            "MISRAN GANI",
            "FATMA LAMANI",
            "SUWARNI TOBAMBA",
            "RAMLAH HOU"
        ]
    },
    {
        bidang: "IMARAH/PEMAKMURAN",
        ketua: "JUFRI KUMBU",
        anggota: [
            "SABRIN GANI",
            "H. FAHMI THALIB",
            "ZAINAL MATULU",
            "ISMET HELINGO",
            "IRFAN LAHMUTU",
            "IMRAN TAHIR",
            "ZULKIFLI PAHRUN",
            "RUSDIANTO KASIM",
            "H. ARIYANTO LAHMUTU",
            "RUSTAM HELINGO"
        ]
    },
    {
        bidang: "RI'AYAH/PEMELIHARAAN",
        ketua: "ZOEHRI TOBAMBA",
        anggota: [
            "H. HERMAN GOBEL",
            "MUHAMMAD TAUFIQ",
            "RUSTAM KASIM",
            "HERMAN ABDULLAH",
            "FAJAR BAKARI",
            "SYAMSUDIN HAMUL"
        ]
    },
    {
        bidang: "HUMAS, DATA DAN INFORMASI",
        ketua: "HERMAN PODUNGGE",
        anggota: [
            "H. RONI PODUNGGE",
            "SAFRUDIN HARUN, S.Pd.I",
            "JABIR LUAWO",
            "HELMI SADIQ",
            "MELKY GANI",
            "ELEN PODUNGGE"
        ]
    },
]

let bidangBidang2 = [
    {
        bidang: "PEMBERDAYAAN PEREMPUAN DAN ANAK",
        ketua: "Ha. RAMZAH HELINGO",
        anggota: [
            "Ha. FARIDA HELINGO",
            "LINDA MIOLO",
            "FADLUN ABDUL",
            "SOFIA PODUNGGE",
            "LIAN POU",
            "FARADILA MASUDI",
            "RISNA MILE"
        ]
    },
    {
        bidang: "KEPEMUDAAN DAN REMAJA MASJID",
        ketua: "H. SEPTIAN KADIR",
        anggota: [
            "BAGAS SETIAWAN",
            "ALFIAN HELINGO",
            "ABD. RAHMAN PODUNGGE",
            "IDRIS PODUNGGE",
            "REZA ALFAREYZA JAHJA",
            "NURCHOLIS GANI",
            "AHMAD SAYADI HARTANTO",
            "APIN TALANI",
            "UCUK TOBAMBA",
            "RANTOS LAGONA",
            "RAMLI RUMAMPUK",
            "ALUN",
            "WARDJO BOBIHOE",
            "JEMY HUSAIN",
            "UBAYDILAH HARUN",
            "FAHRI PODUNGGE",
            "drg. WIRDAYASA OKTAVIANI",
            "PRISILIA BAKARI",
            "NADIA BASALAMA",
            "HUMAIROH HARUN"
        ]
    },
    {
        bidang: "KONSUMSI",
        ketua: "IMAN B. ANTU",
        anggota: [
            "FARID MANOPO",
            "HERI ANTU",
            "NETI KIDO",
            "MERI TIILOLA"
        ]
    },
]

let noBidang = 1;
let noBidang2 = 5;
bidangBidang.forEach((b) => {
    isiBidang += `<tr>
                    <th colspan="4" class="font-weight-bold pb-0 pt-3">${noBidang++}.&nbsp&nbspBIDANG ${b.bidang}</th>
                </tr>
                <tr>
                    <th class="font-weight-bold pl-4 py-0" width="50px">Ketua</th>
                    <th class="font-weight-bold text-center py-0" width="20px">:</th>
                    <td class="py-0">${b.ketua}</td>
                </tr>
                <tr>
                    <th class="font-weight-bold pl-4 py-0">Anggota</th>
                    <th class="font-weight-bold text-center py-0">:</th>
                    <td class="py-0">`;
    b.anggota.forEach((nm) => {
        isiBidang += `${nm}<br>`;
    });
    isiBidang += `</td></tr>`;
});
bidangBidang2.forEach((b2) => {
    isiBidang2 += `<tr>
                    <th colspan="4" class="font-weight-bold pb-0 pt-3">${noBidang2++}.&nbsp&nbspBIDANG ${b2.bidang}</th>
                </tr>
                <tr>
                    <th class="font-weight-bold pl-4 py-0" width="50px">Ketua</th>
                    <th class="font-weight-bold text-center py-0" width="20px">:</th>
                    <td class="py-0">${b2.ketua}</td>
                </tr>
                <tr>
                    <th class="font-weight-bold pl-4 py-0">Anggota</th>
                    <th class="font-weight-bold text-center py-0">:</th>
                    <td class="py-0">`;
    b2.anggota.forEach((nm2) => {
        isiBidang2 += `${nm2}<br>`;
    });
    isiBidang2 += `</td></tr>`;
});
tbodyBidang.innerHTML = isiBidang;
tbodyBidang2.innerHTML = isiBidang2;