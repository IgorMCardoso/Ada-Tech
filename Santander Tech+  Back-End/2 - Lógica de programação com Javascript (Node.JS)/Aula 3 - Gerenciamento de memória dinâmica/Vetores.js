// const aluno1 = 'Joana';
// const aluno2 = 'Cássia';
// const aluno3 = 'Kevin';
const NumerosPrimos = [1, 2, 3, 5, 7];

{ //Isso é um escopo de bloco, não é necessário, mas é uma boa prática para evitar conflitos de variáveis
    const NomeDeAlunos = ['Joana', 'Cássia', 'Kevin'];
    console.log(NomeDeAlunos);
    {
        const CondicoesDeTempo = ['Chuvoso', 'Ensolarado', 'Sol entre nuvens'];
        console.log(CondicoesDeTempo);
    }

}

console.log(NumerosPrimos);