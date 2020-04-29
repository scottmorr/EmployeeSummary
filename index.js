const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//const validator = require("validator");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

var teamArray = [];

function managerSignIn() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome Manager! Please enter your name?",
            name: "managerName",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "please enter at least one character";
            }
        }, {
            type: "input",
            message: "What is your 4 digit manager-Id??",
            name: "managerId",
            validate: answer => {
                const pass = answer.match(/^\d{4}$/);
                if (pass) {
                    return true;
                }
                return "please enter valid 4 digit id-number"
            }
    

        }, {
            type: "input",
            message: "What is your manager email?",
            name: "managerEmail",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "please enter valid email address"
            }
        },
        {
            type: "input",
            message: "What is your office number (e.g. ###-###-####)?",
            name: "managerOfficeNumber",
            validate: answer => {
                const pass = answer.match(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
                if (pass) {
                    return true;
                }
                return "please enter valid office number"
            }
        }]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        })
}
function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "memberType",
        message: "What type of team member do you want to create?",
        choices: ["Engineer", "Intern", "None"]
    }])
        .then(inquirerResponses => {
            switch (inquirerResponses.memberType) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                // buildTeam();
            }

        })
}

function addEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "What is your name Engineer?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter at least one character";
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your 4 digit-id Engineer?",

        validate: answer => {
            const pass = answer.match(/^\d{4}$/);
            if (pass) {
                return true;
            }
            return "please enter valid 4 digit id-number"
        }


    }, {
        type: "input",
        name: "engineerEmail",
        message: "What is your email Engineer?",
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            }
            return "please enter valid email address"
        }

    }
        , {
        type: "input",
        name: "engineerGithub",
        message: "What is your github Engineer?",
        validate: answer => {
      const pass = answer.match(/\S+@\S+\.\S+/);
         if (pass) {
             return true;
         }
         return "please enter valid email address"
     }
    
    
    
    
    
    
    
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamArray.push(engineer);
        console.log(teamArray)
    })
}

function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "What is your name Intern?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter at least one character";
        }
    },
    {
        type: "input",
        name: "internId",
        message: "What is your 4 digit-id Intern?",

 validate: answer => {
            const pass = answer.match(/^\d{4}$/);
            if (pass) {
                return true;
            }
            return "please enter valid 4 digit id-number"
        }

    }, {
        type: "input",
        name: "internEmail",
        message: "What is your email Intern?",

        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            }
            return "please enter valid email address"
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "Where did you to school Intern?",

        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter your school";
        }

    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArray.push(intern);
        console.log(teamArray)
    })
}

managerSignIn();

