// Create by 21343005_Egi Yoni Sandra

/*Menyimpan data dengan JSON */
const fs = require('fs')
// const buku = {
// judul: 'Pemrograman Jaringan',
// penulis: 'Egi Yoni Sandra'
// }
// const bookJSON = JSON.stringify(buku)
// fs.writeFileSync('1-jsontest.json', bookJSON)
// Saat program diatas dijalanlan, maka akan muncul sebuah file baru dengan nama yg sama tapi dalam format .JSON
const dataBuffer = fs.readFileSync("1-jsontest.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.judul);