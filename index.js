const express = require('express'); // here is part of the middleware  
const req = require('express/lib/request');
const app = express(); //  it's a function
const PORT = process.env.PORT || 8080;

app.use(express.json()); // here is the middleware to read JSON

// database
let produtos = [
    { id: 1, nome: 'Teclado Mecânico'},
    { id: 2, nome: 'Mouse Gamer'}
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// GET - Return the products list without specified id
app.get('/produtos', (req, res) => { // that's the route
    res.status(200).json(produtos);
});

// GET - Return the products list when consult specified id
app.get('/produtos/:id', (req, res) => { // that's the route
    const catalogo = produtos.find(p => p.id === parseInt(req.params.id));
    if (!catalogo) res.status(404).send('O produto com o ID informado não existe');
    res.send(catalogo);
});

// query
/*app.get('/produtos/:id', (req, res) => {
    res.send(req.query);
});*/

// POST - Add new product
app.post('/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length +1,
        nome: req.body.nome
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT - Update product with specified id
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado."
        });
    }

    produto.nome = nome;

    res.status(200).json(produto);
});

// DELETE - Delete specified product
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: "Produto não encontrado."
        });
    }

    produtos.splice(indice, 1);

    res.status(200).json({
        mensagem: "Produto removido com sucesso."
    });
});

app.listen(PORT, () => {
    console.log(`API rodando com sucesso em: http://localhost:${PORT}`);
});