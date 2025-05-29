const ListaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca'];
// const ListaDeContatos2 = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Josué', 'Natália', 'Bianca'];

let IndiceDoUsuario = 0;

/* Solução 1

let EncontrouUsuário = false;
while (!EncontrouUsuário && !AtingiuFimDaLista) {
    const UsuarioAtual = ListaDeContatos[IndiceDoUsuario];
    if (UsuarioAtual.startsWith('Z')){
        EncontrouUsuário = true;
        console.log(`Usuário encontrado : ${UsuarioAtual}`);
    }
    IndiceDoUsuario++;
    if (IndiceDoUsuario == ListaDeContatos.length){
        console.log('Usuário não foi encontrado.');
        AtingiuFimDaLista = true;
    }

} */

/* Solução 2
     while (true) {
    const UsuarioAtual = ListaDeContatos[IndiceDoUsuario];
    if (UsuarioAtual.startsWith('Z')){
        console.log(`Usuário encontrado: ${UsuarioAtual}`);
        break;
    }
    IndiceDoUsuario++;
    if (IndiceDoUsuario == ListaDeContatos.length){
        console.log('Usuário não foi encontrado.');
        break;
    }

} */

// Solução 3

let EncontrouUsuárioOuPercorreuLista = false;
while (!EncontrouUsuárioOuPercorreuLista) {
    const UsuarioAtual = ListaDeContatos[IndiceDoUsuario];
    if (UsuarioAtual.startsWith('Z')){
        EncontrouUsuárioOuPercorreuLista = true;
        console.log(`Usuário encontrado: ${UsuarioAtual}`);
    }
    IndiceDoUsuario++;
    if (IndiceDoUsuario == ListaDeContatos.length){
        console.log('Usuário não foi encontrado.');
        EncontrouUsuárioOuPercorreuLista = true;
    }

}
