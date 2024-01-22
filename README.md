# Laporan_Praktikum_Pemrograman_Jaringan
# Nama: Egi Yoni Sandra
# Nim: 21343005
-----------------------------------------------------------------------------------------------------------------------------------------
Pemrograman Berbasis Jaringan Menggunakan Node.js
Instalasi Visual Studio Code
Unduh Visual Studio Code dari situs resmi.
Jalankan installer (VSCodeUserSetup-{versi}.exe) dan ikuti petunjuk instalasi.


Instalasi Node.js
Kunjungi situs resmi Node.js dan unduh versi Node.js sesuai dengan sistem operasi Anda (Windows, macOS, atau Linux).
Jalankan berkas instalasi yang telah diunduh (berkas .msi untuk Windows, .pkg untuk macOS, atau manajer paket/unduh sumber untuk Linux).
Ikuti langkah-langkah instalasi, termasuk konfigurasi direktori instalasi.


Konfigurasi PATH Node.js (Jika Diperlukan)
Jika Node.js belum terdeteksi, tambahkan PATH Node.js dengan perintah berikut di command prompt:

Uji Coba Instalasi Node.js
Masukkan perintah node -v dan npm -v pada command prompt untuk uji coba penggunaan Node.js.
Pembuatan Proyek Pertama
Buat folder PBJ1 atau sesuai keinginan Anda dan simpan di direktori yang diinginkan (tanpa spasi pada nama folder).
Buka Visual Studio Code, lalu buka folder tersebut.
Buat folder baru dengan nama testground melalui Visual Studio Code.
Buat file baru hello.js dalam folder testground dengan kode:
javascript
console.log('Welcome to Node.js!');
Jalankan file tersebut melalui terminal Visual Studio Code dengan perintah:
node hello.js
Hello World dengan Node.js
Buat file baru hello-world.js dalam folder yang sama dengan kode:
javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');

-----------------------------------------------------------------------------------------------------------------------------------------
 Buku Catatan Node.js
Proyek ini merupakan aplikasi catatan sederhana yang dibangun menggunakan Node.js. Aplikasi ini memanfaatkan beberapa package npm untuk fungsionalitas tambahan seperti fs, yargs, validator, dan chalk.
Langkah-langkah Penggunaan
Langkah 1: Membuat Catatan
1.	Buka terminal pada Visual Studio Code dan pastikan Anda berada di dalam direktori proyek (buku-catatan).
2.	Jalankan perintah node app.js tambah --judul="Judul Catatan" --isi="Isi Catatan" untuk menambahkan catatan baru.
3.	Perhatikan hasilnya pada terminal.
Langkah 2: Menampilkan Catatan
1.	Jalankan perintah node app.js list untuk menampilkan semua catatan yang telah ditambahkan.
2.	Perhatikan hasilnya pada terminal.
Langkah 3: Menghapus Catatan
1.	Jalankan perintah node app.js hapus --judul="Judul Catatan" untuk menghapus catatan berdasarkan judul.
2.	Perhatikan hasilnya pada terminal.
Langkah 4: Menampilkan Catatan Secara Spesifik
1.	Jalankan perintah node app.js baca --judul="Judul Catatan" untuk menampilkan isi catatan berdasarkan judul.
2.	Perhatikan hasilnya pada terminal.
Penggunaan Package npm
1. Validator
Package validator digunakan untuk melakukan validasi URL. Setelah menginstal, program memeriksa apakah URL https://proska.com valid.
2. Chalk
Package chalk versi 4.1.2 digunakan untuk memberikan warna dan variasi pada tampilan teks. Contoh penggunaan: chalk.blue.bold('warna biru sukses').
3. Nodemon
Package nodemon digunakan untuk memonitor perubahan dan menjalankan aplikasi secara otomatis saat ada perubahan.
4. Yargs
Package yargs membantu dalam analisis dan parsing argumen pada baris perintah. Perintah seperti tambah dan hapus diimplementasikan dengan menggunakan yargs.
Instalasi dan Konfigurasi
1.	Buka terminal pada Visual Studio Code dan pastikan Anda berada di dalam direktori proyek (buku-catatan).
2.	Jalankan perintah npm install untuk menginstal semua package yang diperlukan.
Menjalankan Aplikasi dengan Nodemon
1.	Pastikan nodemon terinstal dengan menjalankan perintah nodemon -v.
2.	Jika belum terinstal, jalankan npm install nodemon -g dan perintah nodemon app.js untuk menjalankan aplikasi.
Selamat mencoba dan eksplorasi fitur-fitur sederhana dalam aplikasi catatan ini! 
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1');
console.log(Server running at http://127.0.0.1:${PORT}/);
Jalankan program dengan perintah node hello-world.js.
Buka browser dan akses http://127.0.0.1:3000/ untuk melihat tampilan Hello World.

-----------------------------------------------------------------------------------------------------------------------------------------

