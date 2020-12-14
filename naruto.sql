Create DATABASE naruto;

USE naruto;

CREATE TABLE narutoCharacters (
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE characters(
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id)
)

CREATE TABLE charactersVillages(
    characterId INT,
    villageId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(characterId, villageId),
    FOREIGN KEY(characterId) REFERENCES characters(id),
    FOREIGN KEY(villageId) REFERENCES villages(id)
)

CREATE TABLE villages(
    id INT auto_increment,
    name VARCHAR(255),
    characterId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id),
    FOREIGN KEY(characterId) REFERENCES characters(id)
)

CREATE TABLE techniques(
    id INT auto_increment,
    name VARCHAR(255),
    characterId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id),
    FOREIGN KEY(characterId) REFERENCES characters(id)
)

CREATE TABLE attackPotency(
    id INT auto_increment,
    name VARCHAR(255),
    characterId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(characterId) REFERENCES characters(id)
);
