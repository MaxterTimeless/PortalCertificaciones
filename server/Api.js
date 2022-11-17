const client = require('./Connection.js')
const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

const cors = require("cors")


app.use(cors({
    origin:"*",
    methods:['GET']
}))
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/cursos', (req, res)=>{
    client.query(`Select * from cursos`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/cursos/:id_curso', (req, res)=>{
    client.query(`Select * from cursos where id_curso=${req.params.id_curso}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/empresas_cert', (req, res)=>{
    client.query(`Select * from empresas_cert`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.get('/empresas_cert/:id_empresa', (req, res)=>{
    client.query(`Select * from empresas_cert where id_empresa=${req.params.id_empresa}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})




app.get('/certificaciones', (req, res)=>{
    client.query(`Select * from certificaciones`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.get('/certificaciones/:id_cert', (req, res)=>{
    client.query(`Select * from certificaciones where id_cert=${req.params.id_cert}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/areas', (req, res)=>{
    client.query(`Select * from areas`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.get('/areas/:id_area', (req, res)=>{
    client.query(`Select * from areas where id_area=${req.params.id_area}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})