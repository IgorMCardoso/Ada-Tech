
// truthy: [], {}, número diferente de 0, string não vazia
// falsy: null, undefined, 0, NaN, '', false

// true
console.log(!![], !!{}, !!1, !!'programação', !false);

if ([] && {} && 1 && 'programação', !false) {
    console.log('Tudo é truthy!');
}

console.log('\n');

// false
console.log(!!null, !!undefined, !!0, !!NaN, !!'', !true);
if (!(null || undefined || 0 || NaN || '' || !true)) { //como era falsy, teve que tornar em true para imprimir
    console.log('Tudo é falsy!');
}

