//Questão 3//

let somaImpar = 0;
let somaPar   = 0;
for (k = 0;k <= 99;k++){
    if (k % 2 == 0){
        somaPar = somaPar + k;
    }
    else{
        somaImpar = somaImpar + k;
    }
}

console.log('Soma dos números pares: ' + somaPar);
console.log('Soma dos números impares: ' + somaImpar);