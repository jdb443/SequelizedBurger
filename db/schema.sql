-- DROP DATABASE IF EXISTS burgerssq_db;

-- CREATE DATABASE burgerssq_db;
USE `process.env.DATA_DATABASE`;

CREATE TABLE burgerssq (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);