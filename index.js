const path = require("path");
const inquirer = require("inquirer");


function initApp() {
    start();
}

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'trackerChoice',
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
                viewEmployeeDept();
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

function viewEmployeeDept(){

}

function viewManager() {

}

function addEmployee() {

}

function removeEmployee() {

}

function updateEmployeeRole() {

}

function updateManagerRole() {

}

function viewAllRoles() {

}