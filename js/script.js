/*
Faz uma lista de TODO
Uma tabela Aonde vc tem um form e vc preenche os dados e joga na tabela e ela se atualiza

Vc edita o dado é ela se atualiza

Vc exclui o dado e ela se atualiza

Sem dar refresh na página
*/



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