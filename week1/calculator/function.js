function sumFunction(a,b){
 console.log("Sum of two numbers: "+(a+b))
}

function substractFunction(a,b){
    console.log("Subtracting two numbers: "+(a-b)) 
}

function multiFunction(a,b){
    console.log("Multiplication of two numbers: "+(a*b)) 
}

function divideFunction(a,b){
    console.log("Division of two numbers: "+(a/b)) 
}

module.exports={
    sum:sumFunction,
    substract:substractFunction,
    multi:multiFunction,
    divide:divideFunction,
}

