import bearForm from "./components/bearForm.js";
import river from "./components/river.js";


const init = () => {
  bearForm.printBearForm();
  river.printAllBears();
  river.addButtonEvents();
};

init();