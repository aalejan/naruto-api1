/* eslint-disable max-len */
const chai = require('chai')
const { createSandbox } = require('sinon')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../models')
const { charactersList, singleCharacter, singleCharacterTechnique, createCharacter, createCharacterResponse, singleCharacterPowerstats } = require('./mocks/characters')
const { villagesCharacters } = require('./mocks/villages')
const {
    describe, it, before, afterEach, beforeEach, after
  } = require('mocha')
const { getAllCharacters, getCharcterById, getCharactersTechniques, saveNewCharacter, getCharactersPowerstats } = require('../controllers/characters')


chai.use(sinonChai)
const { expect } = chai

describe('Controllers- characters', () => {
let sandbox
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus
  let stubbedFindAll
  let stubbedCreate

  before(() => {
    sandbox = createSandbox()

    stubbedFindOne = sandbox.stub(models.Characters, 'findOne')
    stubbedFindAll = sandbox.stub(models.Characters, 'findAll')
    stubbedCreate = sandbox.stub(models.Characters, 'create')
    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAllCharacters', () => {
      it('retrieves a list of characters from the database and calls response.send() with the list',  async () => {
        stubbedFindAll.returns(charactersList)
  
        await getAllCharacters({}, response)
  
        expect(stubbedFindAll).to.have.callCount(1)
        expect(stubbedSend).to.have.been.calledWith(charactersList)
      })
  })
  describe('getCharcterById', () => {
    // eslint-disable-next-line max-len
    it('retrieves the character associated with the provided id from the DB and calls response.send with it', async () => {
      stubbedFindOne.returns(singleCharacter)
      const request = { params: { id: 1 } }

      await getCharcterById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 1 } })
      expect(stubbedSend).to.have.been.calledWith(singleCharacter)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getCharcterById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'throw-error' } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('unable to retrieve character, please try again')
    })
  })

  describe('getCharctersTechniques', () => {
    // eslint-disable-next-line max-len
    it('retrieves the character and technique associated with the provided id from the DB and calls response.send with it', async () => {
      stubbedFindOne.returns(singleCharacterTechnique)
      const request = { params: { id: 1 } }

      await getCharactersTechniques(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 1 }, include: { model: models.Techniques} })
      expect(stubbedSend).to.have.been.calledWith(singleCharacterTechnique)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getCharactersTechniques(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        where: {id: 'throw-error'},
        include: { model: models.Techniques}
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('unable to retrieve characters technique, please try again')
    })
  })
  describe('saveNewCharacter', () => {
    // eslint-disable-next-line max-len
    it('accepts new character and saves them as a new character, returning the saved record with a 201 status', async () => {
      const request = { body: createCharacter }

      stubbedCreate.returns(createCharacterResponse)

      await saveNewCharacter(request, response)

      expect(stubbedCreate).to.have.been.calledWith(createCharacter)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusSend).to.have.been.calledWith(createCharacterResponse)
    })
    it('sends 400 status and error message when required data is not given', async () => {
      const request = { body: {  name: createCharacterResponse.name, villageId: createCharacterResponse.villageId } }

      await saveNewCharacter(request, response)

      expect(stubbedCreate).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(400)
      expect(stubbedStatusSend).to.have.been.calledWith('The following fields are required: id, name, villageId')
    })
    it('sends 500 status when server is unable to fulfil request', async () => {
      stubbedCreate.throws('error')
      const request = { body: createCharacter }

      await saveNewCharacter(request, response)

      expect(stubbedCreate).to.have.been.calledWith(createCharacter)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('unable to create character, please try again')
    })
  })
  describe('getCharctersPowerstats', () => {
    // eslint-disable-next-line max-len
    it('retrieves the character and powerstats associated with the provided id from the DB and calls response.send with it', async () => {
      stubbedFindOne.returns(singleCharacterPowerstats)
      const request = { params: { id: 1 } }

      await getCharactersPowerstats(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 1 }, include: { model: models.Powerstats} })
      expect(stubbedSend).to.have.been.calledWith(singleCharacterPowerstats)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getCharactersPowerstats(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        where: {id: 'throw-error'},
        include: { model: models.Powerstats}
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('unable to retrieve characters powerstats, please try again')
    })
  })
  describe('getCharacterVillage', () => {
    it('retrieves a list of characters from the database and calls response.send() with the list',  async () => {
      stubbedFindAll.returns(villagesCharacters)

      await getAllCharacters({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(villagesCharacters)
    })
})
    

})