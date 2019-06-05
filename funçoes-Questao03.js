//Questão 3//

let lista = [25,10,15,2,90,3];

function Maior_menor(lista){
    let maior = lista[0];
    let menor = lista[0];

    for (let k = 0; k < 6; k++) {
        if (lista[k] > maior){
            maior = lista[k];
        }
        else if (lista[k] < menor){
            menor = lista[k];
        }   
    }
    let vet = [2];
    vet[0] = maior;
    vet[1] = menor;

    return vet;
}
let num = Maior_menor(lista);
console.log('Maior número: ' + num[0] + ' e Menor Número: ' + num[1]);