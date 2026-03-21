const app = require('express')();   //  it's a function
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`) // test it using node . on Terminal
)