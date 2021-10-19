--You can load this sql script through phpmyadmin with the "import" feature on the home menu
--NOTE: YOU MUST CHANGE THE ABSOLUTE FILE PATH OF THE DATA CSV FILE BELOW 

-- Uncomment the line below if you need to reimport the database for whatever reason
-- DROP DATABASE pkmDB;
CREATE DATABASE pkmDB;
USE pkmDB;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE pokemon
	(id INTEGER PRIMARY KEY,
	name VARCHAR(50),
	type1 VARCHAR(30),
	type2 VARCHAR(50),
	total INTEGER,
	hp INTEGER,
	attack INTEGER,
	defense INTEGER,
	spAttack INTEGER,
	spDefense INTEGER,
	speed INTEGER,
	generation INTEGER,
	legendary BOOLEAN);

CREATE TABLE trainer
	(id INTEGER PRIMARY KEY AUTO_INCREMENT,
	 name VARCHAR(50),
	 wallet INTEGER
	 );

CREATE TABLE lineup
	(id INTEGER PRIMARY KEY AUTO_INCREMENT,
	trainer_id INTEGER,
	pkm_id INTEGER,
	lvl INTEGER,
	exp INTEGER,
	FOREIGN KEY (trainer_id) REFERENCES trainer(id) ON DELETE CASCADE,
	FOREIGN KEY (pkm_id) REFERENCES pokemon(id) ON DELETE CASCADE);

/* NOTE: YOU MUST CHANGE THE ABSOLUTE FILE PATH OF THE CSV FILE DEPENDING ON YOUR SETUP
	mysql is very fussy with regards to the filepaths of infiles. You will need to specify the
	absolute path to the file below: */
LOAD DATA INFILE '/opt/lampp/htdocs/proj3/pokemon_data.csv' 
INTO TABLE pokemon 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

ALTER TABLE pokemon
  ADD price INTEGER;

UPDATE pokemon SET Price=Total + (100 * (Legendary));

INSERT INTO trainer VALUES (1, "player", 1000);
INSERT INTO trainer(name) VALUES ("Youngster Joey");
INSERT INTO trainer(name) VALUES ("Camper Ricky");
INSERT INTO trainer(name) VALUES ("Beauty Olivia");
INSERT INTO trainer(name) VALUES ("Swimmer Kirk");
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (1, 19, 4, 0);
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (1, 56, 5, 0);
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (1, 24, 3, 0);
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (2, 29, 3, 0);
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (2, 2, 3, 0);
INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (2, 67, 3, 0);

