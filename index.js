const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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
            message: "What is your manager Id??",
            name: "managerId",
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
            message: "What is your office number?",
            name: "managerOfficeNumber",
        }]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        })
}
function createTeam(){
    inquirer.prompt ([{
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
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your id Engineer?",
    }, {
        type: "input",
        name: "engineerEmail",
        message: "What is your email Engineer?",
    }
        , {
        type: "input",
        name: "engineerGithub",
        message: "What is your github Engineer?",
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
    },
    {
        type: "input",
        name: "internId",
        message: "What is your id Intern?",
    }, {
        type: "input",
        name: "internEmail",
        message: "What is your email Intern?",
    }
        , {
        type: "input",
        name: "internSchool",
        message: "Where did you to school Intern?",
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArray.push(intern);
        console.log(teamArray)
    })
}

managerSignIn();

