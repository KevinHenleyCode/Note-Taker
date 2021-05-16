const express = require('express')
const fs = require('fs')
const id = require('uuid')
const path = require('path')
const app =  express()
const PORT = 8080

// is a middleware parser
app.use(express.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/Develop/public/assets/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/Develop/public/assets/notes.html')));


app.get('/api/notes', (req, res) => {
   let notes = fs.readFileSync(path.join(__dirname, '/Develop/db/db.json'))
   let notesParse = JSON.parse(notes)
   res.json(notesParse)
   // res.json(path.resolve(__dirname + '/Develop/db/db.json'))
})

app.listen(process.env.PORT || PORT, () => console.log(`Port: ${PORT} has started.`))