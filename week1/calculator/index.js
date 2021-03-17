/*
-user interaction 

4 islemi barindiran bir ek modul yazmamiz istendi.

- technical details

4 islem icin 4 fonksiyon yazilir.
function.js te module exports objesi olusturulur.
index.js te require ile fonksiyonlarin adresi belirtilir.*/

const {sum, substract, multi, divide} = require("./function"); 

sum(12,3);
substract(12,3);
multi(12,3);
divide(12,3);