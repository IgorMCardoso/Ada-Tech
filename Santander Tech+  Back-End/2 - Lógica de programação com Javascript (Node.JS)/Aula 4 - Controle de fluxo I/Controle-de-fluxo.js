const numero1 = 200;
const numero2 = 200;
const numero3 = '200';

if (numero1 > 1){
    console.log('Este número é maior que 1');
} if (numero1 > 200){
    console.log('Este número é maior que 200');
} else {
    console.log('Este número é menor ou igual que 200');
}

if (numero2 <= numero1){

    console.log(`${numero2} é menor ou igual a ${numero1}`);

}
    console.log('${numero2} é menor que ${numero1}');
if (numero1 === numero2){
    console.log('Os números são iguais em valor e tipo'); // Compara o tipo da variável e seus valores
}

if (numero1 == numero3){
    console.log('Os números são iguais em valor apenas (podem ter ocorrido coerções implicitas)'); // Esse não aparece porque os tipos de variável são diferentes.
}