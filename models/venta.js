const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentaSchema = new Schema({ 
    idVenta:{type: Number, required:true},
    fecha: {type: String, required: true},
    total: {type: String, required: true},
    cajero: {type: String, required: true},
});

module.exports = mongoose.model('ventas', VentaSchema);