-- MySQL dump 10.14  Distrib 5.5.60-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: pkmDB
-- ------------------------------------------------------
-- Server version	5.5.60-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lineup`
--

DROP TABLE IF EXISTS `lineup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lineup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trainer_id` int(11) DEFAULT NULL,
  `pkm_id` int(11) DEFAULT NULL,
  `lvl` int(11) DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `trainer_id` (`trainer_id`),
  KEY `pkm_id` (`pkm_id`),
  CONSTRAINT `lineup_ibfk_1` FOREIGN KEY (`trainer_id`) REFERENCES `trainer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `lineup_ibfk_2` FOREIGN KEY (`pkm_id`) REFERENCES `pokemon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineup`
--

LOCK TABLES `lineup` WRITE;
/*!40000 ALTER TABLE `lineup` DISABLE KEYS */;
INSERT INTO `lineup` VALUES (1,1,25,4,0),(2,1,69,4,0),(3,1,98,4,0),(4,1,136,4,0);
/*!40000 ALTER TABLE `lineup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon`
--

DROP TABLE IF EXISTS `pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `type1` varchar(30) DEFAULT NULL,
  `type2` varchar(50) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `hp` int(11) DEFAULT NULL,
  `attack` int(11) DEFAULT NULL,
  `defense` int(11) DEFAULT NULL,
  `spAttack` int(11) DEFAULT NULL,
  `spDefense` int(11) DEFAULT NULL,
  `speed` int(11) DEFAULT NULL,
  `generation` int(11) DEFAULT NULL,
  `legendary` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon`
--

LOCK TABLES `pokemon` WRITE;
/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */;
INSERT INTO `pokemon` VALUES (1,'Bulbasaur','Grass','Poison',318,45,49,49,65,65,45,1,0,318),(2,'Ivysaur','Grass','Poison',405,60,62,63,80,80,60,1,0,405),(3,'Venusaur','Grass','Poison',525,80,82,83,100,100,80,1,0,525),(4,'Charmander','Fire','',309,39,52,43,60,50,65,1,0,309),(5,'Charmeleon','Fire','',405,58,64,58,80,65,80,1,0,405),(6,'Charizard','Fire','Flying',534,78,84,78,109,85,100,1,0,534),(7,'Squirtle','Water','',314,44,48,65,50,64,43,1,0,314),(8,'Wartortle','Water','',405,59,63,80,65,80,58,1,0,405),(9,'Blastoise','Water','',530,79,83,100,85,105,78,1,0,530),(10,'Caterpie','Bug','',195,45,30,35,20,20,45,1,0,195),(11,'Metapod','Bug','',205,50,20,55,25,25,30,1,0,205),(12,'Butterfree','Bug','Flying',395,60,45,50,90,80,70,1,0,395),(13,'Weedle','Bug','Poison',195,40,35,30,20,20,50,1,0,195),(14,'Kakuna','Bug','Poison',205,45,25,50,25,25,35,1,0,205),(15,'Beedrill','Bug','Poison',395,65,90,40,45,80,75,1,0,395),(16,'Pidgey','Normal','Flying',251,40,45,40,35,35,56,1,0,251),(17,'Pidgeotto','Normal','Flying',349,63,60,55,50,50,71,1,0,349),(18,'Pidgeot','Normal','Flying',479,83,80,75,70,70,101,1,0,479),(19,'Rattata','Normal','',253,30,56,35,25,35,72,1,0,253),(20,'Raticate','Normal','',413,55,81,60,50,70,97,1,0,413),(21,'Spearow','Normal','Flying',262,40,60,30,31,31,70,1,0,262),(22,'Fearow','Normal','Flying',442,65,90,65,61,61,100,1,0,442),(23,'Ekans','Poison','',288,35,60,44,40,54,55,1,0,288),(24,'Arbok','Poison','',438,60,85,69,65,79,80,1,0,438),(25,'Pikachu','Electric','',320,35,55,40,50,50,90,1,0,320),(26,'Raichu','Electric','',485,60,90,55,90,80,110,1,0,485),(27,'Sandshrew','Ground','',300,50,75,85,20,30,40,1,0,300),(28,'Sandslash','Ground','',450,75,100,110,45,55,65,1,0,450),(29,'NidoranÃ¢â„¢â‚¬','Poison','',275,55,47,52,40,40,41,1,0,275),(30,'Nidorina','Poison','',365,70,62,67,55,55,56,1,0,365),(31,'Nidoqueen','Poison','Ground',505,90,92,87,75,85,76,1,0,505),(32,'NidoranÃ¢â„¢â€š','Poison','',273,46,57,40,40,40,50,1,0,273),(33,'Nidorino','Poison','',365,61,72,57,55,55,65,1,0,365),(34,'Nidoking','Poison','Ground',505,81,102,77,85,75,85,1,0,505),(35,'Clefairy','Fairy','',323,70,45,48,60,65,35,1,0,323),(36,'Clefable','Fairy','',483,95,70,73,95,90,60,1,0,483),(37,'Vulpix','Fire','',299,38,41,40,50,65,65,1,0,299),(38,'Ninetales','Fire','',505,73,76,75,81,100,100,1,0,505),(39,'Jigglypuff','Normal','Fairy',270,115,45,20,45,25,20,1,0,270),(40,'Wigglytuff','Normal','Fairy',435,140,70,45,85,50,45,1,0,435),(41,'Zubat','Poison','Flying',245,40,45,35,30,40,55,1,0,245),(42,'Golbat','Poison','Flying',455,75,80,70,65,75,90,1,0,455),(43,'Oddish','Grass','Poison',320,45,50,55,75,65,30,1,0,320),(44,'Gloom','Grass','Poison',395,60,65,70,85,75,40,1,0,395),(45,'Vileplume','Grass','Poison',490,75,80,85,110,90,50,1,0,490),(46,'Paras','Bug','Grass',285,35,70,55,45,55,25,1,0,285),(47,'Parasect','Bug','Grass',405,60,95,80,60,80,30,1,0,405),(48,'Venonat','Bug','Poison',305,60,55,50,40,55,45,1,0,305),(49,'Venomoth','Bug','Poison',450,70,65,60,90,75,90,1,0,450),(50,'Diglett','Ground','',265,10,55,25,35,45,95,1,0,265),(51,'Dugtrio','Ground','',405,35,80,50,50,70,120,1,0,405),(52,'Meowth','Normal','',290,40,45,35,40,40,90,1,0,290),(53,'Persian','Normal','',440,65,70,60,65,65,115,1,0,440),(54,'Psyduck','Water','',320,50,52,48,65,50,55,1,0,320),(55,'Golduck','Water','',500,80,82,78,95,80,85,1,0,500),(56,'Mankey','Fighting','',305,40,80,35,35,45,70,1,0,305),(57,'Primeape','Fighting','',455,65,105,60,60,70,95,1,0,455),(58,'Growlithe','Fire','',350,55,70,45,70,50,60,1,0,350),(59,'Arcanine','Fire','',555,90,110,80,100,80,95,1,0,555),(60,'Poliwag','Water','',300,40,50,40,40,40,90,1,0,300),(61,'Poliwhirl','Water','',385,65,65,65,50,50,90,1,0,385),(62,'Poliwrath','Water','Fighting',510,90,95,95,70,90,70,1,0,510),(63,'Abra','Psychic','',310,25,20,15,105,55,90,1,0,310),(64,'Kadabra','Psychic','',400,40,35,30,120,70,105,1,0,400),(65,'Alakazam','Psychic','',500,55,50,45,135,95,120,1,0,500),(66,'Machop','Fighting','',305,70,80,50,35,35,35,1,0,305),(67,'Machoke','Fighting','',405,80,100,70,50,60,45,1,0,405),(68,'Machamp','Fighting','',505,90,130,80,65,85,55,1,0,505),(69,'Bellsprout','Grass','Poison',300,50,75,35,70,30,40,1,0,300),(70,'Weepinbell','Grass','Poison',390,65,90,50,85,45,55,1,0,390),(71,'Victreebel','Grass','Poison',490,80,105,65,100,70,70,1,0,490),(72,'Tentacool','Water','Poison',335,40,40,35,50,100,70,1,0,335),(73,'Tentacruel','Water','Poison',515,80,70,65,80,120,100,1,0,515),(74,'Geodude','Rock','Ground',300,40,80,100,30,30,20,1,0,300),(75,'Graveler','Rock','Ground',390,55,95,115,45,45,35,1,0,390),(76,'Golem','Rock','Ground',495,80,120,130,55,65,45,1,0,495),(77,'Ponyta','Fire','',410,50,85,55,65,65,90,1,0,410),(78,'Rapidash','Fire','',500,65,100,70,80,80,105,1,0,500),(79,'Slowpoke','Water','Psychic',315,90,65,65,40,40,15,1,0,315),(80,'Slowbro','Water','Psychic',490,95,75,110,100,80,30,1,0,490),(81,'Magnemite','Electric','Steel',325,25,35,70,95,55,45,1,0,325),(82,'Magneton','Electric','Steel',465,50,60,95,120,70,70,1,0,465),(83,'Farfetch\'d','Normal','Flying',352,52,65,55,58,62,60,1,0,352),(84,'Doduo','Normal','Flying',310,35,85,45,35,35,75,1,0,310),(85,'Dodrio','Normal','Flying',460,60,110,70,60,60,100,1,0,460),(86,'Seel','Water','',325,65,45,55,45,70,45,1,0,325),(87,'Dewgong','Water','Ice',475,90,70,80,70,95,70,1,0,475),(88,'Grimer','Poison','',325,80,80,50,40,50,25,1,0,325),(89,'Muk','Poison','',500,105,105,75,65,100,50,1,0,500),(90,'Shellder','Water','',305,30,65,100,45,25,40,1,0,305),(91,'Cloyster','Water','Ice',525,50,95,180,85,45,70,1,0,525),(92,'Gastly','Ghost','Poison',310,30,35,30,100,35,80,1,0,310),(93,'Haunter','Ghost','Poison',405,45,50,45,115,55,95,1,0,405),(94,'Gengar','Ghost','Poison',500,60,65,60,130,75,110,1,0,500),(95,'Onix','Rock','Ground',385,35,45,160,30,45,70,1,0,385),(96,'Drowzee','Psychic','',328,60,48,45,43,90,42,1,0,328),(97,'Hypno','Psychic','',483,85,73,70,73,115,67,1,0,483),(98,'Krabby','Water','',325,30,105,90,25,25,50,1,0,325),(99,'Kingler','Water','',475,55,130,115,50,50,75,1,0,475),(100,'Voltorb','Electric','',330,40,30,50,55,55,100,1,0,330),(101,'Electrode','Electric','',480,60,50,70,80,80,140,1,0,480),(102,'Exeggcute','Grass','Psychic',325,60,40,80,60,45,40,1,0,325),(103,'Exeggutor','Grass','Psychic',520,95,95,85,125,65,55,1,0,520),(104,'Cubone','Ground','',320,50,50,95,40,50,35,1,0,320),(105,'Marowak','Ground','',425,60,80,110,50,80,45,1,0,425),(106,'Hitmonlee','Fighting','',455,50,120,53,35,110,87,1,0,455),(107,'Hitmonchan','Fighting','',455,50,105,79,35,110,76,1,0,455),(108,'Lickitung','Normal','',385,90,55,75,60,75,30,1,0,385),(109,'Koffing','Poison','',340,40,65,95,60,45,35,1,0,340),(110,'Weezing','Poison','',490,65,90,120,85,70,60,1,0,490),(111,'Rhyhorn','Ground','Rock',345,80,85,95,30,30,25,1,0,345),(112,'Rhydon','Ground','Rock',485,105,130,120,45,45,40,1,0,485),(113,'Chansey','Normal','',450,250,5,5,35,105,50,1,0,450),(114,'Tangela','Grass','',435,65,55,115,100,40,60,1,0,435),(115,'Kangaskhan','Normal','',490,105,95,80,40,80,90,1,0,490),(116,'Horsea','Water','',295,30,40,70,70,25,60,1,0,295),(117,'Seadra','Water','',440,55,65,95,95,45,85,1,0,440),(118,'Goldeen','Water','',320,45,67,60,35,50,63,1,0,320),(119,'Seaking','Water','',450,80,92,65,65,80,68,1,0,450),(120,'Staryu','Water','',340,30,45,55,70,55,85,1,0,340),(121,'Starmie','Water','Psychic',520,60,75,85,100,85,115,1,0,520),(122,'Mr. Mime','Psychic','Fairy',460,40,45,65,100,120,90,1,0,460),(123,'Scyther','Bug','Flying',500,70,110,80,55,80,105,1,0,500),(124,'Jynx','Ice','Psychic',455,65,50,35,115,95,95,1,0,455),(125,'Electabuzz','Electric','',490,65,83,57,95,85,105,1,0,490),(126,'Magmar','Fire','',495,65,95,57,100,85,93,1,0,495),(127,'Pinsir','Bug','',500,65,125,100,55,70,85,1,0,500),(128,'Tauros','Normal','',490,75,100,95,40,70,110,1,0,490),(129,'Magikarp','Water','',200,20,10,55,15,20,80,1,0,200),(130,'Gyarados','Water','Flying',540,95,125,79,60,100,81,1,0,540),(131,'Lapras','Water','Ice',535,130,85,80,85,95,60,1,0,535),(132,'Ditto','Normal','',288,48,48,48,48,48,48,1,0,288),(133,'Eevee','Normal','',325,55,55,50,45,65,55,1,0,325),(134,'Vaporeon','Water','',525,130,65,60,110,95,65,1,0,525),(135,'Jolteon','Electric','',525,65,65,60,110,95,130,1,0,525),(136,'Flareon','Fire','',525,65,130,60,95,110,65,1,0,525),(137,'Porygon','Normal','',395,65,60,70,85,75,40,1,0,395),(138,'Omanyte','Rock','Water',355,35,40,100,90,55,35,1,0,355),(139,'Omastar','Rock','Water',495,70,60,125,115,70,55,1,0,495),(140,'Kabuto','Rock','Water',355,30,80,90,55,45,55,1,0,355),(141,'Kabutops','Rock','Water',495,60,115,105,65,70,80,1,0,495),(142,'Aerodactyl','Rock','Flying',515,80,105,65,60,75,130,1,0,515),(143,'Snorlax','Normal','',540,160,110,65,65,110,30,1,0,540),(144,'Articuno','Ice','Flying',580,90,85,100,95,125,85,1,1,680),(145,'Zapdos','Electric','Flying',580,90,90,85,125,90,100,1,1,680),(146,'Moltres','Fire','Flying',580,90,100,90,125,85,90,1,1,680),(147,'Dratini','Dragon','',300,41,64,45,50,50,50,1,0,300),(148,'Dragonair','Dragon','',420,61,84,65,70,70,70,1,0,420),(149,'Dragonite','Dragon','Flying',600,91,134,95,100,100,80,1,0,600),(150,'Mewtwo','Psychic','',680,106,110,90,154,90,130,1,1,780),(151,'Mew','Psychic','',600,100,100,100,100,100,100,1,0,600);
/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainer`
--

DROP TABLE IF EXISTS `trainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `wallet` int(11) DEFAULT NULL,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer`
--

LOCK TABLES `trainer` WRITE;
/*!40000 ALTER TABLE `trainer` DISABLE KEYS */;
INSERT INTO `trainer` VALUES (1,'player',1000,0,0,0,0),(2,'Youngster Joey',0,180,23,57,40);
/*!40000 ALTER TABLE `trainer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-12 23:35:34
