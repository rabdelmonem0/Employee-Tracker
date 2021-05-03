const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");

const employeeArr = [];
const allEmployees = [];

function initApp() {
    start();
}

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'trackerChoice',
            message: 'What would you like to do?',
            choices: [
                'View All Employees By Department',
                'View All Employees By Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View All Roles'
            ]
        }
    ])
    .then(choice => {
        console.log(choice.trackerChoice)
        switch(choice.trackerChoice) {
            case 'View All Employees By Department':
                viewAllEmployees();
                break;
            case 'View All Employees By Manager'  :
                viewManager();
                break;  
            case 'Add Employee':
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Manager Role":
                updateManagerRole();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            }
    })  
}

async function viewAllEmployees() {
    const employees = await db.getAllEmployee();
    allEmployees.push(employees);
    start()
}

function viewManager() {

}

async function addEmployee() {
    // get all roles from the database
    // get all employees from the database

    // const newEmployee = await inquirer.prompt(questions for a new employee)
        // ask first and last name
        // show role choices
        // give manager --> map through all employees
        // set manager.id
        // await db.createEmployee(newEmployee)
        const newEmployee = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?",
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's last name?",
            },
            {
                type: 'list',
                name: 'employeeRole',
                message: "What is the employee's role?",
                choices: [
                    'Sales Lead',
                    'Salesperson',
                    'Lead Engineer',
                    'Software Engineer',
                    'Account Manager',
                    'Accountant',
                    'Legal Team Lead',
                    'Lawyer',
                ]
            },
            {
                type: 'list',
                name: 'employeeManager',
                message: "Who is the employee's manager?",
                choices: [
                    'Rwan Abdelmonem',
                    'Belal Tabanaj',
                    'Rayan Tabannaj',
                    'None'
                ]
            }
        ])
        .then(async (answers) => {
            const employee = await db.createEmployee();
            (
                answers.firstName, 
                answers.lastName, 
                answers.employeeRole, 
                answers.employeeManager
            );
            employeeArr.push(employee);

            // connection.query("INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
            // [
            //     answers.firstName, 
            //     answers.lastName, 
            //     answers.employeeRole, 
            //     answers.employeeManager
            // ], 
            // function(err, res) {
            //     if (err) throw err;
            //     console.table(res);
            start();
        });
}


function removeEmployee() {

}

function updateEmployeeRole() {

}

function updateManagerRole() {

}

function viewAllRoles() {

}

initApp();