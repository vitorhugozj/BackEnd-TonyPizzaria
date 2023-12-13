/*
* 
*/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();


const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE'
}

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')
    app.use(cors(cors))
    
    next()
})

// 1º EndPoint - A função retorna os dados do cliente desejado.
app.get('/cliente', cors(), async function(request, response, next){
    let nomeCliente = request.query.nome
    let listaClientes = require('./modulo/data')
    let cliente = listaClientes.getClientes(nomeCliente)
    
    if(cliente){
        response.status(200)
        response.json(cliente)
    }else {
        response.status(404)
        response.json('{erro: este item não foi encontrado ou não existe em nossas lista de categorias, verifique e tente novamente.}')
    }
})
// 2º EndPoint - A função retorna todas as categorias.
app.get('/categorias', cors(), async function(request, response, next){
    let listarCategorias = require('./modulo/data')
    let listaDeCategorias = listarCategorias.categoriasProdutos()

    if(listaDeCategorias){
        response.status(200)
        response.json(listaDeCategorias)
    }else {
        response.status(404)
        response.json('{erro: este item não foi encontrado ou não existe em nossas lista de categorias, verifique e tente novamente.}')
    }
})
// 3º EndPoint - A função retorna os comentários dos clientes
app.get('/comentarios', cors(), async function(request, response, next){
    let listarComentarios = require('./modulo/data')
    let listaDeComentarios = listarComentarios.getComentarioUsuarios()

    if(listaDeComentarios){
        response.status(200)
        response.json(listaDeComentarios)
    }else {
        response.status(404)
        response.json('{erro: este item não foi encontrado ou não existe em nossas lista de categorias, verifique e tente novamente.}')
    }
}) 

// 4º EndPoint - A função retorna todos os produtos da loja.
app.get('/produto/', cors(), async function(request, response, next){
    let estoqueProdutos = require('./modulo/data')
    let produtos = estoqueProdutos.getProdutos()

    if(produtos){
        response.status(200)
        response.json(produtos)
    }else {
        response.status(404)
        response.json('{erro: este item não foi encontrado ou não existe em nossas lista de categorias, verifique e tente novamente.}')
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log('servidor rodando!')
})
