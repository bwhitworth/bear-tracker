import util from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";



const sortBears = (place) => {
  let bears = bearData.bears.slice(0);
  let highestNum = 0;
  let secondHighestNum = 0;
  let thirdHighestNum = 0;
  bears.forEach((x) => {
    if (x.successes > highestNum){
      highestNum = x.successes;
    }
  })

  bears.filter((x) => x.successes === highestNum);


  // bears.sort(function(a, b){
  //   let bearA=a.successes, bearB=b.successes;
  //   if (bearA < bearB)
  //       return 1 
  //   if (bearA > bearB)
  //       return -1
  //   return 0
  // })
  // return(bears[place-1]);
};

const fattestBearBuilder = () => {
  let domString = '';
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
      <td>${sortBears(1).name}</td>
    </tr>
    <tr>
      <th scope="row">Silver</th>
      <td>${sortBears(2).name}</td>
    </tr>
    <tr>
      <th scope="row">Bronze</th>
      <td>${sortBears(3).name}</td>
    </tr>
  </tbody>
</table>`
util.printToDom('awards-container', domString);
sortBears();
};

export default { fattestBearBuilder, sortBears };