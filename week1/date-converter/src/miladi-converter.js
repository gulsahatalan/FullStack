

function turnMiladiFunction(hicriYil){
    let turnMiladi=(hicriYil -(hicriYil/33)+ 622).toFixed(0);
    console.log(hicriYil+"'i MILADI yila cevirirsek "+turnMiladi+" olur.")
}

module.exports=turnMiladiFunction