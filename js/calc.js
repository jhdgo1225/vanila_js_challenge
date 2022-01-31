const calculator = document.querySelector("#calculator");
const openBtn = document.querySelector(".calc");
const closeBtn = document.querySelector(".calculator-close button");
const calcInput = document.querySelector("thead input");
const printNum = document.querySelectorAll(".print");
const printOpcode = document.querySelectorAll(".opcode");
const clearInput = document.querySelector(".clear");
const oneCharDelete = document.querySelector(".back");
const submitResult = document.querySelector(".resultBtn");

function closeCalc() {
  calculator.classList.add("hidden-calc");
}

function openCalc() {
  calculator.classList.remove("hidden-calc");
}

printNum.forEach((rect) => {
  rect.addEventListener("click", function (e) {
    calcInput.value += e.target.innerText;
  });
});

printOpcode.forEach((rect) => {
  rect.addEventListener("click", function (e) {
    let content = calcInput.value;
    if (content.length === 0 || isNaN(content.substr(content.length - 1, 1)))
      e.preventDefault();
    else calcInput.value += e.target.innerText;
  });
});

clearInput.addEventListener("click", function () {
  calcInput.value = "";
});

oneCharDelete.addEventListener("click", function () {
  calcInput.value = calcInput.value.substr(0, calcInput.value.length - 1);
});

submitResult.addEventListener("click", function () {
  if (isNaN(parseInt(calcInput.value)))
    calcInput.value = "입력이 잘못되었습니다.";
  else calcInput.value = eval(calcInput.value);
});

openBtn.addEventListener("click", openCalc);
closeBtn.addEventListener("click", closeCalc);
