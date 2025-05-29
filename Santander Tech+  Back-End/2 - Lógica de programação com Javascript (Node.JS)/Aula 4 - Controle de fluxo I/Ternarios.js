const idade = 19;
const TemCNH = true;

const PodeDirigir = idade >= 18 && TemCNH;

if (PodeDirigir) {
    console.log('Pesso está habilitada para conduzir veículo.');

}
else {
    console.log('Pessoa não está habilitada para conduzir veículo.');
}

const NumeroDePassageiros = PodeDirigir ? 4 : 0; //ternario

/* let NumeroDePassageiros;

if (PodeDirigir) {
    NumeroDePassageiros = 4;
}
else {
    NumeroDePassageiros = 0;
} */

console.log(NumeroDePassageiros);