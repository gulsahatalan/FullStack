/*
-user interaction 

 örnek bir dosyanin okunup içeriğinin ekrana yazdirilmasi gerekmektedir.

- technical details

npm i xlsx (kutuphane indirilir).
require ile kutuphanenin baglantisi saglanir.
readFile ozelligi ile dosya okutulur.
json dosyasina cevrilip ekrana bastirilir. */

// Requiring module 
const  excel =  require ( 'xlsx' ) ;
// Reading  file 
let excelFile=excel.readFile("my.xlsx");
let users=excelFile.Sheets["Sheet1"];
let JsonSheetUsers = excel.utils.sheet_to_json(users);
console.log(JsonSheetUsers);
