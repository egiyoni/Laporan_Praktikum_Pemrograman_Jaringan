// Create by 21343005_Egi Yoni Sandra

// const ambilCatatan = function () {
//     return 'Ini Catatan Randi Proska...'
//     }
//     module.exports = ambilCatatan
    
const fs = require("fs");
const chalk = require("chalk");
// Fungsi untuk mengambil catatan dari file
const ambilCatatan = function () {
  try {
    const dataBuffer = fs.readFileSync("catatan.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Fungsi untuk menambahkan catatan baru
const tambahCatatan = function (catatanBaru) {
  const catatan = ambilCatatan();
  const catatanGanda = catatan.filter(function (note) {
    return note.judul === catatanBaru.judul;
  });

  if (catatanGanda.length === 0) {
    catatan.push(catatanBaru);
    simpanCatatan(catatan);
    console.log("Catatan baru ditambahkan!");
  } else {
    console.log("Judul catatan telah dipakai");
  }
};

// Fungsi untuk menyimpan catatan ke file
const simpanCatatan = function (catatan) {
  const dataJSON = JSON.stringify(catatan);
  fs.writeFileSync("catatan.json", dataJSON);
};

// Fungsi untuk menghapus catatan berdasarkan judul
const hapusCatatan = function (judul) {
  const catatan = ambilCatatan();
  const catatanBaru = catatan.filter(function (note) {
    return note.judul !== judul;
  });
  if (catatan.length === catatanBaru.length) {
    console.log("Catatan tidak ditemukan");
  } else {
    simpanCatatan(catatanBaru);
    console.log(chalk.red.inverse('Catatan berhasil dihapus!'));
  }
};

// Fungsi untuk membaca catatan berdasarkan judul
const bacaCatatan = function (judul) {
  const catatan = ambilCatatan();
  const catatanDibaca = catatan.find(function (note) {
    return note.judul === judul;
  });
  return catatanDibaca;
};

module.exports = {
  ambilCatatan: ambilCatatan,
  tambahCatatan: tambahCatatan,
  hapusCatatan: hapusCatatan,
  bacaCatatan: bacaCatatan,
};
