if (true){
    console.log('Sempre aparecerei.');
}

if (false){
    console.log('Nunca aparecerei.');
}

// or: ||
// and: &&
// not: !

// Expressões com ou sempre retornam verdadeiro, a menos que TODAS  as expressões sejam falsas
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(1 < -20 || 100 < 5 || 20 > 50 || 40 > 3000 || 30 > 10);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
