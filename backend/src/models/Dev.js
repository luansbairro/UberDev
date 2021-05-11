const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema =  new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //Criando um vetor de Strings, a aplicação vai entender que nesse campo vão ter uma ou mais strings.
    location: {
        type: PointSchema,
        index: '2dsphere' //Sempre que trabalha com geolocalizacao, precisa criar um indice para facilitar a busca
    }

});

module.exports  = mongoose.model('Dev', DevSchema); //Exporta o model para o mongoose, para poder utilizar a geolocalizacao. Dev eh o nome como vai ser salvo no banco de dados
