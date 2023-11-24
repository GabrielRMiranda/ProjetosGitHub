class Pessoa{
    nome;
    idade;
    altura;
    peso;

    descreve(){
        console.log("Nome:",this.nome,"Idade:",this.idade,"Altura:",this.altura,"Peso:",this.altura)
    }
}

const U1 = new Pessoa;
U1.nome = `Gabriel Miranda`;
U1.idade = 21;
U1.altura = 1.71;
U1.peso =  81.7;

const U2 = new Pessoa;
U2.nome = `Rafael Miranda`;
U2.idade = 16;
U2.altura = 1.68;
U2.peso =  65.7;

function ComparaPessoas(U1, U2){
    if(U1.idade > U2.idade){
        console.log("O",U1.nome,"é mais velho e possuí",U1.idade - U2.idade,"anos a mais!");
    } else if (U2.idade > U1.idade){
        console.log("O",U2.nome,"é mais velho e possuí",U2.idade,"anos!");
    } else{
        console.log("Ambos possuem a mesma idade!")
    }
}

(function (){

ComparaPessoas(U1,U2);

})()
