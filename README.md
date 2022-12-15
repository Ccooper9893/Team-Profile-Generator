# **Team-Profile-Generator**
![Badge image](https://img.shields.io/badge/license-MIT-green})


## *Description*
___
This is a Node.js command-line application that takes in information about employees on a software engineering team via terminal and generates an HTML webpage that displays summaries for each person. Using the command line interface (CLI), answer the questions prompted in the terminal, and enjoy your newly generated Team Portfolio webpage!
Building this application has helped me hone my skills including OOP(Object oriented programming), TDD(Test driven development), node.js, and Javascript ES6.

 ## *Table of Contents*
 ___
  - [Installation](#installation)
  - [Usage](#usage)
  - [Software](#software)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)


## *Installation*
___
Guidelines for installing this application:
1. Clone the repository onto your machine https://github.com/Ccooper9893/Team-Profile-Generator
2. Install node.js, if applicable. https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs
3. Install the dependencies by typing **npm install** in the command line and pressing enter.


## *Usage*
___
Insert video here


## *Software*
___
Software used to build this application:
- HTML5
- CSS3
- Javascript ES6 (OOP)
- Node.js
- Inquirer(CLI)
- Jest(TDD)


## *Contribution*
___
Currently not available


## *Testing*
___
Guidelines for testing the application:
1. Ensure you have jest installed. If not, install jest by typing **npm i jest** in the terminal, then press enter.
2. Run the tests by typing **npm test** in the terminal, then press enter.


## *License*
___
This application is covered under the MIT license.
For more information about this license please visit https://opensource.org/licenses/MIT


## *Questions*
___
For questions or concerns please contact me via Github.
  - Github: https://github.com/ccooper9893


## *User Story*
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated