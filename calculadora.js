class Calculadora {
    static validarOperandos(...operandos) {
        for (let operando of operandos) {
            if (typeof operando !== 'number' || isNaN(operando)) {
                throw new Error(`"${operando}" no es un número válido.`);
            }
        }
    }
    static suma(a, b) {
        this.validarOperandos(a, b);
        return a + b;
    }
    static resta(a, b) {
        this.validarOperandos(a, b);
        return a - b;
    }
    static multiplicacion(a, b) {
        this.validarOperandos(a, b);
        return a * b;
    }
    static division(a, b) {
        this.validarOperandos(a, b);
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }
}
export default Calculadora;
