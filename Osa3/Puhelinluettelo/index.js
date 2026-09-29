const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: "2",
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: "3",
        name: "Dan Abramow",
        number: "12-43-234345"
    }
]

//let numPersons = persons.length; ei toimi poiston jälkeen

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/info', (request, response) => {

    const dateTime = new Date().toLocaleString('fi-FI')
    let info = `Phonebook has info for ${persons.length} people. <br>Query has made at ${dateTime}`
    response.send(info)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    }else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(200).json({message: 'Person deleted.'})
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const findPerson = persons.find(person => person.name ===body.name)
    const findNumber = persons.find(person => person.number === body.number)
    if (!body.name || !body.number || findPerson || findNumber) {
        return response.status(400).json({
            error: 'name or number missing or they already exist in phonebook!'
        })
    }


    const person = {
        name:body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)