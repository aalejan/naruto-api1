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
  const { name, villageId } = req.body
try{

  if( !name || !villageId){
    return res.status(400).send('The following fields are required: name, villageId')
  }
 

  const newCharacter = await models.Characters.create({ name , villageId})

  return res.status(201).send(newCharacter)
  }catch(error) {
    return res.status(500).send('unable to create character, please try again')
  }
}



module.exports = {getAllCharacters, getCharcterById, getCharactersTechniques, getCharactersPowerstats, saveNewCharacter} 