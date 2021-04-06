const { Router, response } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => { //Nome de rotas sempre no plural. ASYNC diz que a função pode demorar para responder, e o await é para esperar a resposta
    //console.log(request.body) //Maneira de fazer DEBUG pelo terminal
    const { github_username, techs } = request.body; //Buscando a informacao de dentro do request body. As techs vem dentro do corpo da requisicao.

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);  //Utiliza a crase pois assim pode passsar string dentro de uma variavel (Template String)
    
    //console.log{apiResponse.data}; -> Retorna todas as informacoes do usuario

    const { name = login, avatar_url, bio } = apiResponse.data //vai buscar apenas esses campos e caso o name nao exista, ele vai buscar o login

    const techsArray = techs.split(',').map(tech => tech.trim()); //Trim remove espacamentos antes e depois de uma string

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    //console.log(name, avatar_url, bio, github_username);

    return response.json(dev);
});



module.exports = routes;