import db from '../../config/db.js';

export const novedades = (req,res)=>{
    db.query("SELECT * FROM nonovedad WHERE NONovTipo='D'", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const novedad = (req,res)=>{
    db.query("SELECT * FROM nonovedad", (err,result)=>{
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
    db.query("SELECT * FROM nonovedad WHERE NONovTipo='N' ORDER BY NONovFecha DESC", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }