const nota1 = 5.5
const nota2 = 5.6
const nota3 = 5.6

let media = (nota1 + nota2 + nota3) / 3

if (media < 5){
    console.log("A média foi de " + media.toFixed(1) + ", Reprovado!")
} else if ( media >= 5 && media <= 7 ){
    console.log("A media foi de " + media.toFixed(1) + ", Recuperação!")
} else {
    console.log("A media foi de " + media.toFixed(1) + ", Aprovado!")
}