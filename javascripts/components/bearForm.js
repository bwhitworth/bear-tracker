import util from "../helpers/utils.js";

const addNewBear = () => {
  console.log('bear added:', document.getElementById('input-bear-name').value);
};

const printBearForm = () => {
  let domString = ''
domString += '<form class="col-6">',
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