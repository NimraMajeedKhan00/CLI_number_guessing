#!/usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user input for guessing number
//compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number between 1 to 10:",
    },
]);
if (answer.userGuessednumber === randomnumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
