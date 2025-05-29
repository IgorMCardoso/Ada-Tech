const user = {
    name: 'JoSÉ mARIa SOUSA santos',
    email: 'JOSE,M1@gmail.com',
    age: 23,
    adress: 'X street',

};

// Quando devo usar for... of? Quando for manipular arrays
// Quando devo usar for...in? Quando for manipular objetos

const numeros = [11, 352, 14125];
numeros[200] = 321;

// Na prática, evitem ao máximo de utilizar for in com arrays
for (const key in numeros){
    console.log(key);

}

/* for (const key in user){
    // console.log(user[key]);
    if (key === 'name'){
        const names = user[key].split(' ');
        user[key] = '';
        for (const name of names){
            const normalizedName = name.toLowerCase();
            const [primeiraLetra, ...restoDoNome] = normalizedName; //rest operator

            console.log(primeiraLetra);
            console.log(restoDoNome);

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('');
            user[key] = user[key].trim();
            console.log(user[key]);
        }

        // user[key] = user[key].toLowerCase(); // transforma toda a string em caracteres minusculos
        //user[key] = 'novo valor';
    }
    if (key === 'email'){
        user[key] = user[key].toLowerCase();
    }
}
 */
// console.log(user);