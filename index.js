const express = require('express')
const app = express()
const cors = require('cors')
// const axios = require('axios')
// const Parse = require('parse/node')
// const cron = require('node-cron')

const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', cors(), async (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var response = { "response" : "This is GET method." }
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(PORT, () => {
    console.log(`running in port: ${PORT}`)
})