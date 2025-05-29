const ListaDeNumeros = [25, 38, 71, 192, 333, 222, 10, 11, 62];
let IndiceDoNumero = 0;

const ListaDeNumerosPares = [];
const ListaDeNumerosImpares = [];

while (IndiceDoNumero < ListaDeNumeros.length) {

    if (ListaDeNumeros[IndiceDoNumero] % 2 === 0) {
        console.log(ListaDeNumeros[IndiceDoNumero], 'é par');
        ListaDeNumerosPares.push(ListaDeNumeros[IndiceDoNumero]);
        IndiceDoNumero++;
    }
    else {
        console.log(ListaDeNumeros[IndiceDoNumero], 'é ímpar');
        ListaDeNumerosImpares.push(ListaDeNumeros[IndiceDoNumero]);
        IndiceDoNumero++;
    }
}

console.log('Lista de números pares:', ListaDeNumerosPares);
console.log('Lista de números ímpares:', ListaDeNumerosImpares);