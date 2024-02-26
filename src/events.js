import "dotenv/config";
import chalk from "chalk";
import instance from "./ethers.js";

(() => {
  console.log("Listening...");
  instance.on("Issued", (course, id, date, event) => {
    console.log(chalk.bgGreen("**** EVENT OCCURED ****"));
    console.log("course:", course);
    console.log("id:", id);
    console.log("date:", date);
    console.log("event:", event);
    console.log(chalk.bgGreen("***********************"));
  });
})();
