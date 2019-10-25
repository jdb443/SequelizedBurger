DROP DATABASE IF EXISTS `gcjvqmp1mxqht2xo`;

CREATE DATABASE `gcjvqmp1mxqht2xo`;
USE `gcjvqmp1mxqht2xo`;

-- DROP TABLE IF EXISTS burgerssq;

<<<<<<< HEAD
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Ramen Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Pizza Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Shroom Burger", false);
=======
CREATE TABLE burgerssq (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgerssq (name, devoured) VALUES ("Ramen Burger", false);
INSERT INTO burgerssq (name, devoured) VALUES ("Pizza Burger", true);
INSERT INTO burgerssq (name, devoured) VALUES ("Shroom Burger", false);
>>>>>>> 915b8c10e9ac2fec51788dac84a999a24302575c

SELECT * FROM burgers;
