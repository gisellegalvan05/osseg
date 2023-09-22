import db from '../../config/db.js';

export const internos = (req,res)=>{
    db.query("SELECT NOInfUtilID, NOInfTipo, NOInfDescripcion, NOInfTelefono, NOInfLink, NOInflDireccion, NOInfUtilProv, NOInfGeolocation,NOInfUtilNomImg FROM noinfutil WHERE NOInfTipo='T' ORDER BY NOInfDescripcion", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }

export const direcciones = (req,res)=>{

    const Provincia = req.params.id;
    db.query("SELECT NOInfUtilID, NOInfTipo, NOInfDescripcion, NOInfTelefono, NOInfLink, NOInflDireccion, NOInfUtilProv, NOInfGeolocation,NOInfUtilNomImg FROM noinfutil WHERE NOInfTipo='D' AND ((NOInfUtilProv=?) OR (?=0)) ORDER BY NOInfDescripcion",[Provincia,Provincia], (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
}