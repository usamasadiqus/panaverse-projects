import inquirer from "inquirer";
import chalk from "chalk";

const output: { numberOne: number; numberTwo: number; operator: string } =
  await inquirer.prompt([
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
  let result: number = 0;

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

  console.log(chalk.green.bold(`Your result: ${result}`));
} else {
  console.error(chalk.red.bold("All arguments must be filled!, Try again..."));
}
