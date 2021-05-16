const express = require('express')
const fs = require('fs')
const uuid = require('uuid')
const path = require('path')
const app = express()
const PORT = 8081




// middleware parser
app.use(express.json())
app.use(express.static('public'))


// gets index file when / is added to the url
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));


// gets notes file when /notes is added to the url
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));


// gets the json objects when /api/notes is added to the url
app.get('/api/notes', (req, res) => {

   let notes = fs.readFileSync(path.join(__dirname, 'db/db.json'))
   let notesParse = JSON.parse(notes)
   res.json(notesParse)
})


// sends the json objects when /api/notes is added to the url
app.post('/api/notes', (req, res) => {

   let notesAdd = (fs.readFileSync(path.join(__dirname, 'db/db.json')))
   let notesParse = JSON.parse(notesAdd)
   let notesBody = req.body
   notesBody.id = uuid.v4()
   notesParse.push(notesBody)
   fs.writeFileSync('db/db.json', JSON.stringify(notesParse))
   res.json(notesParse)
})


// listens for the default port number or the one assigned by heroku
app.listen(process.env.PORT || PORT, () => console.log(`Port: ${PORT} has started.`))