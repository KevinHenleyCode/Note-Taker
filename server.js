const express = require('express')
const fs = require('fs')
const id = require('uuid')
const path = require('path')
const app = express()
const PORT = 8080





// is a middleware parser
app.use(express.json())

// gets index file when / is added to the url
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));


// gets notes file when /notes is added to the url
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// gets the json objects when /api/notes is added to the url
app.get('/api/notes', (req, res) => {
   let notes = fs.readFile(path.join(__dirname, '/db/db.json'), (error) =>
   error ? console.log(error) : console.log('No error'))
   let notesParse = JSON.parse(notes)
   res.json(notesParse)
})

// sends the json objects when /api/notes is added to the url
app.post('/api/notes', (req, res) => {
   let notesAdd = (fs.readFile(path.join(__dirname, '/db/db.json'), (error) => 
   error ? console.log(error) : console.log('No error')))
   let notesParse = JSON.parse(notesAdd)
   notesAdd.push(req.body.id.v4())
   fs.writeFile('/db/db.json', JSON.stringify(notesAdd), (error) => 
   error? console.log(error) : console.log('Note added!'))
   res.json(notesAdd)
})

// listens for the default port number or the one assigned by heroku
app.listen(process.env.PORT || PORT, () => console.log(`Port: ${PORT} has started.`))