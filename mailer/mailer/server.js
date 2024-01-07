// Create by 21343005_Egi Yoni Sandra

// Mengimpor modul express
const express = require('express');
// Mengimpor rute dari file route.js
const appRoute = require('./routes/route.js');
// Membuat instance express
const app = express();
// Menentukan port yang akan digunakan, jika tidak tersedia, gunakan port 5000
const PORT = process.env.PORT || 5000;
// Menggunakan middleware untuk mengizinkan express mengenali data JSON dalam permintaan
app.use(express.json());
// Menggunakan rute dari file route.js dengan awalan '/api'
app.use('/api', appRoute);
// Mendengarkan koneksi pada port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});