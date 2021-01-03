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


CREATE TABLE villages(
    id INT auto_increment,
    name VARCHAR(255),
    characterId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id),
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

INSERT INTO characters( name, villageId) VALUES('Naruto Uzumaki', 1)
INSERT INTO characters( name, villageId) VALUES('Madara Uchia', 1)
INSERT INTO characters( name, villageId) VALUES('Susuke Uchia', 1)
INSERT INTO characters( name, villageId) VALUES('Hashirama Senju', 1)

INSERT INTO characters( name, villageId) VALUES('Gara', 7)
INSERT INTO characters( name, villageId) VALUES('Rasa', 7)
INSERT INTO characters( name, villageId) VALUES('Sasori', 7)

INSERT INTO characters( name, villageId) VALUES('Akatsuchi', 4)
INSERT INTO characters( name, villageId) VALUES('Onoki', 4)
INSERT INTO characters( name, villageId) VALUES('Roshi', 4)

INSERT INTO characters( name, villageId) VALUES('A (Fourth Raikage', 3)
INSERT INTO characters( name, villageId) VALUES('Killer Bee', 3)
INSERT INTO characters( name, villageId) VALUES('A (Third Raikage)', 3)

INSERT INTO characters( name, villageId) VALUES('Nagato (Pain)', 5)
INSERT INTO characters( name, villageId) VALUES('Konan', 5)
INSERT INTO characters( name, villageId) VALUES('Hanzo', 5)

INSERT INTO characters( name, villageId) VALUES('Zabuza', 2)
INSERT INTO characters( name, villageId) VALUES('Kisame', 2)
INSERT INTO characters( name, villageId) VALUES('Suigetsu', 2)

INSERT INTO characters( name, villageId) VALUES('Orochimaru', 6)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Universe Level+', 'Massively Faster Than Light', 1)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Planet Level', 'Massively Faster Than Light', 2)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Universe Level+', 'Massively Faster Than Light', 3)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Multi-Continent Level','Massively Faster Than Light', 4)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level+', 'Massively Hypersonic+', 5)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level', 'Massively Hypersonic+', 6)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Town Level', 'Massively Hypersonic+', 7)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Multi-City Block Level', 'Hypersonic', 8)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level+', 'Massively Hypersonic', 9)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Island Level', 'Massively Hypersonic+', 10)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level+', 'Sub-Relativistic', 11)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Small Country Level', 'Sub-Relativistic', 12)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Island Level', 'Sub-Relativistic', 13)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Island Level', 'Sub-Relativistic', 14)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Large Mountain', 'Massively Hypersonic', 15)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Town Level', 'Massively Hypersonic', 16)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Town Level', 'Massively Hypersonic+', 17)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level+', 'Sub-Relativistic', 18)
INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Town Level', 'Massively Hypersonic', 19)

INSERT INTO powerstats(attackPotency, speed, characterId) VALUES('Mountain Level+', 'Massively Hypersonic', 20)


INSERT INTO techniques(name, characterId) VALUES('Multi-Shadow Clone Jutsu', 1)
INSERT INTO techniques(name, characterId) VALUES('Susuano', 2)
INSERT INTO techniques(name, characterId) VALUES('Chidori', 3)
INSERT INTO techniques(name, characterId) VALUES('True Several Thousand Hands', 4)

INSERT INTO techniques(name, characterId) VALUES('Armor of Sand', 5)
INSERT INTO techniques(name, characterId) VALUES('Gold Dust Wave', 6)
INSERT INTO techniques(name, characterId) VALUES('Puppet Mastery', 7)

INSERT INTO techniques(name, characterId) VALUES('Stone Wall', 8)
INSERT INTO techniques(name, characterId) VALUES('Particle Style Jutsu', 9)
INSERT INTO techniques(name, characterId) VALUES('Lava Release Chakra Mode', 10)

INSERT INTO techniques(name, characterId) VALUES('Liger Bomb', 11)
INSERT INTO techniques(name, characterId) VALUES('Kenjutsu', 12)
INSERT INTO techniques(name, characterId) VALUES('One-Finger Nukite', 13)

INSERT INTO techniques(name, characterId) VALUES('Chibaku Tensei', 14)
INSERT INTO techniques(name, characterId) VALUES('Paper Rain Technique', 15)
INSERT INTO techniques(name, characterId) VALUES('Summon Ibuse', 16)

INSERT INTO techniques(name, characterId) VALUES('Water Prison Technique', 17)
INSERT INTO techniques(name, characterId) VALUES('Samehada Fusion', 18)
INSERT INTO techniques(name, characterId) VALUES('Drowning Water Blob Technique', 19)

INSERT INTO techniques(name, characterId) VALUES('Reanimation Jutsu', 20)