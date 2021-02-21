const mongoose = require('mongoose');

const DevSchema =  new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //Criando um vetor de Strings, a aplicação vai entender que nesse campo vão ter uma ou mais strings.

    //Pausado aos 54 minutos. Vídeo 2
});