// GET PARAMETER
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const getBulan = urlParams.get('bulan');
const getTahun = urlParams.get('tahun');
// console.log(ucword(getBulan), getTahun);

var pengeluaranRincian = document.querySelector("#pengeluaranRincian");
let isiArusKas = "";

async function tampilData(tahun, bulan){
    let response = await fetch(`data/kas/${tahun}/lainnya/${bulan}.json`);
    let data = await response.json();
    console.log(data.data);
    isiArusKas = "";
    isiArusKas = `<div class="card border-success overflow-hidden shadow mb-5">
            <div class="card-header bg-success bg-gradient text-light d-flex justify-content-between align-items-center shadow">
                <h5 class="h5 m-0 fw-bold">${ucword(bulan)} ${tahun} - ${data.judul}</h5>
                <div>
                    <a href="cetak_pengeluaran.html?tahun=${tahun}&bulan=${bulan}" target="_blank" class="btn btn-sm btn-success bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cetak" id="tombolCetak"><i class="bi bi-printer"></i></a>
                    <a href="kas.html" class="btn btn-sm btn-secondary bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Kembali"><i class="bi bi-x-lg"></i></a>
                </div>
            </div>
            <div class="card-body table-responsive p-0 overflow-hidden">
                <table class="table table-sm table-bordered border-success table-hover m-0 rounded">
                    <thead>
                        <tr>
                            <th class="bg-success-subtle text-success text-center align-middle" rowspan="2" width="4%">NO</th>
                            <th class="bg-success-subtle text-success text-center align-middle px-2" rowspan="2" width="20%">TANGGAL</th>
                            <th class="bg-success-subtle text-success text-center align-middle" rowspan="2">URAIAN</th>
                            <th class="bg-success-subtle text-success text-center align-middle" colspan="3">JUMLAH (Rp)</th>
                        </tr>
                        <tr>
                            <th class="bg-success-subtle text-success text-center align-middle" width="10%">MASUK</th>
                            <th class="bg-success-subtle text-success text-center align-middle" width="10%">KELUAR</th>
                            <th class="bg-success-subtle text-success text-center align-middle" width="10%">SALDO</th>
                        </tr>
                    </thead>
                    <tbody>`;
    let no = 1;
    let tMasuk = 0;
    let tKeluar = 0;
    let saldo = 0;
    let tSaldo = 0;
    if(data.data.length == 0) {
        isiArusKas += `<tr>
                            <td class="align-middle text-center p-5 text-danger" colspan="6">Arus kas bulan ${ucword(bulan)} tahun ${tahun} belum diinput!</td>
                        </tr>`;
    }else{
        data.data.forEach((dt) => {
            tMasuk += dt.masuk;
            tKeluar += dt.keluar;
            saldo += dt.masuk - dt.keluar;
            isiArusKas += `<tr>
                                <td class="align-middle text-center">${no++}</td>
                                <td class="align-middle text-center">${formatTanggal(dt.tanggal)}</td>
                                <td class="align-middle px-2">${dt.daftar == "ya" ? "- " + dt.uraian : dt.uraian}</td>
                                <td class="align-middle text-end px-2">${dt.masuk == 0 ? "-" : angka(dt.masuk)}</td>
                                <td class="align-middle text-end px-2">${dt.keluar == 0 ? "-" : angka(dt.keluar)}</td>
                                <td class="align-middle text-end px-2">${saldo == 0 ? "-" : angka(saldo)}</td>
                            </tr>`;
        });
    }
    tSaldo = tMasuk - tKeluar;
    isiArusKas += `</tbody>
                    <tfoot>
                        <tr>
                            <th class="align-middle text-center bg-success-subtle text-success" colspan="3">TOTAL (Rp)</th>
                            <th class="align-middle text-end bg-success-subtle text-success px-2">${tMasuk == 0 ? "-" : (angka(tMasuk))}</th>
                            <th class="align-middle text-end bg-success-subtle text-success px-2">${tKeluar == 0 ? "-" : (angka(tKeluar))}</th>
                            <th class="align-middle text-end bg-success-subtle text-success px-2">${tSaldo == 0 ? "-" : (angka(tSaldo))}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>`;
    pengeluaranRincian.innerHTML = isiArusKas;
    // tombolPilih.classList.add("d-none");
};

tampilData(getTahun, getBulan);