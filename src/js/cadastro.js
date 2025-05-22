var formProduto = document.getElementById('form-produto');

function cadastrarProduto(event) {
    
    event.preventDefault();

    var produto = document.getElementById('nome-produto').value;
    var quantidade = document.getElementById('quantidade-produto').value

    console.log(produto + " " + quantidade);
}

formProduto.addEventListener('submit', cadastrarProduto);