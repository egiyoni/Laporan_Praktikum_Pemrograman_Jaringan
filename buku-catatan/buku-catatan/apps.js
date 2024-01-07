// Create by 21343005_Egi Yoni Sandra

/*Import Core Module Node.js*/
// const fs = require('fs')
// fs.writeFileSync('catatan.txt', 'Nama Saya Mukhtarijal')
// fs.appendFileSync('catatan.txt', 'Saya tinggal di Padang')

/*Import File Pada Node.js*/
// const catatan = require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

/*Import npm pada Node,js*/
// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))

/*Latihan 1 -> Chalk*/
// Print teks berwarna biru
// const chalk = require("chalk");
// console.log(chalk.blue("Ini warna biru"));
// // Print teks berwarna merah
// console.log(chalk.red("ini warna merah"));
// // Print teks berwarna hijau
// console.log(chalk.green("print warna hijau sukses"));
// // Print teks berwarna merah dan tebal
// console.log(chalk.red.bold("print warna merah sukses"));
// // Print teks berwarna kuning dan miring
// console.log(chalk.yellow.italic("print warna kuning sukses"));
// // Print teks berwarna hijau dan garis bawah
// console.log(chalk.green.underline("print warna hijau sukses"));
// // Print teks berwarna magenta dan coretan
// console.log(chalk.magenta.strikethrough("print warna magenta sukses"));

/*Mendapatkan Input dari Pengguna*/
// const ambilCatatan = require('./catatan.js')
// const command = process.argv[2]; // Menggunakan indeks n untuk mendapatkan argumen pertama setelah nama script
// console.log(process.argv[2])

// if (command === 'tambah'){
//     console.log('Tambah Catatan')
// } else if (command === 'hapus'){
//     console.log('Hapus Catatan')
// }

/*Argumen Parsing(Penguraian Argumen) */
const yargs = require("yargs");
const catatan = require("./catatan.js");

// Kustomisasi versi yargs
yargs.version("10.1.0");

// Menambah catatan baru
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
// Menyimpan catatan ke dalam file
    const catatanBaru = {
      judul: argv.judul,
      isi: argv.isi,
    };

    catatan.tambahCatatan(catatanBaru);

// Menampilkan judul dan isi catatan
    console.log("Judul: " + argv.judul);
    console.log("Isi: " + argv.isi);
  },
});

// Perintah hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang akan dihapus",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // Menghapus catatan berdasarkan judul
    catatan.hapusCatatan(argv.judul);
    console.log("Catatan berhasil dihapus");
  },
});

// Membuat perintah (command) 'list'
yargs.command({
  command: "list",
  describe: "list catatan",
  handler: function () {
    // Menampilkan semua catatan
    const catatanList = catatan.ambilCatatan();
    console.log("List catatan yang pernah dibuat");
    console.log(catatanList);
  },
});

// Membuat perintah (command) 'read'
yargs.command({
  command: "read",
  describe: "baca catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang ingin dibaca",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // Membaca catatan berdasarkan judul
    const catatanDibaca = catatan.bacaCatatan(argv.judul);
    if (catatanDibaca) {
      console.log("Membaca catatan...");
      console.log(catatanDibaca);
    } else {
      console.log("Catatan tidak ditemukan");
    }
  },
});

// Letakan bagian ini pada baris terakhir
yargs.parse();
