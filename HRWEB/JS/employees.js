const employees_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/employees";




fetch(employees_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch employees DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#employeestable tbody");

    data.forEach(employees=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${employees.employee_id}</td>
        <td>${employees.first_name}</td>
        <td>${employees.last_name}</td>
        <td>${employees.email}</td>
        <td>${employees.phone_number}</td>
        <td>${employees.hire_date}</td>
        <td>${employees.job_id}</td>
        <td>${employees.salary}</td>
        <td>${employees.commission_pct}</td>
        <td>${employees.manager_id}</td>
        <td>${employees.department_id}</td>
          
 `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});



