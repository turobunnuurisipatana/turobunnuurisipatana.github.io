// Data Organisasi
// Dewan Syuro dan Pembina
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

let cardSyuroPembina = document.querySelectorAll(".syuroPembina");
for (let s = 0; s < cardSyuroPembina.length; s++) {
    let isiSyuroPembina = "";
    isiSyuroPembina += `<div class="card-header shadow-sm bg-success bg-gradient text-light fw-bold text-uppercase h5">${syuroPembina[s].jabatan}</div><div class="card-body d-flex flex-column justify-content-center">`;
    syuroPembina[s].nama.forEach((p) => {
        isiSyuroPembina += `<p class="card-text m-2">${p}</p>`;
    })
    isiSyuroPembina += `</div>`;
    cardSyuroPembina[s].innerHTML = isiSyuroPembina;
}

// Pengurus Harian
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

let cardPengurusHarian = document.querySelector("#pengurusHarian");
let isiPengurusHarian = "";
pengurusHarian.forEach((ph) => {
    isiPengurusHarian += `<div class="m-2">
                            <p class="fw-bold text-success m-0">${ph.jabatan}</p>
                            <p class="card-text m-0">${ph.nama}</p>
                        </div>`
});
cardPengurusHarian.innerHTML = isiPengurusHarian;

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

let cardBidangBidang = document.querySelector("#bidangBidang");
let isiBidangBidang = "";
bidangBidang.forEach((b) => {
    isiBidangBidang += `<div class="card border border-success flex-fill shadow-sm">
                            <div class="card-header shadow-sm bg-success bg-gradient text-light fw-bold text-uppercase h5">Bidang<br>${b.bidang}</div>
                            <div class="card-body d-flex flex-column">
                                <div class="m-2">
                                    <p class="fw-bold text-success m-0">Ketua</p>
                                    <p class="card-text m-0">${b.ketua}</p>
                                </div>
                                <div class="m-2"><p class="fw-bold text-success m-0">Anggota</p>`;
    b.anggota.forEach((nm) => {
        isiBidangBidang += `<p class="card-text m-0">${nm}</p>`;
    })
    isiBidangBidang+= `</div>
                        </div>
                    </div>`;
});
cardBidangBidang.innerHTML = isiBidangBidang;