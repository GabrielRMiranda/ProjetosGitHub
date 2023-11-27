const Aluno = ['Gabriel','Arthur','Apolo'];
Aluno.push('Rafael');
Aluno[4] = 'Laiza';


const Nota = [];
const media = 3;
let i = 0;
let soma = 0;

Nota.push(68);
Nota.push(92);
Nota.push(100);

for(i=0;i<Nota.length;i++){
    const total = Nota[i];
    soma+=total;
}

let mediaFinal = soma/media;

console.log(mediaFinal.toFixed(2));

