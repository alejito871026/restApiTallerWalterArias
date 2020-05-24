const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSquema = new Schema({
    codigo: { type: String, required:[true,'Codigo obligatorio']},
    descripcion:{ type:String, required:[true,'Descripcion obligatorio']},
    talla: { type: Number},
    materiales:{ type:String},
    categoria:{ type:String},
    enfoque:{ type:String},
    marca:{ type:String, required:[true,'Marca obligatoria']},
    precio: { type: Number, required:[true,'Precio obligatorio']},
});

module.exports = mongoose.model('producto', productoSquema);