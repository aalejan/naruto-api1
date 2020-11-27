Create DATABASE naruto;

USE naruto;

CREATE TABLE narutoCharacters (
    id INT auto_increment,
    name VARCHAR(255),
    village VARCHAR(255),
    powerstats VARCHAR (255),
    techniques VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);