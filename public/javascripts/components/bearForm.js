import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";
import printBears from "./river.js";
import awards from "./awards.js";

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
  $( '#new-bear-form' ).trigger("reset");
  $( '#collapseOne' ).removeClass('show');
  printBears.printAllBears();
  awards.fattestBearBuilder();
};

const printBearForm = () => {
  let domString = '';
  domString += `
  <div class="col-6 offset-3 add-section">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="fas fa-plus-circle"></i> Add Bear
            </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <form class="row" id="new-bear-form" novalidate>
              <div class="col-6">
                <div class="form-group">
                  <label for="bear-name">Name</label>
                  <input type="text" class="form-control" id="input-bear-name" aria-describedby="nameHelp" required>
                </div>
                <div class="form-group">
                  <label for="bear-image">Image</label>
                  <input type="text" class="form-control" id="input-bear-image" aria-describedby="imageHelp" required>
                </div>
                <button type="submit" id="submit-bear-button" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  util.printToDom('form-container', domString);
  $( "body #submit-bear-button" ).on( 'click', addNewBear);
};

export default { printBearForm };