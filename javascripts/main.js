import bearForm from "./components/bearForm.js";
import river from "./components/river.js";
import awards from "./components/awards.js";



const init = () => {
  bearForm.printBearForm();
  river.printAllBears();
  river.addButtonEvents();
  awards.fattestBearBuilder();
  awards.findAwards();
};

init();