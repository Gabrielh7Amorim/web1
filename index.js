const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'contato'}))
    app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
    app.set('view engine', 'handlebars')
    app.use('/public', express.static(__dirname + '/public'));
    app.use(express.static('html'))

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
app.get("/", function(req,res){
    res.render('index')
})
app.get('/contato', function(req, res){
    res.render('formContato')
})

app.listen(8081, function(){
    console.log("Servidor Rodando na URL http://localhost:8081");
})