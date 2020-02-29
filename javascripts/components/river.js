import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";

const addButtonEvents = () => {
  $( "body" ).on( 'click', '.attempt-button', fishingAttempt);
  $( "body" ).on( 'click', '.success-button', fishingSuccess);
  $( "body" ).on( 'click', '.view-button', viewSingleBear);
};

const fishingAttempt = (e) => {
  const bearId = e.target.closest('.card').id;
  const bearPosition = bearData.bears.findIndex((x) => x.id === bearId);
    bearData.bears[bearPosition].attempts += 1;
    printAllBears();
};

const fishingSuccess = (e) => {
  const bearId = e.target.closest('.card').id;
  const bearPosition = bearData.bears.findIndex((x) => x.id === bearId);
    bearData.bears[bearPosition].successes += 1;
    printAllBears();
};

const printAllBears = () => {
  let domString = "";
  bearData.bears.forEach((bearX) =>{
    domString += '  <div class="col-4">',
    domString += `    <div id="${bearX.id}" class="card">`,
    domString += `      <img src="${bearX.imageUrl}" class="card-img-top" alt="bear photo">`,
    domString += '      <div class="card-body">',
    //id="single-bear"
    domString += `        <h5 class="card-title">${bearX.name}</h5>`,
    domString += `        <button type="button" class="btn btn-primary view-button"><i class="fas fa-binoculars"></i></button>`,
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
};

const closeSingleView = () => {
  console.log('clicked close');  // WHY DOES THIS RUN MULTIPLE TIMES ON CLICK
  util.printToDom('single-view', '');
  $("#singleBearModal").modal('hide');
};

const viewSingleBear = (e) => {
  const bearId = e.target.closest('.card').id;
  const selectedBear = bearData.bears.find((bearX) => bearId === bearX.id);
  let domString = '';
  domString += '<div class="container">',
  domString += '<div class="row">',
  domString += '<div class="col-6">',
  domString += `<img class="img-fluid" src="${selectedBear.imageUrl}" alt=""/>`,
  domString += '</div>',
  domString += '<div class="col-6">',
  domString += `<h2>${selectedBear.name}</h2>`,
  domString += '</div>',
  domString += '</div>',
  domString += '<div class="row">',
  //domString += fishingTableBuilder(selectedBear.adventures),
  domString += '</div>',
  domString += '</div>',

  $("#singleBearModal").modal('show');
  util.printToDom('single-view', domString);
  $( "body #close-single-view" ).on( 'click', closeSingleView);
};

export default { printAllBears, viewSingleBear, addButtonEvents, closeSingleView };