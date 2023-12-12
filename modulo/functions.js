const info = require('./data')

const getClientes = function(nomeCliente) {

    const clienteJSON = {}
    
    let nomeCliente = nomeCliente.toLowerCase()
    let status = false

    info.clientes.data.forEach(clientes => {
        if(nomeCliente == clientes.nome.toLowerCase()){
            clienteJSON.id = clientes.id
            clienteJSON.nome = clientes.nome
            clienteJSON.image = clientes.image
            clienteJSON.email = clientes.email
            clienteJSON.telefone = clientes.telefone
            clienteJSON.endereço = clientes.endereco

            status = true
        }
    })
    if(status == true){
        return jsonCliente
    }else{
        return false
    }
}

const getCategoriaProdutos = function() {
    const listaDeCategorias = []
    const categoriasJSON = {}

    let status = false

    info.categoriasProdutos.forEach(categoriasProdutos => {
        listaDeCategorias.push(categoriasProdutos)
        status = true
    })
    
    categoriasJSON.categoriasProdutos = categoriasProdutos

    if(status == true){
        return categoriasJSON
    }else{
        return false
    }
}

const getProdutos = function(estoqueProdutos) {
    const listaDeProdutos = estoqueProdutos.toLowerCase()
    const produtosJSON = {}
    let status = false

    info.produtos.data.forEach(produtos =>{
        if(listaDeProdutos == produtos.titulo.toLowerCase()){
            produtosJSON.id = produtos.id
            produtosJSON.titulo = produtos.titulo
            produtosJSON.descricao = produtos.descricao
            produtosJSON.preco = produtos.preco
            produtosJSON.imagem = produtos.imagem
            produtosJSON.categoria = produtos.categoria
            produtosJSON.qtd_estrela = produtos.qtd_estrela
            
            status = true
        }
    })
    if(status == true){
        console.log(produtosJSON)
        return produtosJSON
    }else {
        return false
    }
}

const getComentarioUsuarios = function(){
    const comentarioARRAY = []
    const comentarioJSON = {}
    let status = false

    info.comentarioUsuario.data.forEach(comentarioUsuarios => {
        comentarioARRAY.push(comentarioUsuarios)
        status = true 
    })
    comentarioJSON.data = comentarioARRAY

    if(status == true){
        console.log(comentarioJSON)
        return comentarioJSON
    }else {
        return false
    }
}
console.log(getProdutos())
console.log(getComentarioUsuarios())
console.log(getCategoriaProdutos());
console.log(getClientes())