//Questão 2//

function vogaisEConsoantes(frase){
    let fraseSemEspaco = frase.split(' ').join('');
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let numVogais = 0;
    let numConsoantes = 0;

    for(let i = 0; i < fraseSemEspaco.length; i++){
        let letra = fraseSemEspaco.charAt(i).toLowerCase();

        if(vogais.includes(letra)){
            numVogais++;
        }else{
            numConsoantes++;
        }
    }

    let retorno = "A String possui " + numVogais + " vogais e " + numConsoantes + " consoantes.";

    return retorno;
}

var frase = "Ola novo mundo eae";

console.log(vogaisEConsoantes(frase));