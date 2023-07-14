import db from '../../config/db.js';

export const internos = (req,res)=>{
    db.query("SELECT * FROM noinfutil WHERE NOInfTipo='T' ", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const direcciones = (req,res)=>{

    const Provincia = req.params.id;
    console.log('Provincia '+Provincia)
    db.query("SELECT * FROM noinfutil WHERE NOInfTipo='D' AND NOInfUtilProv = ?",[Provincia], (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
}