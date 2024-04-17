function ordenarNumeros(...numeros) {
    return numeros.sort((a, b) => b - a);
}

function main() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numero);
    }
    let numerosOrdenados = ordenarNumeros(...numeros);
    console.log("Números ordenados de mayor a menor:");
    console.table(numerosOrdenados);
}

main();
