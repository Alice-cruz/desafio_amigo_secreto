//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(nome) {
    let nomeAmigo = document.querySelector('input').value.trim();
    while (nomeAmigo === '') {
            alert('Por favor, digite um nome.');
            return;
        }
    amigos.push(nomeAmigo);
    limparInput();
    listarAmigos();


}

function limparInput() {
    document.querySelector('input').value = '';
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let itemNome = 0; itemNome < amigos.length; itemNome++) {
        let item = document.createElement('li');
        item.textContent = amigos[itemNome];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('adicione mais amigos');
        return;
    }
    let indice = indexSorteado();
    let nome = amigos[indice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${nome}`;

}

function indexSorteado() {
    let indice = Math.random() * amigos.length;
    return Math.floor(indice);
}