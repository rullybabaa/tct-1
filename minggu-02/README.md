# PEMBUATAN APLIKASI REKRUITASI ASISTEN PRAKTIKUM BERBASIS SAAS

## Hyper Text Preprocessor (PHP)

PHP (HyperText Preprocessor) merupakan bahasa pemrogramman berbasis web yang memiliki kemampuan untuk memroses dan mengolah data secara dinamis. PHP dapat dikatakan  sebagai sebuah server- side embedded script language, artinya semua sintaks dan perintah program yang anda tulis akan sepenuhnya dijalankan oleh  server,  tetapi dapat  disertakan  pada halaman HTML biasa. Pada umumnya, semua aplikasi yang dibangun menggunakan PHP akan memberikan hasil pada web browser, tetapi prosesnya secara keseluruhan dijalankan pada server. [3]

## MySQL

MySQl merupakan software yang tergolong database server dan bersifat Open Source menyatakan bahwa software ini dilengkapi dengan source code (kode yang dipakai untuk membuat MySQL), selain tentu saja bentuk executable-nya atau kode yang dapat dijalankan secara langsung dalam sistem operasi, dan bisa diperoleh dengan cara mengunduh di internet secara gratis. Hal menarik lainnya adalah MySQL juga bersifat multiplatform. MySQL dapat dijalankan pada berbagai sistem operasi. [3]

## Hypertext Markup Language (HTML)

HTML kependekan dari Hyper Text Markup language adalah standard yang dipakai pada halaman web. Berdasarkan standard inilah browser bisa memahami isi suatu dokumen yang berasal dari web server. HTML  bekerja dengan menggunakan HTTP
 
(HyperText Transfer Protocol), yaitu protocol komunikasi yang memungkinkan web server berkomunikasi dengan web browser. [4]

## Cascading Style Sheet (CSS)

 
Cascading style sheet (CSS) adalah suatu bahasa stylesheet  yang  digunakan untuk  mengatur tampilan suatu dokumen yang ditulis dalam bahasa markup. CSS diperkenalkan   untuk   pengembangan   website   pada tahun 1996. Nama CSS didapat dari fakta bahwa setiap deklarasi style  yang berbeda dapat diletakkan secara berurutan, yang kemudian akan membentuk hubungan parent-child pada setiap style. [5]

## Codeigniter

CodeIgniter adalah salah satu bentuk framework yang dapat dieksekusi lebih cepat dibandingkan dengan framework lainnya. Codeigniter menyediakan fasilitas
penunjang aplikasi website, sehingga waktu pembuatan menjadi lebih efisien. [6]

# Analisis Sistem Yang Akan Dibangun
Dari pembuatan aplikasi rekruitasi asprak berbasis SaaS, berikut ini rancangan aplikasi yang akan dibangun :

+ [analisis sistem](https://github.com/ayuwidyainggit/tct/tree/master/minggu-01)

## Entity Relationship Diagram (ERD)
Berikut ini adalah Entity-relationship diagram (ERD)
dari aplikasi yang dibuat :
+ [ERD](https://github.com/ayuwidyainggit/tct/tree/master/minggu-01)

## Implementasi
Aplikasi rekruitasi  asprak  berbasis  SaaS  ini  dibuat
menggunakan tools : Xampp, dan Codeigniter (CI). Berikut penjelasannya :

## Install Xampp
Xampp  ini  adalah  sebuah  aplikasi  web  server  dan
manajemen database.  Aplikasi ini diperlukan dalam pembuatan aplikasi rekruitasi asprak berbasis SaaS untuk  membuat  database.  Berikut  ini  adalah  cara install Xampp :

1.    Jalankan aplikasi Xampp, dengan cara menekkan
2 kali pada aplikasinya.

2.    Setelah itu, simpan Xampp pada C:\xampp.

3.    Tunggu Instalasi sampai selesai.

4.    Lalu jalankan Xampp, dan Aktifkan Apache dan
Mysql

## Pembuatan Database
Setelah    instalasi    Xampp    selesai,    maka    tahap
selanjutnya adalah membuat database   dari aplikasi yang akan dibua, berikut cara membuat database :

1.    Buka web browser yang digunakan.

2.    Lalu ketik “localhost/phpmyadmin” di search
pada web browser.

3.    Lalu masukkan nama database pada kolom
database dengan nama “proyek_akhir”.

4.    Lalu klik create.


## Pembuatan Aplikasi Menggunakan CI 
1. unduh framework codeigniter di www.codeigniter.com
2. simpan framework tersebut di C:\xampp\htdocs
3. lakukan konfigurasi framework tersebut.

## Kesimpulan

Dari penjelasan-penjelasan pada bab-bab sebelumnya, dapat   ditarik  kesimpulan  yaitu   aplikasi  rekruitasi asprak berbasis SaaS berhasil dibuat, dengan fungsionalitas sebagai berikut :

1.   Pengelolaan registrasi calon asprak. Dimana admin    fakultas    dapat    mengelola    for m registrasi calon asprak, lalu setelah itu calon asprak dapat mendaftarkan diri di form registrasi yang telah dibuat oleh admin tersebut.

2.    Pembuatan   soal   ujian   tes   calon   asprak.
Dimana users (Pembina lab) terlebih dahulu didaftarkan oleh admin fakultas,  setelah itu users (Pembina lab) dapat masuk ke halaman pembina lab dan dapat membuat soal ujian tes calon asprak.

3.   Pelaksanaan ujian tes calon asprak. Dimana users (Calon asprak) yang telah mendaftar dan lulus administrasi, setelah itu  users (Calon
asprak) dapat masuk ke halaman calon asprak dan dapat mengerjakan soal ujian tes.

4.   Pengaturan SK asprak yang telah dinyatakan lulus. Dimana users (Calon asprak) yang telah dinyatakan lulus sebagai asprak dapat melihat SK asprak pada halaman asprak. SK asprak dapat diatur oleh admin fakultas.


