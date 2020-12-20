const models = require('../models')

const getAllCharacters = async (req, res) => {
  const characters = await models.Characters.findAll({
  })

  return res.send(characters)
}

const getCharcterById = async (req, res) => {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: { id },
    include: {model: models.Powerstats},
    include: {model: models.Techniques}
  })

  return res.send(character)
}

const getCharactersTechniques = async( req, res) => {
  const { id } = req.params

  const character = await models.Characters.findOne({
    where: {id},
    include: { model: models.Techniques}
  })

  return res.send(character)
}


module.exports = {getAllCharacters, getCharcterById, getCharactersTechniques}