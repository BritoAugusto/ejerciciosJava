const numberDiv = parseInt(prompt('Ingrese un número divisible por 2, 3 ,5 o 7'));

if (numberDiv % 2 === 0) {
   document.write(`<h1>El número ${numberDiv} es divisible por 2 </h1>`);
} else if (numberDiv % 3 === 0) {
    document.write(`<h1>El número ${numberDiv} es divisible por 3 </h1>`);
} else if (numberDiv % 5 === 0) {
    document.write(`<h1>El número ${numberDiv} es divisible por 5 </h1>`);
} else if (numberDiv % 7 === 0) {
    document.write(`<h1>El número ${numberDiv} es divisible por 7 </h1>`);
} else {
    document.write(`<h1>El número ${numberDiv} no es divisible por 2, 3, 5 o 7 </h1>`);
}
