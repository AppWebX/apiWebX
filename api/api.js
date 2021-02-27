const express = require('express');
const bodyParser = require('body-parser');
const rp =  require('request-promise');
const mail = require('./sendMail');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req,res)=>{
    mail(req.body)
    .then(()=>res.send("enviado"))
    .catch(err=>res.send(err));
    
})

app.get('/',(req,res)=>{
    res.send('Running')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
