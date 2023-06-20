const express = require("express");
const { listen } = require("express/lib/application");
const { get } = require("express/lib/response");
const path = require("path");
const moment = require("moment");
const app = express();
const members = require("./Members");
const logger=require("./Middleware/Logger");

app.listen(5000);

app.use(logger);
app.get('/', function (req, res) {  
    res.send('Hi This is Sanjeev The King "Who will rule the world !!! anyOne has a doubt"');  
    }) 
app.get('/api/members/:id',(req,res)=>{ 
    res.json(members.filter(members => members.id === parseInt(req.params.id)))});

app.get('/api/members',(req,res) => res.json(members));