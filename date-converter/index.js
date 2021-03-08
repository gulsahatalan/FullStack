/*
-user interaction 

 Asagidaki cevrimler icin 2 ek modul yazmamiz istendi:
- hicri->miladi cevrimini
- miladi->hicri cevrimini

- technical details

Hicri yili miladi yila ceviren ve miladi yili hicri yila ceviren 2 fonksiyon yazilir.
Her modul export edilir.
index.js te require ile 2 dosyanin da  adresi belirtilir.*/

const turnMiladi=require("./src/miladi-converter")
const turnHicri=require("./src/hicri-converter")
const miladiYil=2021
turnMiladi(1442);

console.log(miladiYil+"'i HICRI yila cevirirsek "+turnHicri(miladiYil)+" olur.")
