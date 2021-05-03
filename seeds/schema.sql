CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE Department(
	id int PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE Role(
	id int PRIMARY KEY,
	title VARCHAR(30),
	salary DECIMAL,
	department_id INT
);

CREATE TABLE Employee(
	id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);