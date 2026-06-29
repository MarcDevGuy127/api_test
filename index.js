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