import { solicitarNumeros, solicitarOperacion } from './entradaDatos.js';
import { contarNumerosPrimos, promedioNumerosPrimos } from './numerosPrimos.js';
import { contarNumerosPares, promedioNumerosPares } from './numerosPares.js';
// 2. Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:
// a. Sumar los números
// b. Contar los números primos
// c. Contar los números pares
// d. Calcular el promedio de los números primos
// e. Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos.
function main() {
    let numeros = solicitarNumeros();
    let operacion = solicitarOperacion();

    switch (operacion) {
        case 'a':
            console.log("La suma de los números es:", numeros.reduce((a, b) => a + b, 0));
            break;
        case 'b':
            console.log("La cantidad de números primos es:", contarNumerosPrimos(numeros));
            break;
        case 'c':
            console.log("La cantidad de números pares es:", contarNumerosPares(numeros));
            break;
        case 'd':
            console.log("El promedio de los números primos es:", promedioNumerosPrimos(numeros));
            break;
        case 'e':
            console.log("El promedio de números pares es:", promedioNumerosPares(numeros));
            break;
        default:
            console.log("Operación no válida.");
    }
}

main();
