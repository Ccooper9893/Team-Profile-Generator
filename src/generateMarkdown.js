const fs = require('fs')


function generateHTML(employeeList) {
    // Creates an empty array to push individual team members cards onto
    const teamHTML = []

    // Mapping through team array to create cards
    const employees = employeeList.map(member => { 
        switch(member.getRole()) {
            
            // If Manager, create manager html card and push to 
            case 'Manager' : 
                // Create and push custom card into teamHTML array
                teamHTML.push(``)
            break;

            // If Intern create intern html card
            case 'Intern' : 
                // Create and push custom card into teamHTML array
                teamHTML.push(``)
            break;

            // If Engineer, create engineer html card
            case 'Engineer' :  
                // Create and push custom card into teamHTML array
                teamHTML.push(``)
            break;
        }
    })
}

module.exports = generateHTML

