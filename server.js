const express = require('express')
const path = require('path')
const app =  express()
const PORT = 8080

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname + '/index.html'))
})

app.get('/', (req, res) => {
   console.log(`${req} Works`)
})

app.get('/notes', (req, res) => {
   res.sendFile(path.resolve(__dirname + '/notes.html'))
})

app.listen(PORT, () => console.log(`Port: ${PORT} has started.`))

