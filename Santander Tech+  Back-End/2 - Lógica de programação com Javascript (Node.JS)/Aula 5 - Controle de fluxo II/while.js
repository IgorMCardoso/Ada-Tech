const nomesDeUsuario = ['Joana', 'Renata', 'Cleber', 'Zeca'];

/* console.log('Olá', nomesDeUsuario[0]);
console.log('Olá', nomesDeUsuario[1]);
console.log('Olá', nomesDeUsuario[2]);
console.log('Olá', nomesDeUsuario[3]); */

if (10 > 1){
console.log('10 maior que 1');

}

let IndiceDoUsuario = 0;
/* const IndiceAual = nomesDeUsuario.length */;

while (IndiceDoUsuario < nomesDeUsuario.length) {
    console.log('Olá', nomesDeUsuario[IndiceDoUsuario]);
    IndiceDoUsuario++;
    // ou IndiceDoUsuario += 1;
}
