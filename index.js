const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//const EmployeeSummary = require("EmployeeSummary");

const Employee = require("./lib/Employee");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");

var teamArray = [];


inquirer.prompt([{
    type: "list",
    message: "What is your role with this company?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]
}]).then(inquirerResponses => {
    switch (inquirerResponses.role) {
        case "Manager":
            addManager();
            break;
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
    ,{
        type: "input",
        name: "engineerGithub",
        message: "What is your github Engineer?",
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamArray(engineer);
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
    ,{
        type: "input",
        name: "internSchool",
        message: "Where did you to school Intern?",
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArray(intern);
        console.log(teamArray)
    })
}


