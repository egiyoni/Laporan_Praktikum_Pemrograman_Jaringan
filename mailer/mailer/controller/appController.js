// Create by 21343005_Egi Yoni Sandra

// Mengimpor modul Nodemailer untuk mengirim email
const nodemailer = require('nodemailer');
// Mengimpor modul Mailgen untuk membuat isi email
const Mailgen = require('mailgen');
// Ambil variabel lingkungan dari file env.js
const { EMAIL, PASSWORD } = require('../env.js')
/** Fungsi Signup untuk Mengirim Email dari Akun Testing */
const signup = async (req, res) => {
    try {
        // Membuat akun testing untuk pengiriman email
        let testAccount = await nodemailer.createTestAccount();
        // Membuat objek transporter yang dapat digunakan untuk mengirim email menggunakan SMTP default
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true untuk port 465, false untuk port lainnya
            auth: {
                user: testAccount.user, // email pengguna yang dibuat
                pass: testAccount.pass, // password pengguna yang dibuat
            },
        });
        // Konfigurasi pesan email
        let message = {
            from: '"Fred Foo 👻" <foo@example.com>', // alamat pengirim
            to: "bar@example.com, baz@example.com", // daftar penerima
            subject: "Hello ✔", // subjek email
            text: "Successfully Register with us.", // isi email dalam format teks
            html: "<b>Successfully Register with us.</b>", // isi email dalam format HTML
        }
        // Mengirim email menggunakan transporter
        let info = await transporter.sendMail(message);
        // Mengembalikan respons ke klien dengan informasi sukses pengiriman email
        return res.status(201).json({ 
            msg: "Anda seharusnya menerima email",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info),
        });
    } catch (error) {
        // Menangani kesalahan dan mengembalikan respons ke klien dengan pesan kesalahan
        return res.status(500).json({ error: error.message });
    }
}
/** Fungsi Getbill untuk Mengirim Email Tagihan dari Akun Gmail */
const getbill = (req, res) => {
    try {
        // Mengambil alamat email penerima dari body permintaan
        const { userEmail } = req.body;
        // Konfigurasi transporter untuk pengiriman email melalui Gmail
        let config = {
            service: 'gmail',
            auth: {
                user: EMAIL, // email pengguna dari file env.js
                pass: PASSWORD, // password pengguna dari file env.js
            },
        }
        // Membuat objek transporter menggunakan konfigurasi
        let transporter = nodemailer.createTransport(config);
        // Membuat objek Mailgen untuk menghasilkan isi email
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link: 'https://mailgen.js/'
            }
        });
        // Konfigurasi respons email
        let response = {
            body: {
                name: "Daily Tuition",
                intro: "Tagihan Anda telah tiba!",
                table: {
                    data: [
                        {
                            item: "Nodemailer Stack Book",
                            description: "Aplikasi Backend",
                            price: "$10.99",
                        }
                    ]
                },
                outro: "Berharap dapat berbisnis lebih banyak lagi"
            }
        }
        // Membuat isi email menggunakan Mailgen
        let mail = MailGenerator.generate(response);
        // Konfigurasi pesan email
        let message = {
            from: EMAIL, // alamat pengirim
            to: userEmail, // alamat penerima dari permintaan
            subject: "Pesan Tagihan", // subjek email
            html: mail, // isi email dalam format HTML
        }
        // Mengirim email menggunakan transporter
        transporter.sendMail(message);
        // Mengembalikan respons ke klien dengan informasi sukses pengiriman email
        return res.status(201).json({ msg: "Anda seharusnya menerima email" });
    } catch (error) {
        // Menangani kesalahan dan mengembalikan respons ke klien dengan pesan kesalahan
        return res.status(500).json({ error: error.message });
    }
}
// Mengekspor fungsi-fungsi controller untuk digunakan di route.js
module.exports = {
    signup,
    getbill
};