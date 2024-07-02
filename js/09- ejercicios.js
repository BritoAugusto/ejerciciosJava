const frase = prompt("Ingrese una palabra de 4 letras");
let vocales = "";
if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u" ||
  frase.charAt(0) === "A" ||
  frase.charAt(0) === "E" ||
  frase.charAt(0) === "I" ||
  frase.charAt(0) === "O" ||
  frase.charAt(0) === "U"
) {
    vocales += frase.charAt(0)

}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u" ||
  frase.charAt(1) === "A" ||
  frase.charAt(1) === "E" ||
  frase.charAt(1) === "I" ||
  frase.charAt(1) === "O" ||
  frase.charAt(1) === "U"
) {
    vocales += frase.charAt(1)
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u" ||
  frase.charAt(2) === "A" ||
  frase.charAt(2) === "E" ||
  frase.charAt(2) === "I" ||
  frase.charAt(2) === "O" ||
  frase.charAt(2) === "U"
) {
    vocales += frase.charAt(2)
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u" ||
  frase.charAt(3) === "A" ||
  frase.charAt(3) === "E" ||
  frase.charAt(3) === "I" ||
  frase.charAt(3) === "O" ||
  frase.charAt(3) === "U"
) {
    vocales += frase.charAt(3)
}
document.write(vocales)