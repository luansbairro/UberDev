const { Router } = require('express');

const routes = Router();

routes.post('/users', (request, resposnse) => {
    console.log(request.body) //Maneira de fazer DEBUG pelo terminal
    return resposnse.json({ message: 'Hello World'});
});

module.exports = routes;  