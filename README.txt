
1.Website wajib memiliki navbar menggunakan elemen tag <nav></nav>. Sesuaikan konten, maupun pemilihan warna dengan kebutuhan kalian.

Note : kerjakan nomor 1 sampai 5 pada file index.html. Jika ingin memberikan style, lakukan pada file style.css.

2.Buatlah sebuah elemen tag <p></p> dengan id yaitu description yang berisi penjelasan singkat mengenai web yang sedang dibuat

3.Sisipkan minimal satu elemen tag <img/> atau elemen tag <video></video> untuk menampilkan gambar ataupun video agar website kalian terlihat lebih menarik.

4. Tambahkan elemen tag <a></a>dengan id yaitu link yang memiliki tautan ke URL https://skilvul.com. Kamu dibebaskan untuk menambahkannya di bagian mana pun.

5. Tambahkan 1 elemen <form>.
Di dalam <form> tersebut, tambahkan:
•	<input> dengan id name, dan tipe text
•	<input> dengan id city, dan tipe text
•	<input> dengan id email, dan tipe email
•	<input> dengan id zip-code, dan tipe number
•	<label></label> dengan id check dan isi konten dengan kalimatDengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai
•	<input> dengan id status, dan tipe checkbox
•	<button>Submit</button> dengan id submit-form, dan tipe submit
•	<div> dengan id warning

6. Selanjutnya kita akan bermain dengan logic JavaScript untuk mengelola hasil inputan dari form yang sudah kita buat. Agar nantinya ketika tombol submit di klik maka file dan kode JavaScript akan terpanggil. Kali ini kita akan menggunakan function untuk membantu menjalankan proses ini.
Pertama-tama pada file script.js buatlah sebuah function dengan nama handleGetFormData yang tugasnya adalah membaca isi dari 5 <input> di atas. Gunakan DOM method getElementById untuk mengambil value inputan dan kembalikan sebuah objek yang memiliki properti name,email, city, zipCode dan status.

Note: kerjakan nomor 6 sampai 11 pada file script.js

7. Pada form kita memiliki inputan zip-code dengan tipe number. Artinya data yang diterima hanya boleh diisi dengan angka saja. Disini kita perlu membuat validasi untuk memastikan tidak terjadi kesalahan input dari user yang tidak sengaja memasukkan alphabet.
Langkah yang perlu dilakukan adalah buat sebuah function bernama isNumber yang menerima 1 argumen string. Fungsi tersebut akan mengembalikan boolean true jika semua karakter dalam string tersebut adalah angka, dan mengembalikan false jika tidak.
hint : gunakan isNaN()untuk melakukan pengecekan angka.

8. Pada form kita juga memiliki checkbox yang harus dicentang sebelum melakukan submit. Kita perlu memastikan bahwa jika checkbox tidak dicentang maka proses submit tidak dijalankan.
Yang perlu kamu lakukan adalah buat sebuah function bernama checkboxIsChecked yang mengembalikan true apabila <input> dengan id status dicentang. Selain itu, kembalikan nilai false.

9. Setelah membuat proses pengecekan untuk zip-code dan checkbox, kita akan melakukan proses validasi untuk memastikan bahwa semua inputan sudah diisi oleh user.
Buat sebuah function bernama validateFormData yang menerima 1 argumen objek dengan properti:
•	name
•	city
•	email
•	zipCode
•	status
Kembalikan true jika:
•	objek tidak bernilai null
•	nilai dari properti zipCode harus dalam bentuk angka
•	attribute checked dari <input> dengan id yaitu status harus true
Jika tidak, kembalikan false
Gunakan operator && dalam melakukan pengecekan ketiga perkondisian di atas

10. Pada tahap ini kita akan menjalankan proses submit inputan. Kita akan membuat satu function lagi yang akan menjadi lokasi utama untuk pemanggilan function validasi yang sudah dikerjakan sebelumnya.
Ikuti tahap berikut dalam pengerjaannya :
Buat sebuah function bernama submit dan panggil function ini ketika <form> disubmit.
Panggil fungsi validateFormData di dalam fungsi submit tersebut, dan apabila validateFormData mengembalikan nilai false, maka fungsi submit akan menampilkan teks Periksa form anda sekali lagi di <div> dengan id warning. Jika validateFormData mengembalikan nilai true, maka teks di dalam <div> dengan idwarning akan dihapus.

Note: Gunakan addEventListener untuk menghubungkan function submit dengan form pada file HTML. Gunakan event.preventDefault() untuk mencegah refresh pada page saat user melakukan submit form.

11. Pada file index.html buatlah footer untuk website kalian menggunakan tag <footer></footer> di dalam body. Silahkan berikan styling semenarik mungkin dan kalian dibebaskan untuk penggunaan warna maupun penempatan konten.

