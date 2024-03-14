// GET PARAMETER
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const getBulan = urlParams.get('bulan');
const getTahun = urlParams.get('tahun');
// console.log(ucword(getBulan), getTahun);



// DATA KAS 
async function jsonKas(tahun, bulan) {
  let response = await fetch(`data/kas/${tahun}/lainnya/${bulan}.json`);
  let kas = await response.json();
  var judulRincian = document.querySelector("#judulRincian");
  var judulPeriode = document.querySelector("#judulPeriode");
  judulRincian.innerHTML = `<strong>${kas.judul}</strong>`;
  judulPeriode.innerHTML = `Periode ${ucword(bulan)} ${tahun}`;
  var tbodyKas = document.querySelector("#tbodyKas");
  var tfootKas = document.querySelector("#tfootKas");
  let trKas = "";
  let no = 1;
  let tMasuk = 0;
  let tKeluar = 0;
  let saldo = 0;
  let tSaldo = 0;
  kas.data.forEach((ks) => {
    //   console.log(ks.tanggal, ks.uraian, ks.masuk, ks.keluar);
      tMasuk += ks.masuk;
      tKeluar += ks.keluar;
      saldo += ks.masuk - ks.keluar;
      tanggal = new Date(ks.tanggal);
      trKas += `<tr>
                    <td class="align-middle text-center">${no++}</td>
                    <td class="align-middle text-center">${formatTanggal(tanggal)}</td>
                    <td class="align-middle px-2">${ks.daftar == "ya" ? "- " + ks.uraian : ks.uraian}</td>
                    <td class="align-middle text-end px-2">${ks.masuk == 0 ? '-' : angka(ks.masuk)}</td>
                    <td class="align-middle text-end px-2">${ks.keluar == 0 ? '-' : angka(ks.keluar)}</td>
                    <td class="align-middle text-end px-2">${saldo == 0 ? '-' : angka(saldo)}</td>
                </tr>`;
  });
  tSaldo = tMasuk - tKeluar;
  tbodyKas.innerHTML = trKas;
  tfootKas.innerHTML = `<tr>
                            <th class="bg-secondary-subtle align-middle text-center" colspan="3">TOTAL (Rp)</th>
                            <th class="bg-secondary-subtle px-2 align-middle text-end">${tMasuk == 0 ? '-' : angka(tMasuk)}</th>
                            <th class="bg-secondary-subtle px-2 align-middle text-end">${tKeluar == 0 ? '-' : angka(tKeluar)}</th>
                            <th class="bg-secondary-subtle px-2 align-middle text-end">${tSaldo == 0 ? '-' : angka(tSaldo)}</th>
                        </tr>`;
}

jsonKas(getTahun,getBulan);