const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");
    const db = client.db(namaDatabase);
    const clPengguna = db.collection("pengguna");

    // Dapatkan daftar nama dan usia yang tidak unik
    const uniqueNames = await clPengguna.distinct("nama");
    const uniqueAges = await clPengguna.distinct("usia");

    // Perbarui data yang tidak unik untuk nama
    for (const name of uniqueNames) {
      const duplicateUsers = await clPengguna.find({ nama: name }).toArray();
      if (duplicateUsers.length > 1) {
        for (let i = 1; i < duplicateUsers.length; i++) {
          const newName = `${name}_${i}`;
          await clPengguna.updateOne(
            { _id: duplicateUsers[i]._id },
            { $set: { nama: newName } }
          );
        }
      }
    }

    // Perbarui data yang tidak unik untuk usia
    for (const age of uniqueAges) {
      const duplicateUsers = await clPengguna.find({ usia: age }).toArray();
      if (duplicateUsers.length > 1) {
        for (let i = 1; i < duplicateUsers.length; i++) {
          const newAge = age + i;
          await clPengguna.updateOne(
            { _id: duplicateUsers[i]._id },
            { $set: { usia: newAge } }
          );
        }
      }
    }

    console.log("Data telah diperbarui dan dibuat unik.");

  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

main();
