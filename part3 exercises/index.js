const express = require('express')
const app = express()

app.use(express.json())
let persons = [
{ id: 1, name: 'Arto Hellas', number: '040-123456' },
{ id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
{ id: 3, name: 'Dan Abramov', number: '12-43-234345' },
{ id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
]

//exercise 3.1 
app.get('/api/persons', (request,response) => {
    //console.log("Hello World")
    response.json(persons)
})


//exercise 3.1 

app.get('/', (request, response) => {
    response.send('<h1>Hello World 2! </h1>')
})

//exercise 3.2 
app.get('/api/info', (request,response) => {
    let count = Object.keys(persons).length 
    let abc  = new Date()
    console.log(abc)
    response.send(`Phonebook has info for ${count} people <br> ${abc}`)
    
})

//part 3.3 

app.get('/api/persons/:id', (request,response) =>{
    const id = Number(request.params.id)
    console.log(id)
    const person = persons.find(person => person.id === id)
    if(person){
      response.json(person)
    }
    else{
        //response.send(`${id} does not exist`)
        response.status(404).end()
        
    }
      })


  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)