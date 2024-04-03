const allClear = document.getElementById("clear");
const delBtn = document.querySelector("#delete");
const displayNumber = document.querySelector(".display-number");
const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll("button");


let temp = [];
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
  let sum = Number(temp.join(""))
  console.log(sum)
  temp = []
  updateDisplay()
}

function subtract(){
  console.log("subtract");
  temp = []
  updateDisplay()
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
    default:
      break;
  }
}