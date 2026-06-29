const express = require('express'); // here is part of the middleware  
const req = require('express/lib/request');
const app = express(); //  it's a function
const PORT = 8080;

app.use(express.json()); // here is the middleware to read JSON

// database
let produtos = [
    { id: 1, nome: 'Teclado Mecânico'},
    { id: 2, nome: 'Mouse Gamer'}
];

// GET - Return the products list
app.get('/produtos', (req, res) => { // that's the route
    res.status(200).json(produtos);
});

// POST - Add new product
app.post('/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length +1,
        nome: req.body.nome
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT - Update specified product
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
    /*    try {
        const { id } = req.params; // requesting id param
        const { nome } = req.body; // requesting product 'name' on 
        
        const produtoAtualizado  = await produtos.findByIdAndUpdate(
            id,
            { nome },
            { new: true, runValidators: true }
        );

        if (!produtoAtualizado) {
            return res.status(404).json({ erro: 'Product not found'});
        }

        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(400).json({ erro: 'Error to product update', detalhes: error.message});
    }*/
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

/*
// adding get endpoint
app.get('/cars', (req, res) => { // that's the route
    res.status(200).send({
        name: 'Rev Rod',
        car: 'vrum vrumm',
        year: '2014'
    }) 
});

app.post('/cars', (req, res)) => {
    const newCar = {
        name: req.body.name  
    };
}


// adding post endpoint
app.post('/cars/:id', (req, res) => { // using route params for every car have a id
    const { id } = req.params;
    const { image } = req.body;

    if (!image) {
        res.status(418).send({ message: 'We need a image!' })
    }

    res.send({
        cars: `car with your ${image} and ID of ${id}`,
    });
});
*/
app.listen(PORT, () => {
    console.log(`API rodando com sucesso em: http://localhost:${PORT}`);
});