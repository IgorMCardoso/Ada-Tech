const ListaDeNumeros = [33, 131, 155, 555, 222, -21, -56];
const usuarios = ['José', 'Antônia'];

// Código imperativo
/* for (let contador = 0; contador < ListaDeNumeros.length; contador += 1){
    console.log(ListaDeNumeros[contador]);

} */

console.log('Print via while \n');
let indicedonumero = 0;
while (indicedonumero < ListaDeNumeros.length){
    console.log(ListaDeNumeros[indicedonumero]);
    indicedonumero++;

}

// Código declarativo
console.log('Print via for \n');
for (const numero of ListaDeNumeros){
    console.log(numero);

}

for (const usuario of usuarios){
    console.log(usuario);

}

