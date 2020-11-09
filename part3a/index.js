require('dotenv').config()

const Note = require('./models/note')
const express = require('express')
const app = express()

const mongoose = require('mongoose')

const url = `mongodb+srv://fullstack_red1:fuLLstacKRed95@cluster0.26cct.mongodb.net/note-app?retryWrites=true&w=majority`

const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })



app.use(express.json())



const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)
app.post('/api/notes', (request,response, next) => {
  const body = request.body
  if(body.content === undefined) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const note = new Note({
    content : body.content,
    important: body.important || false,
    date: new Date()
  })

  note
    .save()
    .then(savedNote => {
      return savedNote.toJSON()
    })
    .then(savedAndFormattedNote => {
      response.json(savedAndFormattedNote)
    })
    .catch(error => next(error))
})



app.get('/', (request, response) => {
  response.send('<h1>Hello World 2! </h1>')
})

app.get('/api/notes',(request,response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request,response, next) =>{
  Note.findById(request.params.id)
    .then(note => {
      if(note){
        response.json(note)
      } else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})


app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})



const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)