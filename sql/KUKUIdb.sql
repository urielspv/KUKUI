-- MySQL Script generated by MySQL Workbench
-- Tue Mar 21 15:28:33 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema KUKUIdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema KUKUIdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `KUKUIdb` DEFAULT CHARACTER SET utf8 ;
USE `KUKUIdb` ;

-- -----------------------------------------------------
-- Table `KUKUIdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(55) NULL,
  `password` VARCHAR(55) NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KUKUIdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `categoriascol` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KUKUIdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(45) NULL,
  `precio` DOUBLE NULL,
  `stock` INT NULL,
  `categorias_idcategorias` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categorias_idcategorias`),
  INDEX `fk_productos_categorias1_idx` (`categorias_idcategorias` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_idcategorias`)
    REFERENCES `KUKUIdb`.`categorias` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KUKUIdb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`pedidos` (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `monto_pedido` DOUBLE NULL,
  `fecha_envio` DATE NULL,
  `fecha_entrega` DATE NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idpedidos`, `usuarios_idusuarios`),
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `KUKUIdb`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KUKUIdb`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`direccion` (
  `iddireccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(70) NULL,
  `colonia` VARCHAR(45) NULL,
  `codigopostal` VARCHAR(45) NULL,
  `ciudad` VARCHAR(100) NULL,
  `estados` VARCHAR(80) NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`iddireccion`, `usuarios_idusuarios`),
  INDEX `fk_direccion_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `KUKUIdb`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KUKUIdb`.`product_has_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KUKUIdb`.`product_has_pedidos` (
  `productos_idproductos` INT NOT NULL,
  `pedidos_idpedidos` INT NOT NULL,
  PRIMARY KEY (`productos_idproductos`, `pedidos_idpedidos`),
  INDEX `fk_product_has_pedidos_pedidos1_idx` (`pedidos_idpedidos` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_pedidos_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `KUKUIdb`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_idpedidos`)
    REFERENCES `KUKUIdb`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;