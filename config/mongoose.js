const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/feed';

mongoose.connect(dbURL);

mongoose.connection.on('connected', function(){
    console.log('Conexão com o mongo aberto : '+dbURL);
});

mongoose.connection.on('error', function(){
    console.log('Erro na conexão com o banco : '+dbURL);
});

mongoose.connection.on('disconnected', function(){
    console.log('Desconectado do banco : '+dbURL);
});

mongoose.connection.on('open', function(){
    console.log('Conexão com o banco aberta : '+dbURL);
});


process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('APP encerrado');
        process.exit(0);
    });
});
