import mysql from 'mysql';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"osseg" 
    })
    
    export default db