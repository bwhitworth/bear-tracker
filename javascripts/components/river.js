import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";

const addButtonEvents = () => {
const attemptButtons = document.getElementsByClassName('attempt-button');
for(let i = 0; i < attemptButtons.length; i++){
  attemptButtons[i].addEventListener('click', fishingAttempt);
};
const successButtons = document.getElementsByClassName('success-button');
for(let i = 0; i < successButtons.length; i++){
  successButtons[i].addEventListener('click', fishingSuccess);
};
};

const fishingAttempt = () => {
  console.log('attempted to catch a fish');
};

const fishingSuccess = () => {
  console.log('caught a fish!');
};

const printAllBears = () => {
  let domString = "";
  bearData.bears.forEach((bearX) =>{
    domString += '  <div class="col-4">',
    domString += `    <div id="${bearX.id}"class="card">`,
    domString += `      <img src="${bearX.imageUrl}" class="card-img-top" alt="bear photo">`,
    domString += '      <div class="card-body">',
    domString += `        <h5 class="card-title">${bearX.name}</h5>`,
    domString += '        <p class="card-text">Fishing Results:</p>',
    domString += '        <div class="row">',
    domString += `        <div class="col-md"><button type="button" class="btn btn-secondary attempt-button"><i class="fas fa-times"></i> ${bearX.attempts}</button></div>`,
    domString += `        <div class="col-sm"><button type="button" class="btn btn-success success-button"><i class="fas fa-fish"></i> ${bearX.successes}</button></div>`,
    domString += '        </div>',
    domString += '      </div>',
    domString += '    </div>',
    domString += '  </div>'
  })
  util.printToDom('river-container', domString);
  addButtonEvents();
};

export default { printAllBears };