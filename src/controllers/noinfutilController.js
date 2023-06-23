import db from '../../config/db.js';

export const internos = (req,res)=>{
    db.query("SELECT * FROM noinfutil", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   }