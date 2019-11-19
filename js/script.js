import data from './data.js';
getRandomWord();

function getRandomWord() {
  let random = Math.floor(Math.random() * (999 - 0) + 0);
  console.log(random);
  console.log(data[random]);
};

var targetElement = document.querySelectorAll(".answer");
targetElement.forEach((element) => {
  element.addEventListener('click', ((e) => {
    element.classList.remove("click-animation");

    setTimeout(() => {
      element.classList.add("click-animation");
    }, 50)

    var answers = document.querySelector(".answers")
    var content = document.querySelector(".content")

    answers.classList.remove("slide-animation");
    content.classList.remove("slide-animation");

    setTimeout(() => {
      answers.classList.add("slide-animation");
      content.classList.add("slide-animation");
      console.log("aa");

    }, 600)
  }))
});