//Questão 9//

let frase = "Testando esta aplicação java";

//Separando as palavras da frase.
let palavras = frase.split(" ");

//Contando a quantidade de palavras para controlar o for.
let cont = palavras.length;

let soma = 0;

for (k = 0 ;k < cont; k++){
    soma = soma + palavras[k].length;
}

console.log("Soma dos tamanhos das palavras da frase: " + soma);