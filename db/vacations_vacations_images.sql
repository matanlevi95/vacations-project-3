CREATE DATABASE  IF NOT EXISTS `vacations` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vacations`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vacations_images`
--

DROP TABLE IF EXISTS `vacations_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vacation_id` varchar(10) NOT NULL,
  `image_url` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations_images`
--

LOCK TABLES `vacations_images` WRITE;
/*!40000 ALTER TABLE `vacations_images` DISABLE KEYS */;
INSERT INTO `vacations_images` VALUES (10,'1','https://img.grouponcdn.com/deal/imvhYjeFsbSgcQyauAU7/et-960x582/v1/c700x420.jpg'),(11,'1','https://img.grouponcdn.com/deal/h5pSyw5qnL6hrWYZyYyi/Da-960x576/v1/c700x420.jpg'),(12,'1','https://img.grouponcdn.com/deal/52xVDt9AT5Nn9NMnJBc9/Pa-960x582/v1/c700x420.jpg'),(13,'1','https://img.grouponcdn.com/deal/4kQeJhUDDGgf9nsQHBmT/Le-960x582/v1/c700x420.jpg'),(14,'1','https://img.grouponcdn.com/deal/fAE6vGys9HWnEquswNSjg7iAa6o/fA-1732x1039/v1/c700x420.jpg'),(15,'2','https://img.grouponcdn.com/deal/5D1J69weePom2KRQ3WfS/pb-960x576/v1/c620x376.jpg'),(16,'2','https://img.grouponcdn.com/deal/7JoMD63z9srkTEfVMdmp/cs-960x576/v1/c620x376.jpg'),(17,'2','https://img.grouponcdn.com/deal/m3J3MwbyJcJcfMriiA1R/ot-960x576/v1/c620x376.jpg'),(18,'2','https://img.grouponcdn.com/deal/8GKt1FmYrgKkekvbf94p/8g-960x576/v1/c620x376.jpg'),(19,'2','https://img.grouponcdn.com/deal/iPiJLnW1XePjVLFvWtRV/tH-960x576/v1/c620x376.jpg'),(20,'3','https://img.grouponcdn.com/deal/qSNxxAHjQAZY4XRkvdDHMdSTJL2/qS-2048x1229/v1/c620x376.jpg'),(21,'3','https://img.grouponcdn.com/deal/4YvvyqE7c7U3J2qyUaYSnfFVdi36/4Y-2048x1229/v1/c620x376.jpg'),(22,'3','https://img.grouponcdn.com/deal/4TEUMz1NPF9MryGyUuSw7roB64AP/4T-2048x1229/v1/c620x376.jpg'),(23,'3','https://img.grouponcdn.com/deal/3PSD21WyMwGwxe4oq7uDKfaZSwm2/3P-2048x1229/v1/c620x376.jpg'),(24,'3','https://img.grouponcdn.com/deal/2rXt4JRAyCT3TQuEbGaZobdemodH/2r-1500x900/v1/c620x376.jpg'),(25,'4','https://img.grouponcdn.com/deal/qCeTutkotWdqDZmbfZGS/JD-960x582/v1/c700x420.jpg'),(26,'4','https://img.grouponcdn.com/deal/mbzuKHgVB8Vf1GvwCx9s/iU-960x582/v1/c700x420.jpg'),(27,'4','https://img.grouponcdn.com/deal/bG7vk4zbef84g8GwrUHt/5s-960x582/v1/c700x420.jpg'),(28,'4','https://img.grouponcdn.com/deal/dZehf6NZcZ7Ywo8XM7URpThadar/dZ-2048x1229/v1/c700x420.jpg'),(29,'4','https://img.grouponcdn.com/deal/28xBWb454Xsb9eATbh52fZKAzMcw/28-900x540/v1/c700x420.jpg'),(30,'6','https://www.governmenteuropa.eu/wp-content/uploads/2019/07/river.jpg'),(31,'6','https://physicsworld.com/wp-content/uploads/2019/09/Concave-river.jpg'),(32,'5','https://www.governmenteuropa.eu/wp-content/uploads/2019/07/river.jpg'),(33,'6','https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/manawatu_river.jpg?itok=2rx262Kd'),(34,'6','https://media-cdn.tripadvisor.com/media/photo-s/13/f4/1c/6c/aragvi-river.jpg'),(35,'7','https://physicsworld.com/wp-content/uploads/2019/09/Concave-river.jpg');
/*!40000 ALTER TABLE `vacations_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-15 21:10:29
