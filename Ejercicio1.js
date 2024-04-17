import { esEnteroPositivo } from './validacion.js';
import { validarTipo } from './tarjetas.js';

function validarTarjeta() {
    let numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
    if (!esEnteroPositivo(numeroTarjeta) || numeroTarjeta.length > 16) {
        alert("Error: Debe ingresar un número de tarjeta de crédito válido.");
        validarTarjeta();
    } else {
        let tipoTarjeta = validarTipo(numeroTarjeta);
        alert("El tipo de tarjeta de crédito ingresado es: " + tipoTarjeta);
    }
}

validarTarjeta();
