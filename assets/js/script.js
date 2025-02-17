// Waktu
let spanDate = document.querySelectorAll(".tanggalHariIni");
let spanClock = document.querySelectorAll(".jamBerjalan");

setInterval(() => {
  let waktu = new Date();
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();
  let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
  let menit =
    waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
  let detik =
    waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
  spanDate.forEach((dt) => {
    dt.innerHTML = `${hari}, ${tgl} ${bulan} ${thn}`;
  });
  spanClock.forEach((clk) => {
    clk.innerHTML = `${jam}:${menit}:${detik} WITA`;
  });
}, 1);

const openKas = document.querySelector("#openKas");
const divKas = document.querySelector("#divKas");
const closeKas = document.querySelector("#closeKas");

openKas.addEventListener("click", function () {
  divKas.classList.remove("hidden");
});

closeKas.addEventListener("click", function () {
  divKas.classList.add("hidden");
});

// WAKTU HARI INI
let waktu = new Date();
let hr = waktu.getDay();
const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];
let hari = namaHari[hr];
let tanggal = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
let bln = waktu.getMonth();
const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
let bulan = namaBulan[bln];
let tahun = waktu.getFullYear();
let tahunHijriah = tahun - 579;

// Format Tanggal Indonesia
function formatTanggal(date) {
  let waktu = new Date(date);
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();

  return `${hari}, ${tgl} ${bulan} ${thn}`;
}

// UCWORD
function ucword(text) {
  return text[0].toUpperCase() + text.substring(1);
}

// Format Angka
function angka(number) {
  return number.toLocaleString("id-ID");
}

// Jadwal Buka Puasa
const openRamadhan = document.querySelector("#openRamadhan");
const divRamadhan = document.querySelector("#divRamadhan");
const closeRamadhan = document.querySelector("#closeRamadhan");

openRamadhan.addEventListener("click", function () {
  divRamadhan.classList.remove("hidden");
});

closeRamadhan.addEventListener("click", function () {
  divRamadhan.classList.add("hidden");
});

async function renderBukaPuasa(th) {
  let responseBukaPuasa = await fetch(`assets/data/bukapuasa/${th}.json`);
  let dataBukaPuasa = await responseBukaPuasa.json();
  const divBukaPuasa = document.querySelector("#divBukaPuasa");
  let contentBukaPuasa = "";
  let warnaTr = "";
  contentBukaPuasa = `<table class="w-full mb-2 sm:mb-5 text-[0.4rem] sm:text-base">
                        <thead>
                            <tr>
                                <th class="px-2 border border-gray-700 bg-green-700 text-white w-[10%] sm:w-[10%]">RAMADHAN HARI KE</th>
                                <th class="px-2 border border-gray-700 bg-green-700 text-white w-[15%] sm:w-[18%]">TANGGAL</th>
                                <th class="px-2 border border-gray-700 bg-green-700 text-white w-[75%] sm:w[72%]">NAMA PELAKSANA</th>
                            </tr>
                        </thead>
                        <tbody>`;
  dataBukaPuasa.forEach((bp) => {
    if (formatTanggal(bp.masehi) == formatTanggal(new Date())) {
      warnaTr = "bg-green-200 font-bold";
    } else {
      warnaTr = "";
    }
    contentBukaPuasa += `<tr class="${warnaTr}">
                          <td class="${warnaTr} p-1 sm:p-2 border border-gray-700 text-center">${bp.hijriyah < 10 ? "0" + bp.hijriyah : bp.hijriyah}</td>
                          <td class="${warnaTr} p-1 sm:p-2 border border-gray-700 text-center">${formatTanggal(bp.masehi)}</td>
                          <td class="${warnaTr} p-1 sm:p-2 border border-gray-700">${bp.nama}</td>
                        </tr>`;
  });
  contentBukaPuasa += `</tbody>
                        </table>`;
  divBukaPuasa.innerHTML = contentBukaPuasa;
}

// Jadwal Sholat
const urlJadwalSholat =
  `https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/gorontalo/${tahun}/${bln + 1 < 10 ? '0' + (bln + 1) : bln + 1}.json`;
const divJadwalSHolat = document.querySelector("#divJadwalSholat");

async function renderJadwalSHolat(tanggal) {
  const responseJadwalSHolat = await fetch(urlJadwalSholat);
  const dataJadwalSHolat = await responseJadwalSHolat.json();
  let contentJadwalSHolat = "";
  contentJadwalSHolat = `<table class="w-full text-sm">
                            <thead>
                                <tr>
                                    <th class="px-1 w-10/12 text-start bg-green-700 text-white">WAKTU</th>
                                    <th class="px-1 w-2/12 text-center bg-green-700 text-white">JAM</th>
                                </tr>
                            </thead>
                            <tbody>`;
  dataJadwalSHolat.forEach((js) => {
    if(js.tanggal == tanggal){
      contentJadwalSHolat += `<tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Imsyak</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.imsyak}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Subuh</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.shubuh}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Terbit Matahari</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.terbit}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Dhuha</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.dhuha}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Dzuhur</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.dzuhur}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Ashar</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.ashr}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Maghrib</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.magrib}</td>
                              </tr>
                              <tr class="hover:bg-green-200 transition-color duration-300">
                                  <td class="border-b border-gray-300 px-1 text-start">Isya</td>
                                  <td class="border-b border-gray-300 px-1 text-center">${js.isya}</td>
                              </tr>`;
    }
  })
  contentJadwalSHolat += `</tbody>
                        </table>
                        <p class="mb-1 text-end text-[0.6rem] italic text-gray-400 font-[100] px-2">*Format waktu dalam WITA</p>`;

  divJadwalSHolat.innerHTML = contentJadwalSHolat;
}

// Pengumuman
const divPengumuman = document.querySelector("#divPengumuman");

async function renderPengumuman() {
  const responsePengumuman = await fetch(`assets/data/pengumuman.json`);
  const dataPengumuman = await responsePengumuman.json();
  let contentPengumuman = "";
  if(dataPengumuman.length < 1) {
    contentPengumuman = `<p class="text-center italic text-gray-400">Belum ada pengumuman</p>`;
  }else{
    dataPengumuman.forEach((ann) => {
      contentPengumuman += `<div class="flex flex-col px-1 py-1 hover:bg-green-200 hover:shadow transition-color duration-300 rounded-lg">
                              <span class="text-[0.6rem] text-gray-600 bg-green-100 rounded-l-full rounded-r-full px-2 w-fit">${formatTanggal(ann.tanggal)}</span>
                              <div class="flex gap-1 justify-start items-start">
                                <i class="bi-check2-circle"></i>
                                <p>${ann.isi}</p>
                              </div>
                            </div>`;
    })
  }

  divPengumuman.innerHTML = contentPengumuman;
  // console.log(dataPengumuman.length);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ayat Harian
const divAyatHarian = document.querySelector("#divAyatHarian");

async function renderAyatHarian() {
  const responseSurahs = await fetch(`https://quran-api-id.vercel.app/surahs`);
  const dataSurahs = await responseSurahs.json();
  const numSurahs = dataSurahs.length;
  const surahs = randomIntFromInterval(1, numSurahs);
  const responseSurah = await fetch(`https://quran-api-id.vercel.app/surahs/${surahs}`);
  const dataSurah = await responseSurah.json();
  const numAyahs = dataSurah.numberOfAyahs;
  const ayahs = randomIntFromInterval(1, numAyahs);
  const responseAyatHarian = await fetch(`https://quran-api-id.vercel.app/surahs/${dataSurah.number}/ayahs/${ayahs}`);
  const dataAyatHarian = await responseAyatHarian.json();
  const ah = dataAyatHarian;
  let contentAyatHarian = `<h1 class="font-bold text-lg text-center p-1">Ayat Harian</h1>
                            <div class="flex flex-col gap-2 px-4">
                              <p class="text-center text-2xl">${ah.arab}</>
                              <p class="text-center text-sm">${ah.translation}</p>
                            </div>
                            <p class="text-center italic text-xs mt-2">-- QS. ${dataSurah.name} (${dataSurah.number}:${ah.number.inSurah}) --</p>`;

  divAyatHarian.innerHTML = contentAyatHarian;
  // console.log(ah.arab);
}

const tanggalHariIni = `${tahun}-${bln + 1 < 10 ? '0' + (bln + 1) : bln + 1}-${tanggal}`;

// RENDER
renderBukaPuasa(2025);
renderJadwalSHolat(tanggalHariIni);
renderPengumuman();
renderAyatHarian();
setInterval(() => {
  renderAyatHarian();
}, 60000)
