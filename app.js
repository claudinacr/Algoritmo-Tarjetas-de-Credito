let numTarjetCredit = prompt('Ingrese el numero de su tarjeta de credito: ');
// var numTarjetCredit = 4716231974972307;
let numTarjetCreditInArray = Array.from(numTarjetCredit);

/**
 * @param {Array} numTarjetCreditInArray
 * @return {String} string
 * Función que ingresas el numero de tarjeta de credito en forma de array
 * y así verificar  su validez
 */
function isValidCard(numTarjetCreditInArray) {
  // Declaramos un array donde van los numeros finales para validar suma total
  let arrFinal = [];
  let arr;
  let sum;
  let output;
  let total;
  if (numTarjetCreditInArray !== []) {
    let arrRev = numTarjetCreditInArray.reverse();
    for (let i = 0; i<arrRev.length; i++) {
      if (i % 2 !== 0) {/* Condicion para separar las posiciones
        pares e impares*/
        let mulpt = parseInt(numTarjetCreditInArray[i])*2;
        // Multiplicamos el numero en la posicion par


        if ((mulpt) => 10) {/* Si el numero es de dos digitos se reduce a uno
          de un solo digito sumando su cifras*/
          arr = Array.from(mulpt.toString());
          sum = 0;
          for (let j =0; j< arr.length; j++) {
            sum += parseInt(arr[j]);
          }
          // arrNumPar.push(sum);
          arrFinal.push(sum); // Añadimos al array Final
        } else {
          arrFinal.push(mulpt);
        } // Si la multiplicacion no da simbolo de 2 cifras
      } else { // Si es de posicion Impar,se añade directamente el numero
        // arrNumImpar.push(parseInt(numTarjetCreditInArray[i]));
        arrFinal.push(parseInt(numTarjetCreditInArray[i]));
      }
    }
    total = 0;
    // Se realiza la sumatoria de los numeros
    for (let i = 0; i < arrFinal.length; i++) { 
      total += arrFinal[i];
    }
    // console.log (total);


    output = total % 10 === 0 ? 'Tarjeta Valida': 'Tarjeta Invalida';
    // y si el modulo de 10 de la sumatoria total es igual a 0,
    // es un numero Valido de Tarjeta
    // si el modulo de 10 de la sumatoria total es distinto a 0,
    // el numero es Invalido
    return output;
  } else { // si el usuario ingresa otra cosa que no sea un numero
    return ('No debe poder ingresar un campo vacío');
  }
}

alert(isValidCard(numTarjetCreditInArray));

