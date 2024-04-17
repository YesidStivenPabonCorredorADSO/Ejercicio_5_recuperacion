function encontrarPalabraMasLarga(...palabras) {
    let palabraMasLarga = "";
    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
}
function main() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de palabras que desea ingresar:"));
    let palabras = [];
    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Ingrese la palabra " + (i + 1) + ":");
        palabras.push(palabra);
    }
    let palabraMasLarga = encontrarPalabraMasLarga(...palabras);
    console.log("La palabra más larga ingresada es:", palabraMasLarga);
}
main();
