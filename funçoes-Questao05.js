//Questão 5//

let frase = 'Vamos encotrar a maior palavra desta frase maravilhosa';

function maiorPalavra(frase){
    let vet = frase.split(' ');
    let maior = vet[0].length;
    let palavra = vet[0];
    for (let k = 0; k < vet.length; k++) {
        if(vet[k].length > maior){
            maior = vet[k].length;
            palavra = vet[k];
        }
    }
    return palavra;
}

console.log('A maior palavra é: ' + maiorPalavra(frase));