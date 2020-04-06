import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";

const findAwards = () => {
  let bears = bearData.bears.slice(0);
  let highestNum = -1;
  let secondHighestNum = -1;
  let thirdHighestNum = -1;

  bears.forEach((x) => {
    if (x.successes !== 0){
      if (x.successes > highestNum){
        thirdHighestNum = secondHighestNum;
        secondHighestNum = highestNum;
        highestNum = x.successes;
      } else if (x.successes > secondHighestNum && x.successes < highestNum) { 
        thirdHighestNum = secondHighestNum;
        secondHighestNum = x.successes;
      } else if (x.successes > thirdHighestNum && x.successes < secondHighestNum){
        thirdHighestNum = x.successes;
      } 
  }});

  const firstPlace = bears.filter((x) => x.successes === highestNum);
  const secondPlace = bears.filter((x) => x.successes === secondHighestNum);
  const thirdPlace = bears.filter((x) => x.successes === thirdHighestNum);
  return [firstPlace, secondPlace, thirdPlace];
};

const fattestBearBuilder = () => {
  let domString = '';
  domString += `
  <table class="table col-6 offset-3 bg-white">
  <thead>
  <h2 class="text-center">Fattest Bear Awards</h2>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gold <i class="fas fa-medal" style="color:gold"></i></th>
      <td>${findAwards()[0].map((x) => x.name)}</td>
    </tr>
    <tr>
      <th scope="row">Silver <i class="fas fa-medal" style="color:silver"></i></th>
      <td>${findAwards()[1].map((x) => x.name)}</td>
    </tr>
    <tr>
      <th scope="row">Bronze <i class="fas fa-medal" style="color:peru"></i></th>
      <td>${findAwards()[2].map((x) => x.name)}</td>
    </tr>
  </tbody>
</table>`
util.printToDom('awards-container', domString);
findAwards();
};

export default { fattestBearBuilder, findAwards };