const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser') 
var db = require('./db')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html')
})

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
})

app.post('/contactProc', function(req, res){
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email 

    db.query(`insert into contact(name, phone, email, regdate)
    values('${name}', '${phone}', '${email}' ,now())`, function(err){
        if (err) throw err
        console.log(`${name}`)
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})