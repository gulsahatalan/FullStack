/*
-user interaction 

 data.js dosyasindaki datalarin EXCEL dosyasina yazdirilmasi gerekmektedir.

- technical details

require ile kutuphanenin baglantisi saglanir.
require ile data dosyasinin baglantisi saglanir.
dosya okutulup json dosyasina cevrilir.
book_apend_sheet ozelligi ile excel dosyasina yazdirilir. */

// Requiring module 
const reader = require('xlsx') 
const student_data=require('./data.js')

// Reading  file 
const file = reader.readFile('my.xlsx') 
//Turn to Json
const newJsonFile = reader.utils.json_to_sheet(student_data) 

reader.utils.book_append_sheet(file,newJsonFile,"Sheet3") 

// Writing to file 
reader.writeFile(file,'my.xlsx') 
