const animal = {
    especie: 'Canis Lupus',
    habitatcomum: 'Florestas dos EUA',
    expectativaDeVida: 20,
    ehTerrestre: true,
};

/* const especieDoAnimalDoAnimal1 = 'Canis Lupus';
const habitatcomumDoAnimal1 = 'Florestas dos EUA';
const expectativaDeVidaDoAnimal1 = 20;
const ehTerrestreDoAnimal1 = true; */

// console.log(animal.ehTerrestre);
console.log(animal['ehTerrestre']);
console.log(animal.especie);
console.log(animal.populacao);

animal.populacao = 600_000_000;
// animal.populacao = 6 * 10 ** 9;

console.log(animal);