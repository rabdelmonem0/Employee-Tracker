const inquirer = require("inquirer");
const connection = require("./db/connection");
const db = require("./db/index");
require("console.table");

const employeeArr = [];
const allEmployees = [];

function initApp() {
  start();
}

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "trackerChoice",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Employees",
          "View All Roles",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "QUIT"
        ],
      },
    ])
    .then((choice) => {
      console.log(choice.trackerChoice);
      switch (choice.trackerChoice) {
        case "View All Departments":
            viewAllDepartments();
            break;
        case "View All Employees":
            viewAllEmployees();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Add Role":
            addRole();
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
        case "QUIT":
            quit();
            break;
        }
    });
}

function viewAllDepartments() {
//   const employees = await db.getAllEmployee();
//   allEmployees.push(employees);
let query = "SELECT * FROM department";
connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
})
}

function viewAllEmployees() {
let query = "SELECT * FROM employee";
connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
})
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
  await inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee's ID",
      },
      {
        type: "imput",
        name: "managerId",
        message: "What is the manager ID?",
      },
    ])
    .then((answers) => {
      // const employee = await db.createEmployee();
      // (
      //     answers.firstName,
      //     answers.lastName,
      //     answers.employeeRole,
      //     answers.employeeManager
      // );
      // employeeArr.push(employee);

      connection.query(
        "INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answers.firstName,
          answers.lastName,
          answers.employeeId,
          answers.managerId,
        ],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
}
async function addDepartment() {
    await inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What is the department name?'
    })
    .then((answer) => {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.department], function(err,res){
            if (err) throw err;
            console.table(res)
            start();
        })
    })
}

async function addRole() {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of this role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of this role?'
        },
        {
            type: 'input',
            name: 'departmentId',
            messgae: 'What is the department ID for this role?'
        }
    ])
    .then((answers) => {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", 
        [
            answers.role,
            answers.salary,
            answers.departmentId
        ],
        function(err,res) {
            if (err) throw err;
            console.table(res);
            start();
        })
    })
}

function removeEmployee() {}

function updateEmployeeRole() {}

function updateManagerRole() {}

function viewAllRoles() {
let query = "SELECT * FROM role";
connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
})
}

function quit() {
    connection.end();
    process.exit();
}

initApp();
