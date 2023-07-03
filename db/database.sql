create database creapi;

use creapi;

create table empleados (
	id_empleado INT(3) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) DEFAULT NULL,
    edad INT(4) DEFAULT NULL,
    PRIMARY KEY (id_empleado)
);

INSERT INTO empleados VALUES
(1, 'Miguel', 27),
(2, 'Marcos', 57),
(3, 'Robert', 43),
(4, 'Rocio', 34),
(5, 'Angie', 25);