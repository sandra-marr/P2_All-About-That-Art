-- MySQL dump 10.13  Distrib 8.0.25, for macos11.3 (x86_64)
--
-- Host: localhost    Database: art_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artwork`
--

DROP TABLE IF EXISTS `artwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `public_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `artwork_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork`
--

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;
INSERT INTO `artwork` VALUES (1,'Sailing','This is a painting of a sailboat','Painting',1,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198422/gkuc2yryl0fyafuiqueh.jpg',NULL),(2,'Lighthouse','This is a painting of a lighthouse','Painting',1,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198386/xdclzozghd1tqam5cxeo.jpg',NULL),(3,'Lonely','This is a painting of a sad cat.','Painting',2,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198259/yzhpkhovryaiep1gvyvd.jpg',NULL),(4,'Midnight','This is a painting of my cat, Midnight. She is cute and cuddly.','Painting',2,'https://res.cloudinary.com/dh11quph3/image/upload/v1625188754/qtyhlsr1v7z8mzywrjuu.jpg',NULL),(5,'Bright Lights','This is a painting of a lighning cat!','Painting',2,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198347/pod9ssnkwlhryhwmja6p.jpg',NULL),(6,'Mountains','This is a painting of the mountains','Painting',1,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198445/umgderacdubb3gfrqddf.jpg',NULL),(7,'Steve the Snail','This is a sculpture of a lego man and a snail.','Sculpture',3,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198473/nzqn35razx2v2hh8iwvz.jpg',NULL),(8,'Animals','This is a clay sculpture of a fish and stuff.','Sculpture',3,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198499/flhwwohtex5s6r5hyybw.jpg',NULL),(9,'Green Jeans','This is a vintage car.','Photography',4,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198528/lqyn1kusqui9ilnyczx7.jpg',NULL),(10,'Taxi Cab','This is another vintage car.','Photography',4,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198557/kkasw86dugb6cr7yn0xh.jpg',NULL),(11,'Beetles','This is an old VW beetle.','Photography',4,'https://res.cloudinary.com/dh11quph3/image/upload/v1625198583/fdzfb9e2niqg78n8dpjm.jpg',NULL);
/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogpost`
--

DROP TABLE IF EXISTS `blogpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogpost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_body` varchar(255) NOT NULL,
  `post_date` date NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `blogpost_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogpost`
--

LOCK TABLES `blogpost` WRITE;
/*!40000 ALTER TABLE `blogpost` DISABLE KEYS */;
/*!40000 ALTER TABLE `blogpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_body` varchar(255) NOT NULL,
  `comment_date` date NOT NULL,
  `user_id` int NOT NULL,
  `art_id` int DEFAULT NULL,
  `blog_post_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `art_id` (`art_id`),
  KEY `blog_post_id` (`blog_post_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`art_id`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`blog_post_id`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `data` longblob,
  `link` varchar(255) DEFAULT NULL,
  `art_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `art_id` (`art_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`art_id`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'sad cat',NULL,'./public/assets/images/sadcat.jpeg',2),(2,'lightning cat',NULL,'./public/assets/images/lightningcat.jpeg',3),(3,'black cat',NULL,'./public/assets/images/blackcat.jpeg',1),(4,'lighthouse',NULL,'./public/assets/images/lighthouse.jpeg',4),(5,'sailing',NULL,'./public/assets/images/sailing.jpeg',5),(6,'mountains',NULL,'./public/assets/images/mountains.jpeg',6),(7,'snail sculpture',NULL,'./public/assets/images/snail-sculpture.jpeg',7),(8,'clay sculpture',NULL,'./public/assets/images/clay-sculpture.jpeg',8),(9,'green vintage',NULL,'./public/assets/images/green-vintage-car.jpeg',9),(10,'yellow taxi',NULL,'./public/assets/images/yellow-taxi.jpeg',10),(11,'VW Beetle',NULL,'./public/assets/images/red_VW-bug.jpeg',11);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommendation`
--

DROP TABLE IF EXISTS `recommendation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommendation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommendation`
--

LOCK TABLES `recommendation` WRITE;
/*!40000 ALTER TABLE `recommendation` DISABLE KEYS */;
INSERT INTO `recommendation` VALUES (1,'Art Institute of Chicago','Chicago','museum','https://www.artic.edu/'),(2,'Metropolitan Museum of Art','New York City','museum','https://www.metmuseum.org/'),(3,'Smithsonian American Art Museum','Washington, D.C','museum','https://americanart.si.edu/'),(4,'Museum of Fine Arts','Boston','museum','https://www.mfa.org/'),(5,'National Gallery of Art','Washington, D.C','museum','https://www.nga.gov/'),(6,'Museum of Modern Art','New York City','museum','https://www.moma.org/'),(7,'Los Angeles County Museum of Art','Los Angeles','museum','https://www.lacma.org/'),(8,'Philadelphia Museum of Art','Philadelphia','museum','https://philamuseum.org/'),(9,'Museum of Fine Arts','Houston','museum','https://www.mfah.org/'),(10,'J Paul Getty Museum','Los Angeles','museum','https://www.getty.edu/museum/'),(11,'AMcE Creative Arts','Seattle','gallery','https://amcecreativearts.com/'),(12,'Bonfire Gallery','Seattle','gallery','https://www.thisisbonfire.com/'),(13,'Core Gallery','Seattle','gallery','https://www.coregallery.org/'),(14,'Fountainhead Gallery','Seattle','gallery','https://www.fountainheadgallery.com/');
/*!40000 ALTER TABLE `recommendation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Session` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` VALUES ('5izX5zlxhzY_-xGpGbcwjAmEM0bky995','2021-07-08 20:36:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":5,\"logged_in\":true}','2021-07-07 15:34:40','2021-07-07 20:36:13'),('7btkW7bJUiPtbYzys0uPK2AZNKWmkJvn','2021-07-09 00:54:47','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2021-07-08 00:54:47','2021-07-08 00:54:47'),('BctdVrpEctceYpyZnTRsvTSdYZo5nRVv','2021-07-08 15:34:25','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2021-07-07 15:34:25','2021-07-07 15:34:25');
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `is_artist` tinyint(1) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `media` varchar(255) DEFAULT NULL,
  `linked_in` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'artizcool',1,'ilikeart@gmail.com','$2b$10$KhsjfmBdVe3nCV0FwWLW/.KIafezarxqmIpqR.Up.MKLlLRqmxh8y','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ipsam omnis inventore amet ratione adipisci facilis eius alias repudiandae libero officiis voluptatibus dignissimos rem dolor reprehenderit, deserunt tenetur nisi.','Painting','sampleLinkedIn',NULL,NULL,NULL),(2,'Sal',1,'sal@hotmail.com','$2b$10$ykXsCRhZ8PMwyqn7CZCgeOrEL4N65P5XwY7m37hcS4zm6Q/EIIozS','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ipsam omnis inventore amet ratione adipisci facilis eius alias repudiandae libero officiis voluptatibus dignissimos rem dolor reprehenderit, deserunt tenetur nisi.','Painting',NULL,'sampleInstagram',NULL,NULL),(3,'Lernantino',1,'lernantino@gmail.com','$2b$10$N27/trYGucoCBq.bEyvjrORBRyAQBtFUGY2196jTsZUKCjdT5MUqG','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ipsam omnis inventore amet ratione adipisci facilis eius alias repudiandae libero officiis voluptatibus dignissimos rem dolor reprehenderit, deserunt tenetur nisi.','Sculpture','sampleLinkedIn','sampleInstagram',NULL,NULL),(4,'Amiko',1,'amiko2k20@aol.com','$2b$10$UvAlEma3pqP9NyfPB.ZnheJbzG/GlTqpNJsvmnOTraY1Pqv.Rs33i','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ipsam omnis inventore amet ratione adipisci facilis eius alias repudiandae libero officiis voluptatibus dignissimos rem dolor reprehenderit, deserunt tenetur nisi.','Photography',NULL,NULL,NULL,NULL),(5,'Sandy',1,'sandy@sandy.com','$2b$10$LM1aXPI1Ja7pi7OhINQdwu71XFGSS6eigfmLpDd5M/KWr3ilgss/m','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ipsam omnis inventore amet ratione adipisci facilis eius alias repudiandae libero officiis voluptatibus dignissimos rem dolor reprehenderit, deserunt tenetur nisi.','Photography','https://www.linkedin.com/in/sandra-r-marr/','https://www.instagram.com/srpeters44/',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-07 19:33:16
