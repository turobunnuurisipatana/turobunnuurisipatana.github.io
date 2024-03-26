// Jadwal Sholat
let periodeJadwalSholat = document.querySelector("#periodeJadwalSholat");
periodeJadwalSholat.innerHTML = `BULAN ${bulan.toUpperCase()} ${tahun}`;

async function renderJadwalSholat(th, bl){
    let resJadwalSholat = await fetch(`data/jadwalsholat/${th}/${bl.toLowerCase()}.json`);
    let dataJadwalSholat = await resJadwalSholat.json();
    let divJadwalSholat = document.querySelector("#divJadwalSholat");
    let isiJadwalSholat = "";
    dataJadwalSholat.forEach((js) => {
        if(formatTanggal(js.tanggal) == formatTanggal(new Date())){
            isiJadwalSholat += `<div class="card overflow-hidden border-success shadow-sm w-25 m-2">
                        <div class="card-header card-header-bordered text-center bg-success text-white font-weight-bold p-2">${formatTanggal(js.tanggal)}</div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Imsyak</span>
                                    <span class="font-weight-bold">${js.imsyak}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Subuh</span>
                                    <span class="font-weight-bold">${js.subuh}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Terbit Fajar</span>
                                    <span class="font-weight-bold">${js.terbit}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Dzuhur</span>
                                    <span class="font-weight-bold">${js.dzuhur}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Ashr</span>
                                    <span class="font-weight-bold">${js.ashr}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Maghrib</span>
                                    <span class="font-weight-bold">${js.maghrib}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-success font-weight-bold">Isya</span>
                                    <span class="font-weight-bold">${js.isya}</span>
                                </li>
                            </ul>
                        </div>
                    </div>`;
        }
        isiJadwalSholat += `<div class="card border-success overflow-hidden w-25 m-2">
                        <div class="card-header card-header-bordered text-center bg-light border-success text-success font-weight-bold p-2">${formatTanggal(js.tanggal)}</div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Imsyak</span>
                                    <span class="text-muted">${js.imsyak}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Subuh</span>
                                    <span class="text-muted">${js.subuh}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Terbit Fajar</span>
                                    <span class="text-muted">${js.terbit}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Dzuhur</span>
                                    <span class="text-muted">${js.dzuhur}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Ashr</span>
                                    <span class="text-muted">${js.ashr}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Maghrib</span>
                                    <span class="text-muted">${js.maghrib}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center py-1">
                                    <span class="text-muted">Isya</span>
                                    <span class="text-muted">${js.isya}</span>
                                </li>
                            </ul>
                        </div>
                    </div>`;
    });
    divJadwalSholat.innerHTML = isiJadwalSholat;
}

renderJadwalSholat(tahun, bulan);