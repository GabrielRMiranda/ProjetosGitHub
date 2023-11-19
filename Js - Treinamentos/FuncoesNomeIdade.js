function Name(nome){
    return nome
}

function Age(idade){
    return idade
}

function ValidaIdade(idade){
    if(idade >= 18){
        return "maior de idade!"
    } else{
        return "menor de idade!";
    }
}

(function (){
    let nome = "Gabriel Rios Miranda"
    let idade = 21

    console.log("O usuário " + Name(nome) + " possuí " + Age(idade) + " e é " + ValidaIdade(idade))

})()
