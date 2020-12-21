const models = require('../models')

const getAllCharacters = async (req, res, next) => {
  const characters = await models.Characters.findAll({
  })

  return res.send(characters)
}

const getCharcterById = async (req, res, next) => {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: { id },
    include: {model: models.Powerstats},
    include: {model: models.Techniques}
  })

  return character
    ? res.send(character)
    : next()
}

const getCharactersTechniques = async( req, res, next) => {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: {id},
    include: { model: models.Techniques}
  })

  return character
    ? res.send(character)
    : next()
}

const getCharactersPowerstats = async( req, res, next) => {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: {id},
    include: { model: models.Powerstats}
  })

  return character
    ? res.send(character)
    : next()
}

const saveNewCharacter = async (req, res) => {
  const { id, name, villageId } = req.body

  let newId = id


  

  const newCharacter = await models.Characters.create({ newId, name , villageId})

  

  return res.status(201).send(newCharacter)
}



module.exports = {getAllCharacters, getCharcterById, getCharactersTechniques, getCharactersPowerstats, saveNewCharacter} 