const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
console.log(process.argv.length)
const url =`mongodb+srv://testikayttaja:${password}@cluster0.7um9t.mongodb.net/Phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length===3){
  Person.find({}).then(result => {
    result.forEach(p => {
      console.log(p)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length>3){
  const person = new Person({
    name: String(process.argv[3]),
    number: String(process.argv[4])
  })
  console.log(String(process.argv[3]))
  person.save().then(response => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}



