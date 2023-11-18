const etanol = 5.79
const gasolina = 6.66
const TipoComb = "Etanol"
const GastoCarro = 10
const ViagemKM = 100



if (TipoComb == "Gasolina"){
    const ValorGasto = etanol * (ViagemKM/GastoCarro)
    console.log("O valor gasto em etanol foi de " + ValorGasto.toFixed(2))    
} else {
    ValorGasto = gasolina * (ViagemKM/GastoCarro)
    console.log("O valor gasto em gasolina foi de " + ValorGasto.toFixed(2))
}