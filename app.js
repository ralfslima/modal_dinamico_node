// Importar módulo express
const express = require('express');

// Importar módulo express-handlebars
const { engine } = require('express-handlebars');

// App
const app = express();

// Adicionar Bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rota principal
app.get('/', function(req, res){
    // Vetor
    let vetor = [
        {'codigo':1, 'nome':'Ana'},
        {'codigo':2, 'nome':'Bruno'},
        {'codigo':3, 'nome':'Carla'},
        {'codigo':4, 'nome':'Denis'},
        {'codigo':5, 'nome':'Evelin'},
        {'codigo':6, 'nome':'Fernando'},
        {'codigo':7, 'nome':'Gabriela'},
        {'codigo':8, 'nome':'Hellen'}
    ];

    // Render
    res.render('pagina', {vetor:vetor});
});

// Servidor
app.listen(8080);