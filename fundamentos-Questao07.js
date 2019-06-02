//Questão 7//

let frase = "Testando esta aplicação java";

//Separando as palavras da frase.
let palavras = frase.split(" ");

//Contando a quantidade de palavras para controlar o for.
let cont = palavras.length;

let vet = [cont-1];

for (k = 0 ;k < cont; k++){
    if(palavras[k].length < 5){
        vet[k] = palavras[k].toUpperCase();  //Transformando em MAIUSCULO.
    }
    else{
        vet[k] = palavras[k].toLowerCase();  //Transformando em menusculo.
    } 
}

console.log(vet.join(" "));