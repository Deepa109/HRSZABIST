
const TotalEmployees_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/TotalEmployees";
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

fetch(TotalEmployees_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch employees DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#TotalEmployees tbody");

    tbody.innerHTML = "";

    data.forEach(employee=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        
      <td class="text-center">${employee.count}</td>
        
          
 `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});

});
