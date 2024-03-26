// PILIH
var selectBulan = document.querySelector("#selectBulan");
var selectTahun = document.querySelector("#selectTahun");
var tombolPilih = document.querySelector("#tombolPilih");
var divArusKas = document.querySelector("#arusKas");
let isiArusKas = "";

selectBulan.value = bulan.toLowerCase();
selectTahun.value = tahun;
// TOMBOL PILIH

async function tampilData(){
    let pilihBulan = selectBulan.value;
    let pilihTahun = selectTahun.value;
    if(pilihBulan == "" || pilihTahun == ""){
        isiArusKas = "";
        isiArusKas = `<div class="alert alert-danger shadow text-center" role="alert">Pilih Bulan dan Tahun!</div>`;
    }else{
        let response = await fetch(`data/kas/${pilihTahun}/${pilihBulan}.json`);
        let data = await response.json();
        var http = new XMLHttpRequest();
        http.open('HEAD', `data/kas/${pilihTahun}/lainnya/${pilihBulan}.json`, false);
        http.send();
        console.log(http.status);
        console.log(data);
        let dataRincian = "";
        if(http.status !== 404){
            dataRincian = `<a href="kas_pengeluaran.html?tahun=${pilihTahun}&bulan=${pilihBulan}" class="btn btn-sm btn-light text-success" data-toggle="tooltip" data-placement="bottom" data-title="Rincian Pengeluaran"><i class="bi bi-list"></i></a>`;
        }
        isiArusKas = "";
        isiArusKas = `<div class="card border-success overflow-hidden shadow">
                <div class="card-header bg-success text-light d-flex justify-content-between align-items-center shadow py-2">
                    <h5 class="h5 m-0 fw-bold">${ucword(pilihBulan)} ${pilihTahun}</h5>
                    <div>
                        ${dataRincian}
                        <a href="cetak/kas.html?tahun=${pilihTahun}&bulan=${pilihBulan}" target="_blank" class="btn btn-sm btn-light text-success" data-toggle="tooltip" data-placement="bottom" data-title="Cetak" id="tombolCetak"><i class="bi bi-printer"></i></a>
                    </div>
                </div>
                <div class="card-body table-responsive p-0 overflow-hidden">
                    <table class="table table-sm table-bordered border-success table-hover m-0 rounded">
                        <thead>
                            <tr>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" rowspan="2" width="4%">NO</th>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle px-2" rowspan="2" width="20%">TANGGAL</th>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" rowspan="2">URAIAN</th>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" colspan="3">JUMLAH (Rp)</th>
                            </tr>
                            <tr>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" width="11%">MASUK</th>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" width="11%">KELUAR</th>
                                <th class="bg-success text-white font-weight-bold text-success text-center align-middle" width="11%">SALDO</th>
                            </tr>
                        </thead>
                        <tbody>`;
        let no = 1;
        let tMasuk = 0;
        let tKeluar = 0;
        let saldo = 0;
        let tSaldo = 0;
        if(data.length == 0) {
            isiArusKas += `<tr>
                                <td class="align-middle text-center p-5 text-danger" colspan="6">Arus kas bulan ${ucword(pilihBulan)} tahun ${pilihTahun} belum diinput!</td>
                            </tr>`;
        }else{
            data.forEach((dt) => {
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
                                <th class="align-middle text-right bg-success text-white font-weight-bold text-success px-2" colspan="3">TOTAL (Rp)</th>
                                <th class="align-middle text-right bg-success text-white font-weight-bold text-success px-2">${tMasuk == 0 ? "-" : (angka(tMasuk))}</th>
                                <th class="align-middle text-right bg-success text-white font-weight-bold text-success px-2">${tKeluar == 0 ? "-" : (angka(tKeluar))}</th>
                                <th class="align-middle text-right bg-success text-white font-weight-bold text-success px-2">${tSaldo == 0 ? "-" : (angka(tSaldo))}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>`;
    }
    divArusKas.innerHTML = isiArusKas;
    // tombolPilih.classList.add("d-none");
};