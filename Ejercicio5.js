import {Calculadora} from './calculadora.js';
const calculadora = new Calculadora();
try {
    console.log("Suma:", calculadora.suma(5, 3));
    console.log("Resta:", calculadora.resta(5, 3));
    console.log("Multiplicación:", calculadora.multiplicacion(5, 3));
    console.log("División:", calculadora.division(5,6 ));
} catch (error) {
    console.error("Error:", error.message);
}
