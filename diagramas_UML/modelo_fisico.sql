-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_oficina
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `agendamentos`
--

DROP TABLE IF EXISTS `agendamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamentos` (
  `codAgendamento` int NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `idCiclista` int NOT NULL,
  `idBicicleta` int NOT NULL,
  PRIMARY KEY (`codAgendamento`),
  KEY `idCiclista` (`idCiclista`),
  KEY `idBicicleta` (`idBicicleta`),
  CONSTRAINT `agendamentos_ibfk_1` FOREIGN KEY (`idCiclista`) REFERENCES `ciclistas` (`codCiclista`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `agendamentos_ibfk_2` FOREIGN KEY (`idBicicleta`) REFERENCES `bicicletas` (`codBicicleta`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamentos`
--

LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
INSERT INTO `agendamentos` VALUES (1,'2026-10-01','06:52:00',2,1),(2,'2026-09-16','01:00:00',2,2);
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bicicletas`
--

DROP TABLE IF EXISTS `bicicletas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bicicletas` (
  `codBicicleta` int NOT NULL AUTO_INCREMENT,
  `modelo` enum('TRILHA','ESPORTE') NOT NULL,
  `tipo` enum('MOUNTAIN','SPEED') NOT NULL,
  `aro` int NOT NULL,
  `idCiclista` int NOT NULL,
  PRIMARY KEY (`codBicicleta`),
  KEY `idCiclista` (`idCiclista`),
  CONSTRAINT `bicicletas_ibfk_1` FOREIGN KEY (`idCiclista`) REFERENCES `ciclistas` (`codCiclista`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bicicletas`
--

LOCK TABLES `bicicletas` WRITE;
/*!40000 ALTER TABLE `bicicletas` DISABLE KEYS */;
INSERT INTO `bicicletas` VALUES (1,'TRILHA','MOUNTAIN',6,2),(2,'ESPORTE','SPEED',20,2);
/*!40000 ALTER TABLE `bicicletas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclistas`
--

DROP TABLE IF EXISTS `ciclistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciclistas` (
  `codCiclista` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `celular` varchar(100) NOT NULL,
  PRIMARY KEY (`codCiclista`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclistas`
--

LOCK TABLES `ciclistas` WRITE;
/*!40000 ALTER TABLE `ciclistas` DISABLE KEYS */;
INSERT INTO `ciclistas` VALUES (2,'lucas','lucas@gmail.com','U2FsdGVkX18rwPTEWLZl780K5yztH24v7OIhYQa5K+g=','U2FsdGVkX1+gNphlFWIGEtIpG7IZkyrfBlQ+To1jxrU=','rua c','098765432');
/*!40000 ALTER TABLE `ciclistas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-04 12:19:57
