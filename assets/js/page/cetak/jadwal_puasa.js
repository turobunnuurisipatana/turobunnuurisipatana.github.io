var kopSurat = document.querySelector('#kopSurat');
kopSurat.innerHTML = `<td class="text-center align-middle" width="10%"><img src="../assets/img/${logoWeb2}" alt="Logo" width="75px"></td>
                    <td class="align-middle">
                        <h5 class="text-center font-weight-bold m-0">${kopSurat1}</h5>
                        <h3 class="text-center font-weight-bold m-0">"${kopSurat2}"</h3>
                        <small class="d-block text-center small m-0">${dataAlamat}</small>
                        <small class="d-block text-center small m-0"><i class="bi bi-whatsapp m-0"></i> +${dataTelepon}&nbsp&nbsp&nbsp<i class="bi bi-envelope-at m-0"></i> ${dataEmail}</small>
                    </td>
                    <td class="text-center align-middle" width="10%"></td>`;

var periodeBukaPuasa = document.querySelector('#periodeBukaPuasa');
periodeBukaPuasa.innerHTML = `BULAN SUCI RAMADHAN ${tahunHijriah} H / ${tahun} M`;

// Jadwal Buka Puasa
async function renderBukaPuasa(th){
    let responseBukaPuasa = await fetch(`../data/bukapuasa/${th}.json`);
    let dataBukaPuasa = await responseBukaPuasa.json();
    var tbodyBukaPuasa = document.querySelector('#tbodyBukaPuasa');
    let trBukaPuasa = "";   
    dataBukaPuasa.forEach((bp) => {
        trBukaPuasa += `<tr>
                                <td class="border-dark text-center py-2">${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah}</td>
                                <td class="border-dark text-center  py-2">${formatTanggal(bp.masehi)}</td>
                                <td class="border-dark px-2  py-2">${bp.nama}</td>
                            </tr>`;
    })
    tbodyBukaPuasa.innerHTML = trBukaPuasa;
}

renderBukaPuasa(tahun);