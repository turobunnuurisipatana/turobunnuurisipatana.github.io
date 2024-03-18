// Jadwal Sholat
async function renderJadwalSholat(th, bl){
    let responseJadwalSholat = await fetch(`data/jadwalsholat/${th}/${bl.toLowerCase()}.json`);
    let dataJadwalSholat = await responseJadwalSholat.json();
    var listJadwalSholat = document.querySelector('#listJadwalSholat');
    let liJadwalSholat = "";
    dataJadwalSholat.forEach((ji) => {
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

// Arus Kas
async function renderArusKas(t,b){
    var berandaKas = document.querySelector('#berandaKas');
    let response = await fetch(`data/kas/${t}/${b.toLowerCase()}.json`);
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

// Jadwal Buka Puasa
async function renderBukaPuasa(th){
    let responseBukaPuasa = await fetch(`data/bukapuasa/${th}.json`);
    let dataBukaPuasa = await responseBukaPuasa.json();
    var listBukaPuasa = document.querySelector('#listBukaPuasa');
    var modalContentBukaPuasa = document.querySelector('#modalContentBukaPuasa');
    let liBukaPuasa = "";
    let contentBukaPuasa = "";
    let warnaTr = "";
    contentBukaPuasa = `<div class="modal-header d-flex justify-content-between align-items-center bg-success bg-gradient text-light py-2 px-3">
                            <h1 class="modal-title fs-5" id="modalBukaPuasaLabel">Jadwal Buka Puasa Ramadhan ${th} H</h1>
                            <div>
                                <a href="cetak_jadwal_puasa.html?tahun=${th}" target="_blank" class="btn btn-sm btn-warning bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cetak"><i class="bi bi-printer"></i></a>
                                <a href="#" class="btn btn-sm btn-danger bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cetak" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></a>
                            </div>
                        </div>
                        <div class="modal-body table-responsive p-0">
                            <table class="table table-bordered border border-success m-0">
                                <thead>
                                    <tr>
                                        <th class="text-center bg-success-subtle">HARI KE</th>
                                        <th class="text-center bg-success-subtle">TANGGAL</th>
                                        <th class="text-center bg-success-subtle">NAMA PELAKSANA</th>
                                    </tr>
                                </thead>
                                <tbody>`;   
    dataBukaPuasa.forEach((bp) => {
        if(formatTanggal(bp.masehi) == formatTanggal(new Date())){
            liBukaPuasa += `<div class="d-flex justify-content-between align-items-center m-0 p-0">
                                <div class="m-0 p-0">
                                    <a href="#modalBukaPuasa" data-bs-toggle="modal" class="text-muted small m-0 text-decoration-none">Jadwal Buka Puasa : </a>
                                    <span class="m-0 badge rounded-pill text-bg-success">${formatTanggal(bp.masehi)}</span>
                                    <span class="m-0 badge rounded-pill text-bg-success">${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah} Ramadhan ${tahunHijriah}H</span>
                                </div>
                                <span class="text-success fw-bold m-0">${bp.nama}</span>
                            </div>`;
            warnaTr = "text-success fw-bold h5";
        }else{
            warnaTr = "";
        }
        contentBukaPuasa += `<tr>
                                <td class="text-center ${warnaTr}">${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah}</td>
                                <td class="text-center ${warnaTr}">${formatTanggal(bp.masehi)}</td>
                                <td class="${warnaTr}">${bp.nama}</td>
                            </tr>`;
    })
    contentBukaPuasa += `</tbody>
                        </table>
                    </div>`;
    listBukaPuasa.innerHTML = liBukaPuasa;
    modalContentBukaPuasa.innerHTML = contentBukaPuasa;
}

// Render
renderJadwalSholat(tahun, bulan);
renderArusKas(tahun, bulan);
renderBukaPuasa(tahun);