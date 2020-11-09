const express = require('express')
const app = express()

var morgan = require('morgan')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
{ id: 1, name: 'Arto Hellas', number: '040-123456' },
{ id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
{ id: 3, name: 'Dan Abramov', number: '12-43-234345' },
{ id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
]


const generateId = () => {
    const maxId = persons.length > 0? Math.max(...persons.map(n=> n.id)):0

    return maxId + 1
}

//exercise 3.7
morgan.token('data', (request) => {
    return JSON.stringify(request.body)
})


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

  //part 3.4    
app.delete('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id)
    person = persons.filter(person => person.id !==id)
    console.log("Delete successful")
    response.status(204).end() 
})

//part 3.5 

app.post('/api/persons', (request,response) =>{
    const body = request.body 
    
    if(!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or content missing'
        })
    }

    if(persons.find(p=> p.name === body.name)){
        return response.status(400).json({
            error: 'name already exists'
        })
    }


    const person = {
        name : body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
    

    response.json(person)
})

  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)