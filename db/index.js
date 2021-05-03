// declar a DB class that handles all the database queries
    // these queries will be called by the index.js functions

// getAllEmployee() {
    // return this.connection.query(
        // our query
    // )
// }
const connection = require('./connection.js');

class DB {
    constuctor(connection) {
        this.connection = connection;
    }

    getAllEmployees() {
        return this.connection.query("SELECT Employee.id, Employee.first_name, Employee.last_name, Role.title, Department.name AS Department, Role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager FROM Employee LEFT JOIN role on Employee.role_id = Role.id LEFT JOIN Department on Role.department_id = Department.id LEFT JOIN Employee Manager on Manager.id = Employee.manager_id")
    }

    createEmployee(newEmployee) {
        return this.connection.query("INSERT INTO Employee SET ?", newEmployee)
    }
}

module.exports = new DB(connection);