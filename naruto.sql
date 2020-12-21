Create DATABASE naruto;

USE naruto;



CREATE TABLE characters(
    id INT auto_increment,
    name VARCHAR(255),
    villageId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id),
    FOREIGN KEY(villageId) REFERENCES villages(id)
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

CREATE TABLE powerstats(
    id INT auto_increment,
    attackPotency VARCHAR(255),
    speed VARCHAR(255),
    characterId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(characterId) REFERENCES characters(id)
);


INSERT INTO villages(name) VALUES('Konohagakure (Hidden Leaf)')
INSERT INTO villages(name) VALUES('Kirigakure (Hidden Mist)')
INSERT INTO villages(name) VALUES('Kumogakure (Hidden Cloud)')
INSERT INTO villages(name) VALUES('Iwagakure (Hidden Stone)')
INSERT INTO villages(name) VALUES('Amegakure (Hidden Rain)')
INSERT INTO villages(name) VALUES('Otogakure (Hidden Sound)')
INSERT INTO villages(name) VALUES('Sunagakure (Hidden Sand)')