const express = require('express')
const path = require('path')
const app =  express()
const PORT = 8081
const root = '/Users/Code/OneDrive/Rice/GitHub_School/Homework/homework_week_11/homework_week_11/Develop/public'

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname + '/../../index.html'))
})

app.get('/notes', (req, res) => {
   res.sendFile(path.resolve(__dirname + '/../../notes.html'))
})

app.listen(PORT, () => console.log(`Port: ${PORT} has started.`))

