import Calculadora from './calculadora.js';

try {
    console.log("Suma:", Calculadora.suma(5, 3));
    console.log("Resta:", Calculadora.resta(5, 3));
    console.log("Multiplicación:", Calculadora.multiplicacion(5, 3));
    console.log("División:", Calculadora.division(5, 0));
} catch (error) {
    console.error("Error:", error.message);
}
