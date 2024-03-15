// Jadwal Sholat
let periodeJadwalSholat = document.querySelector("#periodeJadwalSholat");
periodeJadwalSholat.innerHTML = `Bulan ${bulan} ${tahun}`;

async function renderJadwalSholat(th, bl){
    let resJadwalSholat = await fetch(`data/jadwalsholat/${th}/${bl.toLowerCase()}.json`);
    let dataJadwalSholat = await resJadwalSholat.json();
    let divJadwalSholat = document.querySelector("#divJadwalSholat");
    let isiJadwalSholat = "";
    dataJadwalSholat.forEach((js) => {
        if(formatTanggal(js.tanggal) == formatTanggal(new Date())){
            isiJadwalSholat += `<div class="card border border-success flex-fill shadow overflow-hidden">
                                    <div class="card-header shadow-sm bg-success bg-gradient text-light fw-bold text-uppercase h6">${formatTanggal(js.tanggal)}</div>
                                    <div class="card-body d-flex flex-column justify-content-center p-0">
                                        <ul class="list-group list-group-flush small">
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Imsyak</span>
                                                <span><i class="bi bi-clock"></i> ${js.imsyak}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Subuh</span>
                                                <span><i class="bi bi-clock"></i> ${js.subuh}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Terbit Fajar</span>
                                                <span><i class="bi bi-clock"></i> ${js.terbit}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Dhuha</span>
                                                <span><i class="bi bi-clock"></i> ${js.dhuha}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Dzuhur</span>
                                                <span><i class="bi bi-clock"></i> ${js.dzuhur}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Ashr</span>
                                                <span><i class="bi bi-clock"></i> ${js.ashr}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Maghrib</span>
                                                <span><i class="bi bi-clock"></i> ${js.maghrib}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between py-1">
                                                <span class="text-success fw-bold">Isya</span>
                                                <span><i class="bi bi-clock"></i> ${js.isya}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>`;
        }
        isiJadwalSholat += `<div class="card  flex-fill shadow-sm overflow-hidden">
                                <div class="card-header shadow-sm bg-success-subtle bg-gradient text-success fw-bold text-uppercase h6">${formatTanggal(js.tanggal)}</div>
                                <div class="card-body d-flex flex-column justify-content-center p-0">
                                    <ul class="list-group list-group-flush small">
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Imsyak</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.imsyak}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Subuh</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.subuh}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Terbit Fajar</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.terbit}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Dhuha</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.dhuha}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Dzuhur</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.dzuhur}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Ashr</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.ashr}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Maghrib</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.maghrib}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between py-1">
                                            <span class="text-success">Isya</span>
                                            <span class="text-muted"><i class="bi bi-clock"></i> ${js.isya}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
    });
    divJadwalSholat.innerHTML = isiJadwalSholat;
}

renderJadwalSholat(tahun, bulan);