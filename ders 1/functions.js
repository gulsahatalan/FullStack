function merhabaFonksiyonu(){
    console.log("node merhaba")
}

function guleguleFonksiyonu(){
    console.log("node gule gule")
}
//eski modul sistem
module.exports={
    merhaba:merhabaFonksiyonu,
    gulegule:guleguleFonksiyonu,
}

