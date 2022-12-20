const fs = require('fs');


function generateHTML(employeeList) {
    // Creates an empty array to push individual team members cards onto
    const teamHTML = [];

    // Mapping through team array to create cards
    employeeList.map(member => { 
        switch(member.getRole()) {

            // If Manager, create manager html card
            case 'Manager' : 
                // Create and push custom card into teamHTML array
                teamHTML.push(`<div class="card d-flex" style="width: 16rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-white"><span class="name">${member.name}</span><br><span class="role">${member.getRole()} &#x2654;</span></li>
                <li class="list-group-item"><span class="title">Email:</span> <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item"><span class="title">ID:</span> ${member.id}</li>
                <li class="list-group-item"><span class="title">Office number:</span> ${member.officeNumber}</li>
            </ul>
        </div>`);
            break;

            // If Intern, create intern html card
            case 'Intern' : 
                // Create and push custom card into teamHTML array
                teamHTML.push(`<div class="card d-flex" style="width: 16rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white"><span class="name">${member.name}</span><br><span class="role">${member.getRole()} &#x2659;</span></li>
                    <li class="list-group-item"><span class="title">Email:</span> <a href="mailto:${member.email}" target="_blank">${member.email}</a></li>
                    <li class="list-group-item"><span class="title">ID:</span> ${member.id}</li>
                    <li class="list-group-item"><span class="title">School: </span> ${member.school}</li>
                </ul>
            </div>`)
            break;

            // If Engineer, create engineer html card
            case 'Engineer' :  
                // Create and push custom card into teamHTML array
                teamHTML.push(`<div class="card d-flex" style="width: 16rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white"><span class="name">${member.name}</span><br><span class="role">${member.getRole()} &#x2658;</span></li>
                    <li class="list-group-item"><span class="title">Email:</span> <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item"><span class="title">ID:</span> ${member.id}</li>
                    <li class="list-group-item"><span class="title">Github username:</span> <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>
                </ul>
            </div>`);
            break;
        };
    });

    // HTML template for inserting html formatting cards
    const htmlTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Portfolio</title>
        <link rel="reset" href="./reset.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet">
        <link href="./style.css" rel="stylesheet">
      </head>
      <body>
        <header class="w-100 bg-dark">
            <h1 class="text-center text-white p-2">Team Portfolio</h1>
        </header>
        <div class="row d-flex justify-content-center">
            ${teamHTML.join('')}
        </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      </body>
    </html>`;
    
    return htmlTemplate;
};

module.exports = generateHTML;

