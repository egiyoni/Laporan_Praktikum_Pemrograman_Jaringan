# Laporan_Praktikum_Pemrograman_Jaringan
# Nama: Egi Yoni Sandra
# Nim: 21343005

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
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1');
console.log(Server running at http://127.0.0.1:${PORT}/);
Jalankan program dengan perintah node hello-world.js.
Buka browser dan akses http://127.0.0.1:3000/ untuk melihat tampilan Hello World.
