import mysql from 'mysql';
// const mysql = require('mysql2');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeems"
})

con.connect(function(err){
    if(err){
        console.log("connection error",err)
    }
    else{
        console.log("Connected")
    }
})

export default con;