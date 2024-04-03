const allClear = document.getElementById("clear");
const delBtn = document.querySelector("#delete");
const displayNumber = document.querySelector(".display-number");
const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll("button");


let temp = [];
let prevVal = 0;
let total = [];

// Event listeners
delBtn.addEventListener("click", () => deleteBtn())

buttons.forEach(button => {
  let operation = button.dataset.operation
  if(operation != undefined){
    button.addEventListener("click", () => {
      chooseOperation(operation)
    })
  }
})

allClear.addEventListener("click", () => {
  if(temp.length != 0){
    temp = [];
    prevVal = 0;
    console.log(temp)
  }
  updateDisplay()
});

// Number Button logic
numbers.forEach(number => {
  number.addEventListener("click", () => {
    temp.push(number.textContent)
    if(number.textContent === "."){
      // This makes it so there's a 0 at the start after immediately pressing the period
      if(temp[0] === "."){
        temp.unshift("0");
      }
    }else{
      console.log(temp)
    }
    updateDisplay()
  })
})

// Functions

function divide(){
  console.log("divide");
  temp = [];
  updateDisplay();
}


function deleteBtn(){
  temp.splice(temp.length - 1);
  console.log("delete")
  updateDisplay();
}


function add(){
  console.log("add")
  prevVal += Number(temp.join(""))
  temp = []
  updateDisplay()
  console.log(prevVal)
}

function subtract(){
  console.log("subtract");
  prevVal -= Number(temp.join(""))
  temp = []
  updateDisplay()
}

function equal(){
  console.log("equal")
  let sum = prevVal + Number(temp.join(""))
  displayNumber.textContent = String(sum)
  console.log(sum)
}

function updateDisplay(){
  displayNumber.textContent = temp.join("")
}

function chooseOperation(operation){
  switch (operation) {
    case "add":
      add()
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
    case "equal":
      equal();
      break;
    default:
      break;
  }
}