const express = require('express')
const app = express()
const {getAllCharacters, getCharcterById, getCharactersTechniques} = require('./controllers/characters')
const {getCharacterVillage} = require('./controllers/villages')

app.use(express.static('public'))

app.set('view engine', 'pug')

app.listen(8600, () => console.log('Listening on port 8600...'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/characters', getAllCharacters)

app.get('/characters/:id', getCharcterById)

app.get('/characters/:id/techniques', getCharactersTechniques)

app.get('/villages/:id', getCharacterVillage)