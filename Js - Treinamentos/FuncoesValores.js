function divisao (produto){
    return produto/100
}

function IMPFormasPGTO(formas){
    console.log("   Formas de Pagamento")
    console.log(" 1 - Debito\n 2 - A vista\n 3 - PIX\n 4 - Parcelado 2x\n 5 - Parcelamento")
}

function FormaPGTO(OptPGTO, produto){
    if (OptPGTO === 1){
        const Res = divisao(produto) * 10
        return Res - produto
    } else if (OptPGTO === 2){
        Res = divisao(produto) * 15
        return Res - produto
    } else if (OptPGTO === 3){
        return produto
    } else if (OptPGTO === 4){
       return Res = produto / 2
    } else if (OptPGTO === 5){
        Res = divisao(produto) * 15
        return Res + produto
    }
}

(function (){
    let OptPGTO = 5
    let produto = 10

    IMPFormasPGTO()
    console.log("O valor total é de " + FormaPGTO(OptPGTO, produto))
})()