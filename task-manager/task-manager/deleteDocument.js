const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");
    const db = client.db(namaDatabase);
    
    // Mengakses koleksi 'pengguna'.
    const clPengguna = db.collection("pengguna");

    // Mengakses koleksi 'tugas'.
    const clTugas = db.collection("tugas");

    // Menghapus semua dokumen dalam koleksi 'pengguna' dengan usia 22.
    const deleteManyPengguna = await clPengguna.deleteMany({
      usia: 22,
    });

    console.log("Data Pengguna telah dihapus (deleteMany):", deleteManyPengguna);

    // Menghapus satu dokumen dalam koleksi 'tugas' dengan Deskripsi "Membersihkan rumah".
    const deleteOneTugas = await clTugas.deleteOne({
      Deskripsi: "Membersihkan rumah",
    });

    console.log("Data Tugas telah dihapus (deleteOne):", deleteOneTugas);
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

main();
