const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');
const easy = require("easymaty")

module.exports = {
    nombre: 'test',
    alias: [],
    descripcion: 'Comando de prueba',
    run: (client, message, args) => {
      

  }
}
