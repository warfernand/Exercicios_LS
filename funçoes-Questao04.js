//Questão 4//

let frase = 'Vamos encontrar uma palavra';
let palavra = 'encontrar';

function pesquisar(frase, palavra){
    let pes = frase.search(palavra);
    if (pes >= 0){
        return 1;
    }
    else{
        return 0;
    }
}

if (pesquisar(frase,palavra) == 1){
    console.log("Está presente");
}
else{
    console.log("Não está presente");
}