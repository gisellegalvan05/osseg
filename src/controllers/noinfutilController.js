import db from '../../config/db.js';

export const internos = (req,res)=>{
    db.query("SELECT * FROM noinfutil WHERE NOInfTipo='T' ", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const direcciones = (req,res)=>{
    db.query("SELECT * FROM noinfutil WHERE NOInfTipo='D' ", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }