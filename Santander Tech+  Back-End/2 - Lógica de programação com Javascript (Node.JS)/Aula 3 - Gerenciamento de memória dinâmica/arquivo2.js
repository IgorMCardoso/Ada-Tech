const numero1 = 10;
const numero2 = 30;
const numero3 = 2;
const numero4 = 3;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const elevado1 = numero3 ** numero4; //para fazer potencia, é necessário ter 2 asteriscos " ** " ou Math.pow(numero3, numero4)
const elevado2 = Math.pow(numero3, numero4); //biblioteca Math, função pow, que faz potenciação
const divisao2 = 3 / 2;
const restoDaDivisao2 = 3 % 2; //divisão inteira, ou seja, o resultado é um número inteiro, sem casas decimais

const numeroNegativo = -3;
const numeroAbsoluto = Math.abs(numeroNegativo); //Math.abs() retorna o valor absoluto de um número, ou seja, transforma o número negativo em positivo

console.log({ soma });
console.log({ subtracao });
console.log({ multiplicacao });
console.log({ divisao });
console.log({ elevado1 });
console.log({ elevado2 });
console.log({ divisao2 });
console.log({ restoDaDivisao2 });
console.log({ numeroNegativo });
console.log({ numeroAbsoluto });