// var box = document.querySelectorAll(".box");

var main = document.querySelector(".main");

for (i = 1; i < 500; i++) {
  var newPara = document.createElement("p");
  var newEle = main.appendChild(newPara);

  newEle.style.background = "red";

  // newEle[i].addEventListener("mouseenter", () => {
  //   newEle[i].style.backgroundColor = "green";
  // });
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", () => {
    box[i].style.backgroundColor = "red";
  });
}
