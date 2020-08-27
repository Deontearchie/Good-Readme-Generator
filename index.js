var inquirer = require("inquirer");
var fs = require("fs");



inquirer.prompt([{
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "README-Generator",
    },
    {
        type: "input",
        message: "Write a description for your project",
        name: "description",
        default: "this project is use to generate a README",
    },
    {
        type: "input",
        message: "What command is use to installation?",
        name: "installation",
        default: "npm i",
    },
    {
        type: "input",
        message: "What are you using your project for?",
        name: "usage",
        default: "Generate a readme using the command line.",
    },
    {
        type: "list",
        message: "What type of license will you be needing?",
        choices: ["MIT"],
        name: "license",
        default: "MIT",
    },
    {
        type: "input",
        message: "Who are all the contributors",
        name: "contributing",
        default: "Deonte Archie",
    },
    {
        type: "input",
        message: "What command do you use to test your code",
        name: "tests",
        default: "node index.js",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
        default: "Deontearchie",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        default: "Deontearchie",
    }
]).then(answers => {
    console.log(answers);
    const license = (answers) => {
        if (answers.license === "MIT") {
            return `
MIT License

Copyright (c) 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
            `
        }
    }

    function readmeStr(answers) {
        return `
# Table of Contents

* [Title](#${answers.title})
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

# ${answers.title}

# Description
${answers.description}

# Installation
> ${answers.installation}

# Usage
${answers.usage}

# Contributing
${answers.contributing}

# Tests
> ${answers.tests}

# Questions
My github is username is: ${answers.github}

My email is: ${answers.email}

# License
${license(answers)}

    `;
    }

    fs.writeFile("README.md", readmeStr(answers), err => {
        if (err) {
            return console.log(err);
        }


    });
});