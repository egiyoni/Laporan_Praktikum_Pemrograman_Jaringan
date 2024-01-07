// Mengimport modul MongoClient dan ObjectId dari 'mongodb'.
const { MongoClient, ObjectId } = require("mongodb");

// Mendefinisikan URL MongoDB server yang akan digunakan untuk koneksi.
const url = "mongodb://127.0.0.1:27017";

// Membuat instance MongoClient dengan URL koneksi yang telah didefinisikan sebelumnya.
const client = new MongoClient(url);

// Mendefinisikan nama database yang akan digunakan.
const namaDatabase = "task-manager";

// Membuat instance ObjectId baru. ObjectId digunakan untuk menghasilkan unik identifier untuk dokumen MongoDB.
const id = new ObjectId();

// BAGIAN INI MENCETAK INFORMASI DARI ObjectID()
// Mencetak ObjectId yang baru dibuat ke konsol.
console.log("ID ObjectId baru:", id);

// Mencetak representasi hexadecimal dari ObjectId ke konsol.
console.log("Representasi hexadecimal dari ID:", id.toHexString());

// Mencetak panjang (jumlah karakter) dari representasi hexadecimal ObjectId ke konsol.
console.log("Panjang representasi hexadecimal:", id.toHexString().length);

// Mencetak timestamp yang terkait dengan ObjectId ke konsol.
console.log("Timestamp terkait dengan ID:", id.getTimestamp());

// BAGIAN INI ADALAH FUNGSI UTAMA YANG BERJALAN SECARA ASYNCHRONOUS
// Mendefinisikan fungsi async 'main' untuk melakukan operasi-operasi terkait MongoDB.
async function main() {
  try {
    // BAGIAN INI TERKAIT KONEKSI KE DATABASE DAN MEMASUKAN DATA
    // Menggunakan 'await' untuk menghubungkan ke server MongoDB.
    await client.connect();
    console.log("Terhubung ke server database MongoDB");

    // Memilih database dengan nama yang telah didefinisikan sebelumnya.
    const db = client.db(namaDatabase);

    // Memilih koleksi 'pengguna' di dalam database.
    const clPengguna = db.collection("pengguna");

    // Memilih koleksi 'tugas' di dalam database.
    const clTugas = db.collection("tugas");

    // MEMASUKAN SATU DATA (DOKUMEN)
    // Memasukkan beberapa dokumen ke dalam koleksi 'pengguna'.
    const insertPengguna = await clPengguna.insertMany([
      {
        _id: id,
        nama: "Rijal",
        usia: 21,
      },
      {
        _id: new ObjectId(),
        nama: "Rizal",
        usia: 21,
      },
      {
        _id: new ObjectId(),
        nama: "Rizky",
        usia: 21,
      },
    ]);
    console.log("Data Pengguna telah dimasukkan:", insertPengguna);

    // MEMASUKAN BANYAK DATA (DOKUMEN)
    // Memasukkan beberapa dokumen ke dalam koleksi 'tugas'.
    const insertTugas = await clTugas.insertMany([
      {
        Deskripsi: "Membersihkan rumah",
        StatusPenyelesaian: true,
      },
      {
        Deskripsi: "Mengerjakan tugas kuliah",
        StatusPenyelesaian: false,
      },
      {
        Deskripsi: "Memberikan bimbingan",
        StatusPenyelesaian: false,
      },
    ]);
    console.log("Data Tugas telah dimasukkan:", insertTugas);

    // Mengembalikan pesan sukses setelah operasi selesai.
    return "Operasi selesai.";
  } catch (err) {
    // BAGIAN INI MENANGANI ERROR
    // Menangani kesalahan dengan mencetak pesan kesalahan ke konsol.
    console.error("Error:", err);
  } finally {
    // Selalu menutup koneksi ke server MongoDB setelah operasi selesai, baik sukses maupun gagal.
    client.close();
  }
}

// Memanggil fungsi 'main' dan menangani hasilnya menggunakan 'then' dan 'catch' untuk mencetak hasil atau pesan kesalahan ke konsol.
main()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
