const backendUrl = "http://localhost:8090/deloitte-jax-rs-demo/employees";
const departmentUrl = "http://localhost:8090/deloitte-jax-rs-demo/departments"; // Adjust as needed

// Function to view all employees
function viewAllEmployees() {
    fetch(backendUrl)
        .then(response => response.json())
        .then(data => {
            let html = "<table class='table table-bordered'><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
            data.forEach(employee => {
                html += `<tr><td>${employee.id}</td><td>${employee.firstName}</td><td>${employee.salary}</td></tr>`;
            });
            html += "</table>";
            document.getElementById("employeeList").innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

// Function to add an employee
function addEmployee() {
    const firstName = document.getElementById("addFirstName").value;
    const salary = document.getElementById("addSalary").value;

    const employee = {
        firstName: firstName,
        salary: salary
    };

    fetch(backendUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("addResult").innerText = "Employee added successfully!";
            viewAllEmployees();  // Refresh the employee list
        })
        .catch(error => console.error('Error:', error));
}

// Function to view all departments
function viewAllDepartments() {
    fetch(departmentUrl)
        .then(response => response.json())
        .then(data => {
            let html = "<table class='table table-bordered'><tr><th>ID</th><th>Name</th><th>Location</th></tr>";
            data.forEach(department => {
                html += `<tr><td>${department.id}</td><td>${department.name}</td><td>${department.location}</td></tr>`;
            });
            html += "</table>";
            document.getElementById("departmentList").innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

// Function to add a department
function addDepartment() {
    const departmentName = document.getElementById("addDepartmentName").value;
    const departmentLocation = document.getElementById("addDepartmentLocation").value;

    const department = {
        name: departmentName,
        location: departmentLocation
    };

    fetch(departmentUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(department),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("addDepartmentResult").innerText = "Department added successfully!";
            viewAllDepartments();  // Refresh the department list
        })
        .catch(error => console.error('Error:', error));
}
