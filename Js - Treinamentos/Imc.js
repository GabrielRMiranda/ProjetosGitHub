const peso = 80;
const altura = 1.92;
const alturaX = (altura * altura)

let IMC = peso / alturaX

if (IMC < 18.5) {
    console.log("Abaixo do peso!");
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal!");
} else if (IMC >= 25 && IMC < 30) {
    console.log("Acima do peso!");
} else if (IMC >= 30 && IMC < 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave!");
}
