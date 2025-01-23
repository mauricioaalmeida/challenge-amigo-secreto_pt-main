//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// programador: Mauricio Andre de Almeida

// Criar um array para os amigos
let amigos = [];

// ### função para adicionar amigo 
// verificar se o nome do amigo já foi adicionado e se não está em branco
// limpar o campo de texto
// adicionar o nome do amigo no array
// atualizar a lista de amigos

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert('Digite o nome do amigo');
        return;
    }
    let amigoExiste = false;
    amigos.forEach((amigo) => {
        if (amigo == nomeAmigo) {
            alert('Amigo já adicionado');
            amigoExiste = true;
            document.querySelector('input').value = '';
            return;
        }
    });    
    if (amigoExiste) {
        return;
    } else {
        amigos.push(nomeAmigo);
        document.querySelector('input').value = '';
        atualizarAmigo();
    }

}

// ### função para atualizar a lista de amigos
function atualizarAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}
// ### função para sortear amigo
// Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
// Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
// Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
// Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

// TODO: remover o sorteado da lista de amigos

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos 2 amigos');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let listaSorteado = document.getElementById('resultado');
    listaSorteado.innerHTML = '';
    let itemLista = document.createElement('li');
    itemLista.textContent = amigoSorteado;
    listaSorteado.appendChild(itemLista);
    removerSorteado(amigoSorteado);
    atualizarAmigo();
}

function removerSorteado(amigoSorteado){
    
    let index = amigos.indexOf(amigoSorteado);
    if (index !== -1) {
        amigos.splice(index, 1);
    }
}