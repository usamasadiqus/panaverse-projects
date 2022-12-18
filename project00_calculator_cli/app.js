import inquirer from "inquirer";
import chalk from "chalk";
const output = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter first number: ",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter second number: ",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select operator: ",
    },
]);
const { numberOne, numberTwo, operator } = output;
if (numberOne && numberTwo && operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
    }
    // console.log(chalk.blue.bgRed.bold("Hello world!"));
    console.log(chalk.green.bold(`Your result: ${result}`));
}
else {
    console.error(chalk.red.bold("All arguments must be filled!, Try again..."));
}
