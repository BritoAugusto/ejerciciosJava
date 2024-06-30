const number1 = parseInt(prompt('Ingrese un número'))
const number2 = parseInt(prompt('Ingrese otro número'))
if (number1 > number2) {
    document.write('El número  ' + number1 + ' es mayor que  ' + number2)
    
} else if (number2 > number1) {
    document.write('El número  ' + number2 + ' es mayor que  ' +  number1 )
    
} else {
    document.write('Ambos números son iguales')
}