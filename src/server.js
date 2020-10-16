//Importando dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Iniciando express
const server = express();
server
  //utilizando os aruqivos estáticos
  .use(express.static('public'))

  //Configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //Criando rota
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)

//Ligando o servidores
server.listen(5500);
