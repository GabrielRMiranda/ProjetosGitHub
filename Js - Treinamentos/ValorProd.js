const produto = 10;
let debito = produto / 100 * 10;
let vista = produto / 100 * 15;
let DuasVezes = produto / 2;
let Parcelamento = produto / 100 * 10

let FormaDePagamento = "Parcela21do"

if (FormaDePagamento == "Debito"){
    console.log("Total no Débito: R$"+(produto-debito))
} else if(FormaDePagamento == "vista"){
    console.log("Total à Vista: R$"+(produto-vista))
} else if (FormaDePagamento == "DuasVezes"){
    console.log("Total parcelado em 2X de R$"+DuasVezes)
} else if (FormaDePagamento == "Parcelado"){
    console.log("Total parcelado: R$"+ (produto+Parcelamento))
} else (console.log("Forma de pagamento inválida!"))