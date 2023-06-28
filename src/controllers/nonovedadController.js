import db from '../../config/db.js';

const today = new Date();

export const novedades = (req,res)=>{
    db.query("SELECT * FROM nonovedad WHERE NONovTipo='D'", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const novedad = (req,res)=>{

    const NONovID = req.body.NONovID;

    db.query("SELECT * FROM nonovedad where NONovID = ?", [NONovID], (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const noticiasTop = (req,res)=>{
        db.query("SELECT * FROM nonovedad WHERE NONovTipo='N' ORDER BY NONovFecha DESC limit 6", (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   }

export const noticiasAll = (req,res)=>{
    db.query("SELECT * FROM nonovedad ORDER BY NONovTipo, NONovFecha DESC", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }