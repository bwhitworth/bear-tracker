import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";

const sortBears = () => {
  let bears = bearData.bears.slice(0);
  let highestNum = 0;
  let secondHighestNum = 0;
  let thirdHighestNum = 0;
  bears.forEach((x) => {
    if (x.successes > highestNum){
      secondHighestNum = highestNum;
      highestNum = x.successes;
    } else if (x.successes > secondHighestNum) {
      thirdHighestNum = secondHighestNum;
      secondHighestNum = x.successes;
    } else if (x.successes > thirdHighestNum){
      thirdHighestNum = x.successes;
    }
  })

  const firstPlace = bears.filter((x) => x.successes === highestNum);
  const secondPlace = bears.filter((x) => x.successes === secondHighestNum);
  const thirdPlace = bears.filter((x) => x.successes === thirdHighestNum);

  return [firstPlace, secondPlace, thirdPlace];
};

const fattestBearBuilder = () => {
  let domString = '';
  console.log(sortBears());
  domString += `
  <table class="table col-6 offset-3 bg-white">
  <thead>
    <tr>
      <th scope="col">Award</th>
      <th scope="col">Bear</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gold</th>
      <td>${sortBears()[0].map((x) => x.name)}</td>
    </tr>
    <tr>
      <th scope="row">Silver</th>
      <td>${sortBears()[1].map((x) => x.name)}</td>
    </tr>
    <tr>
      <th scope="row">Bronze</th>
      <td>${sortBears()[2].map((x) => x.name)}</td>
    </tr>
  </tbody>
</table>`
util.printToDom('awards-container', domString);
sortBears();
};

export default { fattestBearBuilder, sortBears };