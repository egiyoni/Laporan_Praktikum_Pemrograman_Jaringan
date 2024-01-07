//Created by 21343009_Mukhtarijal
// Mengimpor modul express untuk membuat router
const router = require('express').Router();
// Mengimpor fungsi signup dan getbill dari file controller.js
const { signup, getbill } = require('../controller/appController.js');
/** Definisi Rute HTTP */
// Rute untuk menangani permintaan POST ke '/api/user/signup'
router.post('/user/signup', signup);
// Rute untuk menangani permintaan POST ke '/api/product/getbill'
router.post('/product/getbill', getbill);
// Mengekspor router untuk digunakan di server.js
module.exports = router;