const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({ 
    idProducto:{type: Number, required:true},
    nombreProducto: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required:true},
    imagen: {type: String, required: true}
});

module.exports = mongoose.model('productos', ProductoSchema);