import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";
import printBears from "./river.js";

const addNewBear = (e) => {
  e.preventDefault();
  let newBear = {
    id: `${bearData.bears.length +1}`,
    name: $( `#input-bear-name` ).val(),
    imageUrl: $( `#input-bear-image` ).val(),
    attempts: 0,
    successes: 0,
    history: []
  };
  bearData.bears.push(newBear);
  $( `#new-bear-form` ).trigger("reset");
  printBears.printAllBears();
};

const printBearForm = () => {
  let domString = ''
  domString += '<form class="col-6" id="new-bear-form">',
  domString += '  <div class="form-group">',
  domString += '    <label for="inputName">Bear Name</label>',
  domString += '    <input type="text" class="form-control" id="input-bear-name" aria-describedby="textHelp">',
  domString += '  </div>',
  domString += '  <div class="form-group">',
  domString += '    <label for="inputName">Image URL</label>',
  domString += '    <input type="text" class="form-control" id="input-bear-image" aria-describedby="textHelp">',
  domString += '  </div>',
  domString += '  <button type="submit" class="btn btn-dark" id="submit-bear-button">Submit</button>'
  domString += '</form>'
  util.printToDom('form-container', domString);
  document.getElementById('submit-bear-button').addEventListener('click', addNewBear);
};

export default { printBearForm };