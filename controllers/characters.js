const models = require('../models')

const getAllCharacters = async (req, res, next) => {
  const characters = await models.Characters.findAll({
  })

  return res.send(characters)
}

const getCharcterById = async (req, res, next) => {
  try {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: { id }
  })

  return character
    ? res.send(character)
    : next()
  }catch (error){
    return res.status(500).send('unable to retrieve character, please try again')
  }
}

const getCharactersTechniques = async( req, res, next) => {
 try{
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: {id},
    include: { model: models.Techniques}
  })

  return character
    ? res.send(character)
    : next()
  } catch (error){
    return res.status(500).send('unable to retrieve characters technique, please try again')
  }

  
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