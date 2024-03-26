// Jadwal Sholat
async function renderJadwalSholat(th, bl){
    let responseJadwalSholat = await fetch(`data/jadwalsholat/${th}/${bl.toLowerCase()}.json`);
    let dataJadwalSholat = await responseJadwalSholat.json();
    var listJadwalSholat = document.querySelector('#listJadwalSholat');
    let liJadwalSholat = "";
    dataJadwalSholat.forEach((ji) => {
        if(formatTanggal(ji.tanggal) == formatTanggal(new Date())){
            liJadwalSholat += `<li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Imsyak</span>
                                <span>${ji.imsyak}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Subuh</span>
                                <span>${ji.subuh}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Terbit Fajar</span>
                                <span>${ji.terbit}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Dhuha</span>
                                <span>${ji.dhuha}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Dzuhur</span>
                                <span>${ji.dzuhur}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Ashr</span>
                                <span>${ji.ashr}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Maghrib</span>
                                <span>${ji.maghrib}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between py-1">
                                <span class="font-weight-bold text-success">Isya</span>
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
                                <span class="font-weight-bold text-success">Pemasukkan</span>
                                <span>Rp ${angka(tMasuk)},-</span>
                            </li>
                            <li class="list-group-item py-3 d-flex justify-content-between">
                                <span class="font-weight-bold text-success">Pengeluaran</span>
                                <span>Rp ${angka(tKeluar)},-</span>
                            </li>
                            <li class="list-group-item py-2 d-flex justify-content-between align-items-center bg-success text-white">
                                <h4 class="font-weight-bold m-0">Saldo</h4>
                                <h4 class="font-weight-bold m-0">Rp ${angka(tSaldo)},-</h4>
                            </li>`;
}

// Jadwal Buka Puasa
async function renderBukaPuasa(th){
    let responseBukaPuasa = await fetch(`data/bukapuasa/${th}.json`);
    let dataBukaPuasa = await responseBukaPuasa.json();
    var jadwalBukaPuasa = document.querySelector('#jadwalBukaPuasa');
    var modalContentBukaPuasa = document.querySelector('#modalContentBukaPuasa');
    let isiBukaPuasa = "";
    let contentBukaPuasa = "";
    let warnaTr = "";
    contentBukaPuasa = `<div class="modal-header d-flex justify-content-between align-items-center bg-success text-white py-2 px-3">
                            <h3 class="modal-title" id="modalBukaPuasaLabel">Jadwal Buka Puasa Ramadhan ${tahunHijriah} H</h3>
                            <div>
                                <a href="cetak/jadwal_puasa.html?tahun=${th}" target="_blank" class="btn btn-sm btn-warning text-white" data-toggle="tooltip" data-placement="bottom" data-title="Cetak"><i class="bi bi-printer"></i></a>
                                <a href="#" class="btn btn-sm btn-danger text-white" data-toggle="tooltip" data-placement="bottom" data-title="Cetak" data-dismiss="modal"><i class="bi bi-x-lg"></i></a>
                            </div>
                        </div>
                        <div class="modal-body table-responsive p-0">
                            <table class="table table-bordered border border-success m-0">
                                <thead>
                                    <tr class="table-success">
                                        <th class="text-center font-weight-bold">HARI KE</th>
                                        <th class="text-center font-weight-bold">TANGGAL</th>
                                        <th class="text-center font-weight-bold">NAMA PELAKSANA</th>
                                    </tr>
                                </thead>
                                <tbody>`;   
    dataBukaPuasa.forEach((bp) => {
        if(formatTanggal(bp.masehi) == formatTanggal(new Date())){
            isiBukaPuasa += `<p class="h2" data-aos="fade-right">${bp.nama}</p>
                            <div class="m-0 p-0" data-aos="fade-left">
                                <a href="#modalBukaPuasa" data-toggle="modal" class="text-white font-weight-normal m-0 text-decoration-none">Jadwal Buka Puasa : </a>
                                <span class="font-weight-bold m-0">${formatTanggal(bp.masehi)}</span>
                                <span class="font-weight-bold m-0">(${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah} Ramadhan ${tahunHijriah}H)</span>
                            </div>`;
            warnaTr = "table-success";
        }else{
            warnaTr = "";
        }
        contentBukaPuasa += `<tr class="${warnaTr}">
                                <td class="text-center">${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah}</td>
                                <td class="text-center">${formatTanggal(bp.masehi)}</td>
                                <td>${bp.nama}</td>
                            </tr>`;
    })
    contentBukaPuasa += `</tbody>
                        </table>
                    </div>`;
    jadwalBukaPuasa.innerHTML = isiBukaPuasa;
    modalContentBukaPuasa.innerHTML = contentBukaPuasa;
}

// Render
renderJadwalSholat(tahun, bulan);
renderArusKas(tahun, bulan);
renderBukaPuasa(tahun);