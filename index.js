const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send('Sound : 멍멍')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)
    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    } else if (name == "cat") {
        res.json({'sound' : '야옹'})
    } else {
        res.json({'none' : 'none'})
    }
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const p = req.query
    console.log(p)
    res.json({'sound' : p.id})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
