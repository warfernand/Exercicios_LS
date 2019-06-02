// Funções - questão 1//

let numero = 12345;

function inverte(numero){
    let str = numero.toString();
    return str.split('').reverse().join('');
}

let num = inverte(numero);

console.log('Numero invertido: ' + num);