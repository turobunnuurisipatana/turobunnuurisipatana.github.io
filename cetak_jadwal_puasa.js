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