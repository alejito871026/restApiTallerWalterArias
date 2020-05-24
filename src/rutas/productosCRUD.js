const express = require('express');
const router = express.Router();
//const jwt = require('jsonwebtoken');


const Producto = require('../models/producto.js');
const secret = '*DAhd871026#'

//function siEstaAdentro(req,res,next){//
    //jwt.verify(req.headers.authorization,secret, (err,decoded)=>{
        //if(err){
            //return res.status(404).json({
                //success:false
            //})
        //}
        //if(decoded){
           //next()
        //}
    //})
//}
router.post('/guardarProducto', async (req, res)=>{
    const prod = new Producto(req.body)
    prod.save((err,ok) => {
        if(err){
            return res.status(400).json({
                title: 'error',
                error: 'error al guardar producto'
            })
        }else{
            return res.status(200).json({
                data: ok
            })            
        }
    })
})
router.get('/masculinos', async (req, res)=>{ 
    var masculinos = await Producto.find({"enfoque":"masculino"})
    res.json(masculinos)
})
router.get('/femeninos', async (req, res)=>{ 
    var femeninos = await Producto.find({"enfoque":"femenino"})
    res.json(femeninos)
})
router.get('/Infantil', async (req, res)=>{ 
    var Infantil = await Producto.find({"enfoque":"infantil"})
    res.json(Infantil)
})
router.get('/todos', async (req, res)=>{ 
    var todos = await Producto.find()
    res.json(todos)
})
router.post('/borrarProducto', async (req, res)=>{
    Producto.findOneAndDelete({"codigo":req.body.cod},(err, borrado) => {
        if(err){
            return res.status(400).json({
                title: 'error',
                error: 'error al borrar el texto'
            })
        }else{
            return res.status(200).json({
                data: borrado
            })
        } 
    })   
})
router.post('/reguardarProducto', async (req, res)=>{
    Producto.updateOne({"codigo":req.body.codigo},{
        $set : { 
        "enfoque":req.body.enfoque,
        "talla":req.body.talla,
        "materiales":req.body.materiales,
        "descripcion":req.body.descripcion,
        "categoria":req.body.categoria,
        "marca":req.body.marca,
        "precio":req.body.precio
    }},(err, editado) => {
        if(err){
            return res.status(400).json({
                title: 'error',
                error: 'error al borrar el texto'
            })
        }else{
            return res.status(200).json({
                data: editado
            })
        } 
    })   
})
module.exports = router;