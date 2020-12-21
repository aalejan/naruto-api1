/* eslint-disable max-len */
const chai = require('chai')
const { createSandbox } = require('sinon')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../models')
const { charactersList } = require('./mocks/characters')
const {
    describe, it, before, afterEach, beforeEach, after
  } = require('mocha')
const { getAllCharacters } = require('../controllers/characters')


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

})