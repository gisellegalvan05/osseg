import db from '../../config/db.js';

const today = new Date();

export const novedades = (req,res)=>{
    db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad WHERE NONovTipo='D' AND NONovFecVigencia < CURRENT_DATE", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const novedad = (req,res)=>{

    const NONovID = req.params.id;

    db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad where NONovID = ?", [NONovID], (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
}

export const noticiasTop = (req,res)=>{
        db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad WHERE NONovTipo='N' AND NONovFecVigencia < CURRENT_DATE ORDER BY NONovFecha DESC limit 6", (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   }

export const noticiasAll = (req,res)=>{
    db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad WHERE NONovTipo in ('D', 'N') AND NONovFecVigencia < CURRENT_DATE ORDER BY NONovTipo, NONovFecha DESC", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const prevencionAll = (req,res)=>{
    db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad WHERE NONovTipo='P' AND NONovFecVigencia < CURRENT_DATE", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const prevencionTop = (req,res)=>{
    db.query("SELECT NONovID, NONovTipo, NONovDescripcion, NONovFecha, NONovFecVigencia, NONovTexto, NONovNomImg FROM nonovedad WHERE NONovTipo='P' AND NONovFecVigencia < CURRENT_DATE ORDER BY NONovFecha DESC limit 3", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }