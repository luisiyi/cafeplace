const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({ 
    idCliente:{type: Number, required:true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required:true},
    imagen: {type: String, required: true}
});

module.exports = mongoose.model('clientes', ClienteSchema);