#! /usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstnumber" },
  { message: "Enter Second Number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Divition"],
  },
]);
// conditional statement
if(asnwer.operator === "Addition"){
 console.log(asnwer.firstnumber + asnwer.secondnumber);   
}
else if(asnwer.operator === "Substraction"){
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if(asnwer.operator === "Multiplication"){
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if(asnwer.operator === "Divition"){
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else{console.log("Please enter valid number")}

