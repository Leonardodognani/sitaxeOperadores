function compareNumbers (num1, num2) {

    if(!num1 || !num2){
        console.log("Você precisa definir 2 números para esta operação!");
    }

    if(num1 === num2 && num1 + num2 < 10){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, a qual é menor que 10 e, portanto, menor que 20.`);
    } else if(num1 === num2 && num1 + num2 > 10 && num1 + num2 < 20) {
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 10 e menor do que 20.`);
    } else if(num1 === num2 && num1 + num2 > 20){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 20 e, portanto, maior do que 10.`);
    } else if(num1 === num2 && num1 + num2 === 10){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, a qual é menor do que 20.`);
    } else if(num1 === num2 && num1 + num2 === 20){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 10.`);
    } else if(num1 !== num2 && num1 + num2 < 10){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, a qual é menor que 10 e, portanto, menor que 20.`);
    } else if(num1 !== num2 && num1 + num2 > 10 && num1 + num2 < 20) {
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 10 e menor do que 20.`);
    } else if(num1 !== num2 && num1 + num2 > 20){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 20 e, portanto, maior do que 10.`);
    } else if(num1 !== num2 && num1 + num2 === 10){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, a qual é menor do que 20.`);
    } else if(num1 !== num2 && num1 + num2 === 20){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, a qual é maior do que 10.`);
    }

}
    

compareNumbers(9, 4);