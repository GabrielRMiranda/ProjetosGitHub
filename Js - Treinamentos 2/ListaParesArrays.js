const lista = [0,1,2,3,4,5,6,7,8,9,10];

function par(){
    let pares  = [];
    for(let i=0;i<lista.length;i++){
        if(lista[i] % 2 == 0){
            pares.push(lista[i]);
        }
    }
    return pares;
}

function imprimePar(pares){
    for(let i=0;i<pares.length;i++){
        console.log(pares[i],"é par");
    }
}

(function (){

    const valoresPares = par();

    imprimePar(valoresPares);

})();