let modal = document.querySelector('.modal');
let button = document.createElement('button');
button.innerHTML = 'Voltar';

class Lista {
    constructor(descricao, tipo, ano, mes, dia) {
        this.descricao = descricao;
        this.tipo = tipo;
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id');

        if(id === null) {
            id = localStorage.setItem('id', 0);
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(l) {
        let id = this.getProximoId();

        localStorage.setItem(id, JSON.stringify(l));

        localStorage.setItem('id', id);
    }

    recuperarLista() {
        localStorage.getItem();
    }
}

let bd = new Bd();

function cadastrarItem() {
    let descricao = document.getElementById('descricao');
    let tipo = document.getElementById('tipo');
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');

    let lista = new Lista(
        descricao.value,
        tipo.value,
        ano.value,
        mes.value,
        dia.value
    );

    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    if(descricao.value !== '' && tipo.value !== '' && ano.value !== '' && mes.value !== '' && dia.value !== '') {
        bd.gravar(lista);
        console.log(lista);

        descricao.value = '';
        tipo.value = '';
        ano.value = '';
        mes.value = '';
        dia.value = '';

        modal.style.display = 'block';
        modal.innerHTML = '<h2>Item cadastrado com sucesso.</h2>';
        modal.style.background = 'green';
        button.className = 'btn btn-success';
        modal.appendChild(button);

        
    } else {
        modal.style.display = 'block';
        modal.innerHTML = '<h3>Algo deu errado!</h3> <p>Verifique se todos os campos foram preenchidos.</p>';
        modal.style.background = 'red';
        button.className = 'btn btn-danger';
        modal.appendChild(button);

    }
}


function carregarLista() {
    bd.recuperarLista();
    // faltar fazer a lógica para carregar a lista na página de consulta
}




















/* CÓDIGO ANTIGO

let listaTodos = Array()
listaTodos = []

console.log(listaTodos)

// Adiciona um item na lista
function inserirDado() {
    let dadoNovo = document.querySelector('#campo').value
    let lista = document.querySelector('#lista')
    lista.classList.add('list-group')
    let listaAtualizada = listaTodos
    listaAtualizada.push(dadoNovo)

    let openModal = document.querySelector('#modalErro')

    if (dadoNovo === '') {
        openModal.style.display = 'block'
        document.querySelector('body').style.background = 'rgb(113, 113, 113)'
    }
    else {
        lista.classList.add('list-group-item')
        lista.classList.add('text-center')
        lista.classList.add('bg-primary')
        lista.innerHTML += '<li>' + dadoNovo + '</li>'
        console.log(listaAtualizada)
    }

    document.querySelector('#campo').value = ''
}


// remove item da lista
function removerDado() {
    let lista = document.querySelector('#lista li')
    let listaAtualizada = listaTodos
    
    listaAtualizada.pop()
    lista.parentNode.removeChild(lista)

    console.log(listaAtualizada)
}


// fechar modal
function closeModal() {
    let modal = document.querySelector('#modalErro')
    modal.style.display = 'none'
    document.querySelector('body').style.background = 'white'
}
*/