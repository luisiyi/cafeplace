const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

//Metodo que obtiene todito todos los productos de la BD
router.get('/', async (req, res) => {
    const produtos = await Producto.find()
    //console.log(produtos);
    res.json(produtos); 
});

//Metodo que busca y obtiene de la BD un solo producto dado por un ID
router.get('/:id', async(req,res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
})

//Guarda un producto con todos los parametros en la BD
router.post('/', async (req, res)=>{
    const { idProducto, nombreProducto, descripcion, precio, stock, imagen} = req.body;
    const producto = new Producto({idProducto, nombreProducto, descripcion, precio, stock, imagen});
    await producto.save();
    res.json({status: 'producto Guardado'}); 
});

//Actualiza un producto de la BD mediante un id enviado y se le envia x parametro lo nuevo que se actualice.
router.put('/:id', async (req, res)=>{
    const{idProducto, nombreProducto, descripcion, precio, stock, imagen}= req.body;
    const newProducto = {idProducto, nombreProducto, descripcion, precio, stock, imagen};
    await Producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json({status: 'Producto Actualizado'});
})

//Metodo que borra un producto de la BD mediante un ID
router.delete('/:id', async (req, res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
})

module.exports = router;