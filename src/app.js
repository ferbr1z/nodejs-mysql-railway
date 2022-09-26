import express from "express";
import {pool} from "./db.js";
import {PORT} from './config.js';

const app = express();

app.get('/', async (req,res)=>{
    const [users] = await pool.query('SELECT * FROM users');
    res.json({
        message: "Hola mundo",
        users});
})

app.get('/ping', async (req,res)=>{
    const [result] = await pool.query(`SELECT "HELLO WORLD" as RESULT`);
    // res.send(result);
    console.log(result[0]);
    res.json(result[0]);
})

app.get('/create', async (req,res)=>{
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")');
    res.json(result);
})

app.listen(PORT);
console.log("Server con port: ", PORT);
