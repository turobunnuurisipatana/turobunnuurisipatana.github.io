// Format Tanggal Indonesia
function formatTanggal(date){
    let waktu = new Date(date);
    let hr = waktu.getDay()
    const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    let hari = namaHari[hr];
    let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
    let bln = waktu.getMonth();
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    let bulan = namaBulan[bln];
    let thn = waktu.getFullYear();

    return `${hari}, ${tgl} ${bulan} ${thn}`;
}

// UCWORD
function ucword(text){
    return text[0].toUpperCase() + text.substring(1);
}

// Format Angka
function angka(number){
    return number.toLocaleString("id-ID");
}