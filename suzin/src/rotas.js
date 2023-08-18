const express = require("express");

const rotas = express();

const {tabuada} = require('./controllers/controllers')

rotas.get("/tabuada/:numero", tabuada)

module.exports = rotas;