const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (request, response){ //Nome de rotas sempre no plural. ASYNC diz que a função pode demorar para responder, e o await é para esperar a resposta
        //console.log(request.body) //Maneira de fazer DEBUG pelo terminal
        const { github_username, techs, latitude, longitude } = request.body; //Buscando a informacao de dentro do request body. As techs vem dentro do corp o da requisicao.
    
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);  //Utiliza a crase pois assim pode passsar string dentro de uma variavel (Template String)
        
        //console.log{apiResponse.data}; -> Retorna todas as informacoes do usuario
    
        const { name = login, avatar_url, bio } = apiResponse.data //vai buscar apenas esses campos e caso o name nao exista, ele vai buscar o login
    
        const techsArray = techs.split(',').map(tech => tech.trim()); //Trim remove espacamentos antes e depois de uma string
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude], 
        };
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location ,
        })

        return response.json(dev);
     }
}