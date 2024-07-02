const numberDiv = parseInt(prompt('ingrese un numero divisble por 2, 3, 5 o 7'));
let mensaje = `El número ${numberDiv} es divisible por:`;
if (numberDiv % 2 === 0 ) {
    if (mensaje !== `El número ${numberDiv} es divisible por:`) {
        mensaje += ' , ';
    }
    mensaje += ' 2 ';
}
if (numberDiv % 3 === 0) {
    if (mensaje !== `El número ${numberDiv} es divisible por:`) {
        mensaje += ' , ';
    }
    mensaje += ' 3 ';
}
if (numberDiv % 5 === 0) {
    if (mensaje !== `El número ${numberDiv} es divisible por:`) {
        mensaje += ' , ';
    }
   
    mensaje += ' 5 '
}
if (numberDiv % 7 === 0) {
    if (mensaje !== `El número ${numberDiv} es divisible por:`) {
        mensaje += ' y ';
    }
    

    mensaje += ' 7 ';
}
document.write(`<h2>${mensaje}</h2>`)