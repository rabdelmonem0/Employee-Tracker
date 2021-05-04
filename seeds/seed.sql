USE employees;
​
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Corporate'),
    ('Finance'),
    ('Human Resources');
​
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 55000, 1),
    ('Salesperson', 80000, 1),
    ('Receptionist', 30000, 2),
    ('Accountant Manager', 50000, 3),
    ('Assistant To The Regional Manager', 50000, 2),
    ('Accountant', 45000, 3),
    ('Regional Manager', 80000, 2);
​
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("David", "Wallace", 1, null)
    ("Michael", "Scott", 2, 1), 
    ("Pam", "Beesly", 3, 2), 
    ("Jim", "Halpert", 4, 2), 
    ("Dwight", "Shrute", 5, 4),
    ("Angela", "Martin", 6, 2),
    ("Kevin", "Malone", 7, 6),
    ("Oscar", "Martinez", 8, 6),
    ("Toby", "Flenderson", 9, 1);