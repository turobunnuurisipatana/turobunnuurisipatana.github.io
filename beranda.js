// Jadwal Imsak
async function jadwalImsak(){
    let responseJadwalImsak = await fetch(`data/jadwalimsak.json`);
    let dataJadwalImsak = await responseJadwalImsak.json();
    var listJadwalSholat = document.querySelector('#listJadwalSholat');
    let liJadwalSholat = "";
    dataJadwalImsak.forEach((ji) => {
        if(formatTanggal(ji.tanggal) == formatTanggal(new Date())){
            liJadwalSholat += `<li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Imsyak</span>
                                <span>${ji.imsyak}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Subuh</span>
                                <span>${ji.subuh}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Terbit Fajar</span>
                                <span>${ji.terbit}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Dhuha</span>
                                <span>${ji.dhuha}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Dzuhur</span>
                                <span>${ji.dzuhur}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Ashr</span>
                                <span>${ji.ashr}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Maghrib</span>
                                <span>${ji.maghrib}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">Isya</span>
                                <span>${ji.isya}</span>
                            </li>`;
        }
    })
    listJadwalSholat.innerHTML = liJadwalSholat;
}

jadwalImsak()

// List Jadwal Sholat
function renderJadwalSholat(){
    var listJadwalSholat = document.querySelector('#listJadwalSholat');
    let liJadwalSholat = "";
    jadwalSholat.forEach((js) => {
        liJadwalSholat += `<li class="list-group-item d-flex justify-content-between py-0">
                                <span class="fw-bold text-success">${js.waktu}</span>
                                <span>${js.jam}</span>
                            </li>`;
    });
    listJadwalSholat.innerHTML = liJadwalSholat;
}

// Arus Kas
async function renderArusKas(){
    var berandaKas = document.querySelector('#berandaKas');
    let waktu = new Date();
    let bln = waktu.getMonth();
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    let bulan = namaBulan[bln-1];
    let tahun = waktu.getFullYear();

    let response = await fetch(`data/kas/${tahun}/${bulan.toLowerCase()}.json`);
    let data = await response.json();
    let tMasuk = 0;
    let tKeluar = 0;
    let tSaldo = 0;
    data.forEach((dt) => {
        tMasuk += dt.masuk;
        tKeluar += dt.keluar;
    });
    tSaldo = tMasuk - tKeluar;
    berandaKas.innerHTML = `<li class="list-group-item py-3 d-flex justify-content-between">
                                <span class="fw-bold text-success">Pemasukkan</span>
                                <span>Rp ${angka(tMasuk)},-</span>
                            </li>
                            <li class="list-group-item py-3 d-flex justify-content-between">
                                <span class="fw-bold text-success">Pengeluaran</span>
                                <span>Rp ${angka(tKeluar)},-</span>
                            </li>
                            <li class="list-group-item py-3 d-flex justify-content-between bg-success-subtle">
                                <span class="fw-bold text-success">Saldo</span>
                                <span class="fw-bold text-success">Rp ${angka(tSaldo)},-</span>
                            </li>`;
}

// Render
renderArusKas();
// renderJadwalSholat();