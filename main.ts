#! /usr/bin/env node

//import "inquirer" from module .it is a command line interface for node js
import inquirer from "inquirer";

//import chalk for colorful user interface  
import chalk from "chalk"

//declare a constant "answers" and assign it to the result of inquirer.prompt
const answers: {
    sentence : string;
} = await inquirer.prompt([
    {
      name : "sentence",
      type : "input",
      message : chalk.yellowBright("Kindly Enter Your Sentence To Count The Word :")
    }
]);

//declare a constant "words" and assign it to the result of answers.sentence.trim().split(" ")
const words = answers.sentence.trim().split(" ");

//print the words
console.log(words);


//print the length of sentence
console.log(chalk.magentaBright.italic.bold(`Your sentence word count is ${chalk.yellowBright.bold(words.length)}.`));
