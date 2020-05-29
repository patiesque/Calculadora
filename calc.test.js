const calculadora = require("./calc");

describe("calculadora", () => {
    
    describe("soma", () => {
        it("retorna 3 quando 2 somado com 1", () => {
            const num1 = 2;
            const num2 = 1;
            expect(calculadora.soma(num1, num2)).toBe(3);
        })
    })

    describe("subtração", () => {
        it("retorna 1 quando 1 subtraio de 2 ", () => {
            const num1 = 2;
            const num2 = 1;
            expect(calculadora.subtracao(num1, num2)).toBe(1)
        })
    })
})