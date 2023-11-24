class Carro{
    Marca;
    Modelo;
    Cor;
    GastoMedio;

    Informativo(){
        console.log("Marca:",this.Marca);
        console.log("Marca:",this.Modelo);
        console.log("Cor:",this.Cor);
        console.log("Gasto Médio:",this.GastoMedio);
    }
}

const Combustivel = 5.41;

const C1 = new Carro
C1.Marca = 'Fiat';
C1.Modelo = 'Palio'
C1.Cor = 'Azul';
C1.GastoMedio = 8.6;

const C2 = new Carro
C2.Marca = 'Chevrolet';
C2.Modelo = 'Onix';
C2.Cor = 'Vermelho';
C2.GastoMedio = 12.9;

const C3 = new Carro
C3.Marca = 'Ford';
C3.Modelo = 'Focus Titanium';
C3.Cor = 'Branco';
C3.GastoMedio = 6.7;

const C4 = new Carro
C4.Marca = 'Volkswagem';
C4.Modelo = 'Jetta';
C4.Cor = 'Preto';
C4.GastoMedio = 10.9;

function Consumo(C1,C2,C3,C4){
    let ConsumoComb1 = Combustivel * C1.GastoMedio;
    let ConsumoComb2 = Combustivel * C2.GastoMedio;
    let ConsumoComb3 = Combustivel * C3.GastoMedio;
    let ConsumoComb4 = Combustivel * C4.GastoMedio;

    return{
        C1: ConsumoComb1,
        C2: ConsumoComb1,
        C3: ConsumoComb1,
        C4: ConsumoComb1,
    }
}    


function ComparaConsumo(){

    const Consumos = Consumo(C1,C2,C3,C4);

    if(ConsumoComb1 > ConsumoComb2 && ConsumoComb1 > ConsumoComb2 && ConsumoComb1 > ConsumoComb4){
        console.log("O",C1.Modelo,"possuí um gasto maior de combustível ")
    }
    
}

(function (){

    console.log(Consumo(C1,C2,C3,C4))

})()