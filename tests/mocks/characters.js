const charactersList = [{
    id: 1,
    name: 'Naruto Uzumaki',
    villageId: 1
},
{
    id: 2,
    name: 'Madara Uchia',
    villageId: 1
},
{
    id: 3,
    name: 'Sasuke uchia',
    villageId: 1
}]

const singleCharacter = {
    id: 1,
    name: 'Naruto Uzumaki',
    villageId: 1
}

const singleCharacterTechnique = {
    id: 1,
    name: "Naruto Uzumaki",
    villageId: 1,
    createdAt: "2020-12-20T04:00:38.000Z",
    updatedAt: "2020-12-20T04:00:38.000Z",
    deletedAt: null,
    techniques: [
    {
    id: 1,
    name: "Multi-Shadow Clone Jutsu",
    characterId: 1,
    createdAt: "2020-12-20T04:00:38.000Z",
    updatedAt: "2020-12-20T04:00:38.000Z",
    deletedAt: null
    }]
}

const singleCharacterPowerstats = {
    id: 1,
    name: "Naruto Uzumaki",
    villageId: 1,
    createdAt: "2020-12-20T04:00:38.000Z",
    updatedAt: "2020-12-20T04:00:38.000Z",
    deletedAt: null,
    powerstats: [
    {
    id: 1,
    attackPotency: "Universe Level+",
    speed: "Massively Faster Than Light",
    characterId: 1,
    createdAt: "2020-12-20T04:00:38.000Z",
    updatedAt: "2020-12-20T04:00:38.000Z",
    deletedAt: null
    }]
}

const createCharacter = {
    name: 'Naruto Uzumaki',
    villageId: 1
}

const createCharacterResponse = {
    id: 1,
    name: "Naruto Uzumaki",
    villageId: 1,
    createdAt: "2020-12-20T04:00:38.000Z",
    updatedAt: "2020-12-20T04:00:38.000Z",
    deletedAt: null,
}

module.exports = { charactersList, singleCharacter, singleCharacterTechnique, createCharacter, createCharacterResponse, singleCharacterPowerstats }