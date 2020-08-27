var inquirer = require("inquirer");
var fs = require("fs");


inquirer.prompt([
    {}
]).then(answers => {
    console.log(answers);

    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err);
        }


    });
});