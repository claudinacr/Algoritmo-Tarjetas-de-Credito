var numTargetCredit = prompt("Ingrese el numero de su tarjeta de credito: ");
//var numTargetCredit = 4716231974972307;
var numTargetCreditInArray = Array.from(numTargetCredit);

function isValidCard(numTargetCreditInArray){

  var arrFinal  = []; //Declaramos un array donde van los numeros finales para validar suma total
  if (numTargetCreditInArray !== []){
    var arrRev = numTargetCreditInArray.reverse();
    for(var i =0; i<arrRev.length ; i++){
      
      if(i % 2 !== 0){ /* Condicion para separar las posiciones 
                          pares e impares*/
      
        var mulpt = parseInt(numTargetCreditInArray[i])*2;
        // Multiplicamos el numero en la posicion par
        
        
        if (mulpt => 10){ /* Si el numero es de dos digitos se reduce a uno 
          de un solo digito sumando su cifras*/

          arr = Array.from(mulpt.toString());
          sum = 0;
          for(j =0;j< arr.length; j++){
               sum += parseInt(arr[j]);
          }
          //arrNumPar.push(sum);
          arrFinal.push(sum); // Añadimos al array Final
        } else
          //arrNumPar.push(mulpt); 
          arrFinal.push(mulpt); //Si la multiplicacion no da simbolo de 2 cifras
      } else{ // Si es de posicion Impar,se añade directamente el numero
        //arrNumImpar.push(parseInt(numTargetCreditInArray[i]));
        arrFinal.push(parseInt(numTargetCreditInArray[i])); 
        
      }
    }

    // 
    //if(arrNumImpar.length < arrNumPar.length) arrNumImpar.push(0);
    //else if(arrNumImpar.length > arrNumPar.length) arrNumPar.push(0);
    
    //console.log(arrNumPar); 
    //console.log(arrNumImpar);
    //console.log(arrFinal);
    
    total = 0;
    for(i = 0; i < arrFinal.length ; i++){ // Se realiza la sumatoria de los numeros
      total += arrFinal[i];
    }
    //console.log (total);
    
    
    output = total % 10 === 0 ? "Tarjeta Valida": "Tarjeta Invalida";
    // y si el modulo de 10 de la sumatoria total es igual a 0, es un numero Valido de Tarjeta
    //si el modulo de 10 de la sumatoria total es distinto a 0, el numero es Invalido
    
    return output;
    
    
  } else{ // si el usuario ingresa otra cosa que no sea un numero
    return ("No debe poder ingresar un campo vacío");
  }
  
  
}

alert(isValidCard(numTargetCreditInArray));

