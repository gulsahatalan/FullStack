/*
-user interaction 

 node.js tarafından sağlanan bir kütüphaneyi kullanarak bir dosya okumamiz istendi. örnek bir dosyanin okunup içeriğinin ekrana yazdirilmasi gerekmektedir.

- technical details

Bir text dosyasi olusturulur.
index.js te require ile kutuphanenin baglantisi saglanir.
Dosya ismiyle baglanti kurup ekrana yazdirilir.*/

const fs = require('fs');

fs.readFile('atasozleri.txt', 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});