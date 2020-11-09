const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
  
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
console.log(password)

const url = `mongodb+srv://fullstack_red1:${password}@cluster0.26cct.mongodb.net/persons-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personsSchema = new mongoose.Schema({
  name:{
    type: String,
    minlength: 3,
    required: true
  } ,
  number: {
    type: String,
    required: true
  }
})

const Person = mongoose.model('Person', personsSchema)


if(process.argv.length == 5){ 
    const person = new Person({
    name: name,
    number: number
})

    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
})
}

else if (process.argv.length == 3){

    Person.find({}).then(result => {
        result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
  })
    mongoose.connection.close()
})
}