const mongoose = require('mongoose');

const DevSchema =  new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //Criando um vetor de Strings, a aplicação vai entender que nesse campo vão ter uma ou mais strings.


});

module.exports  = mongoose.model('Dev', DevSchema); //Exporta o model para o mongoose, para poder utilizar a geolocalizacao. Dev eh o nome como vai ser salvo no banco de dados
