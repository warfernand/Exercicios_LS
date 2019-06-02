//Questão 4//

const quantidade = 5;

Alunos = [['Aluno1',[10,40,70]],['Aluno2',[90,70,40]],['Aluno3',[100,50,80]],['Aluno4',[100,30,80]],['Aluno5',[100,90,80]]];

let soma = 0;
let media = 0;

for (k = 0;k < quantidade ;k++){
    for (z = 0;z < 3; z++){
        soma = soma + Alunos[k][1][z];
    }
    media = soma/3;
    if(media >= 70){
        console.log(Alunos[k][0] + ', ' + 'média ' + media.toFixed(1) + ', ' + 'Aprovado');
    }
    else{
        console.log(Alunos[k][0] + ', ' + 'média ' + media.toFixed(1) + ', ' + 'Reprovado');
    }
    soma = 0;
}