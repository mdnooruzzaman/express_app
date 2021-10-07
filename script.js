const express = require('express');
const mysql = require('mysql');
const app = express();
const Router = express.Router();



app.use(express.json());



var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : 'password',
    database: 'tutorial_database',
});
mysqlConnection.connect((err) => {
    if(!err){
        console.log('Connected succesfully');
    }else{
        console.log('Connection eror');
   }
})

Router.get( '/' , (req , res) => {
    mysqlConnection.query('SELECT * FROM tutorial')
})

app.listen(3000 , () => console.log('app is running'));