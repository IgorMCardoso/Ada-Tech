//const ListaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca'];
// const ListaDeContatos2 = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Josué', 'Natália', 'Bianca'];
const ListaDeContatos = [];

let IndiceDoUsuario = 0;
let EncontrouUsuárioOuPercorreuLista = false;

do {
    const UsuarioAtual = ListaDeContatos[IndiceDoUsuario];
    if (UsuarioAtual && UsuarioAtual.startsWith('Z')){
        EncontrouUsuárioOuPercorreuLista = true;
        console.log(`Usuário encontrado: ${UsuarioAtual}`);
    }
    IndiceDoUsuario++;
    if (IndiceDoUsuario == ListaDeContatos.length){
        console.log('Usuário não foi encontrado.');
        EncontrouUsuárioOuPercorreuLista = true;
    }

} while (!EncontrouUsuárioOuPercorreuLista);

// Não era nem para executar, pois o while é falso. Mas como é do-while, ele executa pelo menos uma vez.
do {
    const UsuarioAtual = ListaDeContatos[IndiceDoUsuario];
    if (UsuarioAtual && UsuarioAtual.startsWith('Z')){
        EncontrouUsuárioOuPercorreuLista = true;
        console.log(`Usuário encontrado: ${UsuarioAtual}`);
    }
    IndiceDoUsuario++;
    if (IndiceDoUsuario >= ListaDeContatos.length){
        console.log('Usuário não foi encontrado.');
        EncontrouUsuárioOuPercorreuLista = true;
    }

} while (false);
