const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://luan:bairro@cluster0.d3nyy.mongodb.net/uberdev?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use (express.json()); //Vou dizer que isso é valido para todas as rotas da aplicação. Assim o express vai entender que estamos utilizando o JSON
app.use (routes);
//MÉTODOS HTTP: GET, POST, PUSH, DELETE

//TIPOS DE PARÂMETROS:
// Query Params (GET) -> request.query (Filtros, Ordenação, Paginação, ... ) 
// Request Params (PUT, DELETE) -> request.params (Identificar um recurso na alteração ou remoção)
// Body (POST, PUT) -> request.body (Dados para criação ou alteração de um registro)
 
app.listen(3333);

