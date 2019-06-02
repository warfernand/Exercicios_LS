//Questão 10//

let frase = "Fernando Silva de Oliveira";

//Separando as palavras da frase.
let palavras = frase.split(" ");

//Contando a quantidade de palavras para controlar o for.
let cont = palavras.length;

let inverte = palavras.reverse();

let vetor = [cont];

for (k = 0 ;k < cont-1; k++){
    vetor[k] = palavras[k].charAt(0);    
}

vetor[cont-1] = palavras[cont-1]; 

console.log(vetor.join(". "))