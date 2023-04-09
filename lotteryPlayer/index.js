const myForm = document.querySelector(".myForm");
const TICKET_PRICE = 25000;
var myMoney = 1000000000;
var myNumber = [];
var plays = 0;
var moneySpent = 0;
var won = 0;

/***** PLAY UNTIL WIN GAME *****/

//Function that adds event listener to the form
function submitListener() {
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const number1 = formData.get("number1");
    const number2 = formData.get("number2");
    const number3 = formData.get("number3");
    const data = [number1, number2, number3];
    myNumber = [...data];
    compareNumbers();
  });
}

//Function that formats numbers with dot separator
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//Function that returns 3 random numbers between 1 and 9
function randomNumbers() {
  const numbers = [];
  for (let i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 9) + 1);
  }
  return numbers;
}

//Function that compares the two arrays and returns the number of matches
function compareNumbers() {
  const random = randomNumbers();
  let matches = 0;
  for (let i = 0; i < 3; i++) {
    if (myNumber[i] == random[i]) {
      matches++;
    }
  }
  if (matches === 3) {
    const results = document.querySelector(".results");
    const result = document.createElement("p");
    won += TICKET_PRICE * 100;
    result.textContent = `You played ${plays} times, spent ${formatNumber(
      moneySpent
    )} VND and won ${formatNumber(won)} VND.`;
    results.appendChild(result);
    return;
  } else {
    plays++;
    moneySpent += TICKET_PRICE;
    compareNumbers();
  }
}

submitListener();
