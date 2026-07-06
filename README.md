# 🛒 Products API
My first RESTful API built with Node.j and Express.js. I built that API to learn how to develop an RESTful API. The API contains CRUD operations. I mainly tested it with Postman.

# 🛠️ Technologies

* Node.js
* Express.js
* VS Code
* Postman

# ✨ Feature
Here's what you can do:

* Get default products.
* Post new products on catalog.
* Update registered products.
* Delete specific products.
* Handle errors and exceptions.

# 🚀 The Process

I started installing Node dependences before define the API structure. Then, I declared consts to define essencial variables like {PORT, app, req and express}. Then I used a simple middleware to read JSON and simulated a database with the variable `produtos` that contains default products values. Next, I implemented specified routes to the API's root `/` and for the GET, POST, PUT and DELETE verbs.

For the **GET** `/produtos`, I defined a response to return the json value from `produtos` variable.

Also for the **GET** `/produtos/:id`, I declared a const called `catalogo` to find specific id from `produtos` id using *req.params*.

For the **PUT** `/produtos/:id`, I declared consts `produto`, `id` and `nome`. The `id` I used *req.params.id* to parse Integer, `nome` for return request body and `produtos` to find specific ids. Next, you will be able to just update the product `nome` properity. 

And for the **DELETE** `/produtos/:id`, I declared the same const `id` with `indice` to delete a specified product finding it by your own id. If that action is succesfull a message will be displayed.

When the API is running a message with the PORT parameter will be displayed.

Now I am studing how to handle errors, API structure and how to integrate it with database.

# ▶️ Running the project

To run the project in your local environment, follow these steps:

1. Clone the repository to your machine.
`git clone https://github.com/MarcDevGuy127/api_products`

2. For a better praticity and produtivity, install **nodemon** using the next commands on Terminal too:

* `npm install -g  nodemon`

* `nodemon index.js`

3. For testing the API, you can use Postman/Insomnia (and another option is to install the Thunder Client extension on VS Code).

* After start the API with `nodemon index.js`, you must copy the localhost addres like *https://localhost:8080* and paste it on Postman. After it, select the method type and test it.
