const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');
const Cliente = require('../models/cliente');
const Venta = require('../models/venta');


//Metodo que obtiene todito todos los productos de la BD
router.get('/productos', async (req, res) => {
    const produtos = await Producto.find()
    //console.log(produtos);
    res.json(produtos); 
});

//Metodo que busca y obtiene de la BD un solo producto dado por un ID
router.get('/productos/:id', async(req,res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
})

//Guarda un producto con todos los parametros en la BD
router.post('/productos', async (req, res)=>{
    const { idProducto, nombreProducto, descripcion, precio, stock, imagen} = req.body;
    const producto = new Producto({idProducto, nombreProducto, descripcion, precio, stock, imagen});
    await producto.save();
    res.json({status: 'producto Guardado'}); 
});

//Actualiza un producto de la BD mediante un id enviado y se le envia x parametro lo nuevo que se actualice.
router.put('/productos/:id', async (req, res)=>{
    const{idProducto, nombreProducto, descripcion, precio, stock, imagen}= req.body;
    const newProducto = {idProducto, nombreProducto, descripcion, precio, stock, imagen};
    await Producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json({status: 'Producto Actualizado'});
})

//Metodo que borra un producto de la BD mediante un ID
router.delete('/productos/:id', async (req, res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
})

//CLIENTES

router.get('/clientes', async (req, res) => {
    const clientes = await Cliente.find()
    console.log(clientes);
    res.json(clientes); 
});


router.get('/clientes/:id', async(req,res)=>{
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
})


router.post('/clientes', async (req, res)=>{
    const { idCliente, nombre, apellido, telefono, direccion, imagen} = req.body;
    const cliente = new Cliente({idCliente, nombre, apellido, telefono, direccion, imagen});
    await cliente.save();
    res.json({status: 'cliente Guardado'}); 
});

//Actualiza un producto de la BD mediante un id enviado y se le envia x parametro lo nuevo que se actualice.
router.put('/clientes/:id', async (req, res)=>{
    const{idCliente, nombre, apellido, telefono, direccion, imagen}= req.body;
    const newCliente = {idCliente, nombre, apellido, telefono, direccion, imagen};
    await Cliente.findByIdAndUpdate(req.params.id, newCliente);
    res.json({status: 'Cliente Actualizado'});
})

//Metodo que borra un producto de la BD mediante un ID
router.delete('/clientes/:id', async (req, res)=>{
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente Eliminado'});
})

module.exports = router;