import "dotenv/config";
import chalk from "chalk";
import instance from "./ethers.js";

(() => {
  console.log(chalk.magenta("Listening for Issue Events..."));
  instance.on("Issued", (course, id, grade, event) => {
    console.log(chalk.bgGreen("**** EVENT OCCURED ****"));
    console.log("course:", course);
    console.log("id:", id);
    console.log("grade:", grade);
    console.log("event:", event);
    console.log(chalk.bgGreen("***********************"));
  });
})();
