DROP DATABASE IF EXISTS `gcjvqmp1mxqht2xo`;

CREATE DATABASE `gcjvqmp1mxqht2xo`;
USE `gcjvqmp1mxqht2xo`;

-- DROP TABLE IF EXISTS burgerssq;

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

SELECT * FROM burgers;
