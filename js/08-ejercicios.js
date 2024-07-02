const numberDiv = parseInt(prompt('Ingrese un número divisible por 2'));

if (numberDiv % 2 === 0 ) {
    document.write(`<h1>El número ${numberDiv} es divisible por 2 </h1>`)
    
}else {
     document.write(`<h1>El número ${numberDiv} no es divisible por 2 </h1>`)
}