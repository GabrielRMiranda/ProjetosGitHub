const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculaTabuada() {
    let resultado = [];
    for (let i = 0; i < tabuada.length; i++) {
        let tabuadaAtt = [];
        for (let index = 1; index <= 10; index++) {
            tabuadaAtt.push(tabuada[i] * index);
        }
        resultado.push(tabuadaAtt);
    }
    return resultado;
}

function imprimeTabuada(resultado) {
    for (let i = 0; i < resultado.length; i++) {
        for (let index = 0; index < 10; index++) {
            console.log(tabuada[i], '*', index + 1, '=', resultado[i][index],"\n");
        }
    }
}

(function () {
    const tabuadaResultado = calculaTabuada();
    imprimeTabuada(tabuadaResultado);
})();
