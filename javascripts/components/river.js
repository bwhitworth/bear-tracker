import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";

const printAllBears = () => {
  let domString = "";
  bearData.bears.forEach((bearX) =>{
    domString += '  <div class="col-3">',
    domString += '    <div class="card">',
    domString += `      <img src="${bearX.imageUrl}" class="card-img-top" alt="bear photo">`,
    domString += '      <div class="card-body">',
    domString += `        <h5 class="card-title">${bearX.name}</h5>`,
    domString += '      </div>',
    domString += '    </div>',
    domString += '  </div>'
  })
  util.printToDom('river-container', domString);
};

export default { printAllBears };