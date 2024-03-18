var kopSurat = document.querySelector('#kopSurat');
kopSurat.innerHTML = `<td class="text-center align-middle" width="10%"><img src="assets/images/logo turobunnur sipatana.jpg" alt="Logo" width="75px"></td>
                    <td class="align-middle">
                        <h5 class="text-center fw-bold m-0">${kopSurat1}</h5>
                        <h3 class="text-center fw-bold m-0">"${kopSurat2}"</h3>
                        <small class="d-block text-center small m-0">${dataAlamat}</small>
                    </td>`;

var periodeBukaPuasa = document.querySelector('#periodeBukaPuasa');
periodeBukaPuasa.innerHTML = `${tahunHijriah} H / ${tahun} M`;

// Jadwal Buka Puasa
async function renderBukaPuasa(th){
    let responseBukaPuasa = await fetch(`data/bukapuasa/${th}.json`);
    let dataBukaPuasa = await responseBukaPuasa.json();
    var tbodyBukaPuasa = document.querySelector('#tbodyBukaPuasa');
    let trBukaPuasa = "";   
    dataBukaPuasa.forEach((bp) => {
        trBukaPuasa += `<tr>
                                <td class="text-center">${bp.hijriah < 10 ? '0' + bp.hijriah : bp.hijriah}</td>
                                <td class="text-center">${formatTanggal(bp.masehi)}</td>
                                <td class="px-2">${bp.nama}</td>
                            </tr>`;
    })
    tbodyBukaPuasa.innerHTML = trBukaPuasa;
}

renderBukaPuasa(tahun);