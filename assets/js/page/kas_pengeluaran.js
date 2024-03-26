// GET PARAMETER
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const getBulan = urlParams.get('bulan');
const getTahun = urlParams.get('tahun');
// console.log(ucword(getBulan), getTahun);

var leadJudulRincian = document.querySelector("#leadJudulRincian");
var leadPeriodeRincian = document.querySelector("#leadPeriodeRincian");
var divTombolRincian = document.querySelector("#divTombolRincian");
var pengeluaranRincian = document.querySelector("#pengeluaranRincian");
let isiArusKas = "";

async function tampilData(tahun, bulan){
    let response = await fetch(`data/kas/${tahun}/lainnya/${bulan}.json`);
    let data = await response.json();
    leadJudulRincian.innerHTML = data.judul;
    leadPeriodeRincian.innerHTML = `PERIODE ${bulan.toUpperCase()} ${tahun}`;
    divTombolRincian.innerHTML = `<a href="cetak/kas_rincian.html?tahun=${tahun}&bulan=${bulan}" class="btn btn-sm btn-light text-success" target="_blank"><i class="bi bi-printer"></i> Cetak</a>
                                <a href="kas.html" class="btn btn-sm btn-light text-success"><i class="bi bi-x-lg"></i> Kembali</a>`;
    isiArusKas = "";
    isiArusKas = `<table class="table table-sm table-bordered border-success table-hover rounded m-0">
                    <thead>
                        <tr>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" rowspan="2" width="4%">NO</th>
                            <th class="bg-success text-white text-center font-weight-bold align-middle px-2" rowspan="2" width="20%">TANGGAL</th>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" rowspan="2">URAIAN</th>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" colspan="3">JUMLAH (Rp)</th>
                        </tr>
                        <tr>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" width="11%">MASUK</th>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" width="11%">KELUAR</th>
                            <th class="bg-success text-white text-center font-weight-bold align-middle" width="11%">SALDO</th>
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
                                <td class="align-middle text-right px-2">${dt.masuk == 0 ? "-" : angka(dt.masuk)}</td>
                                <td class="align-middle text-right px-2">${dt.keluar == 0 ? "-" : angka(dt.keluar)}</td>
                                <td class="align-middle text-right px-2">${saldo == 0 ? "-" : angka(saldo)}</td>
                            </tr>`;
        });
    }
    tSaldo = tMasuk - tKeluar;
    isiArusKas += `</tbody>
                    <tfoot>
                        <tr>
                            <th class="align-middle text-right bg-success font-weight-bold text-white px-2" colspan="3">TOTAL (Rp)</th>
                            <th class="align-middle text-right bg-success font-weight-bold text-white px-2">${tMasuk == 0 ? "-" : (angka(tMasuk))}</th>
                            <th class="align-middle text-right bg-success font-weight-bold text-white px-2">${tKeluar == 0 ? "-" : (angka(tKeluar))}</th>
                            <th class="align-middle text-right bg-success font-weight-bold text-white px-2">${tSaldo == 0 ? "-" : (angka(tSaldo))}</th>
                        </tr>
                    </tfoot>
                </table>`;
    pengeluaranRincian.innerHTML = isiArusKas;
    // tombolPilih.classList.add("d-none");
};

tampilData(getTahun, getBulan);