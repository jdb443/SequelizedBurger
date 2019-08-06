DROP DATABASE IF EXISTS `gcjvqmp1mxqht2xo`;

CREATE DATABASE `gcjvqmp1mxqht2xo`;
USE `gcjvqmp1mxqht2xo`;

-- DROP TABLE IF EXISTS burgerssq;

CREATE TABLE burgerssq (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgerssq (burger_name, devoured) VALUES ("Ramen Burger", false);
INSERT INTO burgerssq (burger_name, devoured) VALUES ("Pizza Burger", true);
INSERT INTO burgerssq (burger_name, devoured) VALUES ("Shroom Burger", false);

SELECT * FROM burgerssq;
