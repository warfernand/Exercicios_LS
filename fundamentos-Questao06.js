//Questão 6//

let lista = [12,2,2,2,3,4,5,7];
var total = lista.length;
var contmaior = 0;
var maiorrepeticao = 0;
for(var k=0;k<total; k++){
    var cont = 0;
    for(var p=0; p<total; p++){
    if(lista[k] == lista[p]){
        cont++;
    }    
    }
    if(cont>contmaior){
        contmaior = cont;
        maiorrepeticao = lista[k];
    }
}
console.log(maiorrepeticao);