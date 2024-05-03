/* Cree una función JS que acepte 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
Si es más pequeño, la consola registra "¡El número es menor que 50!" */


function Calculations (arg1, arg2, arg3, arg4) {
  let sumOne = arg1 + arg2;
  let sumTwo = arg3 + arg4;
  let result = sumOne * sumTwo;

  if (result > 50) {
      console.log('¡El número es mayor que 50!');
  } else {
      console.log('¡El número es menor que 50!');
  } 
}

Calculations (5, 3, 1, 2);