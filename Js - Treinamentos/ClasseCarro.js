class Carro{
    constructor(marca, modelo, cor, gastoMedio) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Cor = cor;
        this.GastoMedio = gastoMedio;
    }

    Informativo(){
        console.log("Marca:",this.Marca);
        console.log("Marca:",this.Modelo);
        console.log("Cor:",this.Cor);
        console.log("Gasto Médio:",this.GastoMedio.toFixed(2));
    }
}

const Combustivel = 5.41;

const C1 = new Carro('Fiat', 'Palio', 'Azul', 8.6);
const C2 = new Carro('Chevrolet', 'Onix', 'Vermelho', 12.9);
const C3 = new Carro('Ford', 'Focus Titanium', 'Branco', 6.7);
const C4 = new Carro('Volkswagen', 'Jetta', 'Preto', 10.9);

function Consumo(C1,C2,C3,C4){
    
    const ConsumoComb = Combustivel * C1.GastoMedio;
    const ConsumoComb2 = Combustivel * C2.GastoMedio;
    const ConsumoComb3 = Combustivel * C3.GastoMedio;
    const ConsumoComb4 = Combustivel * C4.GastoMedio;

    return{
        C1: ConsumoComb.toFixed(2),
        C2: ConsumoComb2.toFixed(2),
        C3: ConsumoComb3.toFixed(2),
        C4: ConsumoComb4.toFixed(2),
    }
}    


function ComparaConsumo(C1,C2,C3,C4){

    const Consumos = Consumo(C1,C2,C3,C4);

    if (Consumos.C1 > Consumos.C2 && Consumos.C1 > Consumos.C3 && Consumos.C1 > Consumos.C4) {
        console.log("O", C1.Modelo, "possui um gasto maior de combustível, sendo de R$",Consumos.C1);
    } else if (Consumos.C2 > Consumos.C1 && Consumos.C2 > Consumos.C3 && Consumos.C2 > Consumos.C4) {
        console.log("O", C2.Modelo, "possui um gasto maior de combustível, sendo de R$",Consumos.C2);
    } else if (Consumos.C3 > Consumos.C1 && Consumos.C3 > Consumos.C2 && Consumos.C3 > Consumos.C4) {
        console.log("O", C3.Modelo, "possui um gasto maior de combustível, sendo de R$",Consumos.C3);
    } else if (Consumos.C4 > Consumos.C1 && Consumos.C4 > Consumos.C2 && Consumos.C4 > Consumos.C3) {
        console.log("O", C4.Modelo, "possui um gasto maior de combustível, sendo de R$",Consumos.C4);
    } else {
        console.log("Os carros possuem o mesmo gasto de combustível!");
    }
}

(function (){

    ComparaConsumo(C1,C2,C3,C4);

})()