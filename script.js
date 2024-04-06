const allClear = document.getElementById("clear");
const delBtn = document.querySelector("#delete");
const displayNumber = document.querySelector(".display-number");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll("button");
const equalBtn = document.querySelector("#equal")

let temp = "";
let prevVal = 0;
let currentVal = 0;
let total = 0;
let decimalClicked = false;
let numsClicked = false;

let flags = {
  "add": false,
  "subtract": false,
  "divide": false,
  "multiply": false,
}


// Event listeners
delBtn.addEventListener("click", () => deleteBtn());

equalBtn.addEventListener("click", () => equal());

// Operators
operators.forEach(operator => {
  let operation = operator.dataset.operation
  if(operation != undefined){
    operator.addEventListener("click", () => {
      for(let key in flags){
        flags[key] = false;
      }
      
      flags[operation] = true;
      prevVal = Number(temp);
      temp = "";

      updateDisplay();

    })
  }  
});

allClear.addEventListener("click", () => {
  if(temp.length != 0){
    temp = "";
    currentVal = 0;
    prevVal = 0;
    decimalClicked = false;
  }
  updateDisplay()
});

// Number Button logic
numbers.forEach(number => {
  number.addEventListener("click", () => {
    numsClicked = true;
    if(number.textContent === "."){
      if(decimalClicked === false){
        decimalClicked = true;
        temp += number.textContent;
      }else{}
    }else{
      temp += number.textContent;
    }
    updateDisplay()
  })
});

// Functions

function deleteBtn(){
  let split = temp.split("")
  split.pop();
  temp = split.join("");
  updateDisplay();
};


function divide(){
  total = prevVal / Number(temp);
  temp = String(total);

  updateDisplay();
};

function multiply(){
  total = prevVal * Number(temp);
  temp = String(total);

  updateDisplay();

};

function subtract(){
  total = prevVal - Number(temp);
  temp = String(total);

  updateDisplay();
};

function add() {
  total = prevVal + Number(temp)
  temp = String(total);

  updateDisplay();
};

function equal(){
  for(let key in flags){
    if(flags[key]){
      chooseOperation(key);
    }
  }
  total = Number(temp); 
};

function updateDisplay(){
  if(temp.split("").length != 0){
    displayNumber.value = temp
  }else{
    displayNumber.value = "0"
  }
};



function chooseOperation(operation){
  switch (operation) {
    case "add":
      add();
      break;
    case "subtract":
      subtract()
      break;
    case "divide":
      divide();
      break;
    case "multiply":
      multiply();
      break;
    default:
      break;
  }
}
