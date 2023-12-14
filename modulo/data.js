const { json } = require('sequelize')

var clientes = {
    data:
    [
        {
            id: '764',
            nome: 'Roberto Carlos',
            email: 'rrCarlos@email.com',
            senha: 'rrCa1',
            telefone: '(11) 92265-4473',
            endereco: 
                        [
                            {
                                logradouro: 'Rua José Martins Lisboa, Bairro do Tucuruvi',
                                cidade: 'São Paulo - SP',
                                complemento: 'Casa'
                            },
                            {
                                logradouro: 'Rua Soldado José Vivanco Solano, Jardim Figueira',
                                cidade: 'Guarulhos - SP',
                                complemento: 'Casa'
                            }
                        ]
        },
        {
            id: '156',
            nome: 'Paloma Vessoleck' ,
            email: 'vessoleckpah@email.com' ,
            senha: 'cacaulinda10' ,
            telefone: '(11) 93673-4778',
            endereco: 
                        [
                            {
                                logradouro: 'Rua José Francisco do Nascimento, Jardim Moacyr Arruda',
                                cidade: 'Indaiatuba - SP',
                                complemento: 'Casa'
                            },
                            {
                                logradouro: 'Rua Pedro Avondano, Vila Carrão', 
                                cidade: 'São Paulo - SP',
                                complemento: 'Casa'
                            }
                        ]
        },
        {
            id: '544',
            nome: 'Guilherme Abel' ,
            email: 'guiguiEM@email.com' ,
            senha: 'eusebiomangueira123' ,
            telefone: '(18) 93269-4538',
            endereco: 
                        [
                            {
                                logradouro: 'Rua Otoniel da Silva Jordão, Vila Faut',
                                cidade: 'Tupã - SP',
                                complemento: 'Casa'
                            },
                            {
                                logradouro: 'Rua Paulo Roberto Duarte Bastos, Vila Mariana', 
                                cidade: 'Ferraz de Vasconcelos - SP',
                                complemento: 'Casa'
                            }
                        ]

        },
        {
            id: '724',
            nome: 'Pedro Pedraga' ,
            email: 'pedrinhofofo@email.com' ,
            senha: 'pedrinhopedraga20' ,
            telefone: '(13) 93550-0885',
            endereco:  
                        [
                            {
                                logradouro: 'Rua Dona Taísa, Vila de São Fernando',
                                cidade: 'Cotia - SP',
                                complemento: 'Casa'
                            },
                            {
                                logradouro: 'Rua Joanésia, Granja Viana', 
                                cidade: 'Cotia - SP',
                                complemento: 'Casa'
                            }
                        ]
        },
        {
            id: '811',
            nome: 'Gustavo Campos' ,
            email: 'gcampos@email.com' ,
            senha: 'suco1004' ,
            telefone: '(17) 93776-8202',
            endereco: 
                        [
                            {
                                logradouro: 'Estrada do Ikeda, Jardim Ikeda',
                                cidade: 'Suzano - SP',
                                complemento: 'Casa'
                            },
                            {
                                logradouro: 'Rua José Faria, Jardim Sinki', 
                                cidade: 'Franco da Rocha - SP',
                                complemento: 'Casa'
                            }
                        ]
        },
    ]
}
var categoriasProdutos = [

    {id: 1, Liquidos: 'Bebidas', image_categoria: './img/icone-bebidas'},
    {id: 2, Salgados: 'Pizza Salgada', image_categoria: './img/icone-pizzasalgada'},
    {id: 3, Doces: 'Pizza Doce', image_categoria: './img/icone-pizzadoce'},
    {id: 4, Sobremesas: 'Doces', image_categoria: './img/icone-doces'}

]
var produtos = {
    data: [ 
      {
        id: '1',
        titulo: 'Pizza de Calabresa com Queijo',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: 'R$ 16,00',
        imagem: './img/4queijos',
        categoria: categorias[1],
        qtd_estrela: 5
      },
      {
        id: '2',
        titulo: 'Pizza de Pepperoni com Queijo e Tomate',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: 'R$ 19,00',
        imagem: './img/pepperoni',
        categoria: categorias[1],
        qtd_estrela: 5
      },
      {
        id: '3',
        titulo: 'Coca-Cola 2 Litros',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: 'R$ 14,99',
        imagem: './img/',
        categoria: categorias[0],
        qtd_estrela: 5
      },
      {
        id: '4',
        titulo: 'Pizza de Chocolate com Morango',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: 'R$ 42,00',
        imagem: './img/',
        categoria: categorias[2],
        qtd_estrela: 5
      },
      {
        id: '5',
        titulo: 'Brownie com Creme de Ninho',
        imagem: './img/',
        preco: 'R$ 16,00',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        categoria: categorias[3],
        qtd_estrela: 5
      },
      {
        id: '6',
        titulo: 'Cerveja Heineken',
        imagem: './img/',
        preco: 'R$ 16,00',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        categoria: categorias[3],
        qtd_estrela: 5
      },
      {
        id: '4',
        titulo: 'Pizza de Chocolate com Morango',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: 'R$ 42,00',
        imagem: './img/',
        categoria: categorias[2],
        qtd_estrela: 5
      },
      
    ]
}
var comentarioUsuario = {
    data: 
    [
        {
            id: '764',
            img_client: './img/robertocarlos',
            name_client: 'Roberto Carlos',
            date_comemtario: '13/03/2022',
            title_comentario: 'Pizza top!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        },
        {
            id: '156',
            img_client: './img/pbvessoleck',
            name_client: 'Paloma Vessoleck',
            date_comemtario: '01/08/2022',
            title_comentario: 'Pizza veio sem borda extra, porém estava muito boa!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        },
        {
            id: '544',
            img_client: './img/guigui',
            name_client: 'Guilherme Abel',
            date_comemtario: '16/09/2022',
            title_comentario: 'Pizza de alta qualidade e ótimo atendimento!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        },
        {
            id: '724',
            img_client: './img/pedrinhofofo',
            name_client: 'Pedro Pedraga',
            date_comemtario: '30/02/2023',
            title_comentario: 'Massa fofinha, adorei!!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        },
        {
            id: '811',
            img_client: './img/campolas',
            name_client: 'Gustavo Campos',
            date_comemtario: '02/07/2022',
            title_comentario: 'a melhor pizza de queijo que ja comi, ainda veio acompanhada de uma coquinha gelada, nota 10! ',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        },
    ]
}

module.exports = {
    clientes,
    categoriasProdutos,
    produtos,
    comentarioUsuarios,
    getClientes,
    getCategoriaProdutos,
    getProduto,
    getProdutos,
    getComentarioUsuarios
}