//Questão 1//

var data = new Date();        
var dia_semana = data.getDay();            
       
switch(dia_semana){
    case 0: console.log("Hoje é: domingo");
        break; 
    case 1: console.log("Hoje é: segunda-feira");
        break;
    case 2: console.log("Hoje é: terça-feira");
        break; 
    case 3: console.log("Hoje é: quarta-feira");
        break; 
    case 4: console.log("Hoje é: quinta-feira");
        break; 
    case 5: console.log("Hoje é: sexta-feira");
        break;
    case 6: console.log("Hoje é: sábado");
        break;
    default:;
}

//Criando data e hora.

var data = new Date();
     
var hora    = data.getHours();          
var min     = data.getMinutes();        
var seg     = data.getSeconds();        


var horario = 'Hora atual: ' + hora + ':' + min + ':' + seg;

console.log(horario);