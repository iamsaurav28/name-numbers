//input button
//
const inputBox = document.querySelector("#input-box");
const showBtn = document.querySelector("#show-no");
const result = document.querySelector("#result");
showBtn.addEventListener("click", function () {
  result.innerText = inputBox.value.length;
  if (inputBox.value.length > 7) {
    inputBox.style.backgroundColor = "red";
    inputBox.style.color = "red";
  } else {
    inputBox.style.backgroundColor = "red";

    inputBox.style.color = "green";
  }
});
