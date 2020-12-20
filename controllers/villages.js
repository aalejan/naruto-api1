const models = require('../models')

const getCharacterVillage = async(req, res, next) => {
    const { id } = req.params
  
    const character = await models.Villages.findAll({
      where: {id},
      include: {model: models.Characters}
    })
  
    return character
      ? res.send(character)
      : next()
  
  }

  module.exports = { getCharacterVillage }