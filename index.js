const express = require('express'); // here is part of the middleware  
const app = express(); //  it's a function
const PORT = 8080;

app.use( express.json()); // here is the middleware

// adding get endpoint
app.get('/cars', (req, res) => { // that's the route
    res.status(200).send({
        name: 'Rev Rod',
        car: 'vrum vrumm',
        year: '2014'
    }) 
});

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

app.listen(PORT, () => {
    console.log(`It's alive on http://localhost:${PORT}`);
});