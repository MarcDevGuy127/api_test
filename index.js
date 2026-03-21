const app = require('express')();   //  it's a function
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`) // test it using node . on Terminal
)

// adding get endpoint
app.get('/cars', (req, res) => { // that's the route
    res.status(200).send({
        name: 'Rev Rod',
        car: 'vrum vrumm',
        year: '2014'
    }) 
});

// adding post endpoint
app.post('');