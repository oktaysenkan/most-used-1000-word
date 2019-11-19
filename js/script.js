import data from './data.js';

var currentWord;
loadNewWord();

function loadNewWord() {
  var word = document.querySelector(".word");
  var text = document.querySelectorAll(".text");

  currentWord = getRandomWord();
  word.innerHTML = setFirstLetterUpperCase(currentWord.English);

  var random = Math.round(Math.random() * (3 - 0) + 0);

  for (let index = 0; index < text.length; index++) {
    if (index == random) {
      text.item(index).innerHTML = setFirstLetterUpperCase(currentWord.Turkish);
    } else {
      text.item(index).innerHTML = setFirstLetterUpperCase(getRandomWord().Turkish);
    }
  }

}

function getRandomWord() {
  let random = Math.floor(Math.random() * (999 - 0) + 0);
  return data[random];
};

function setFirstLetterUpperCase(text) {
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text;
}

var answerButton = document.querySelectorAll(".answer");
answerButton.forEach((element) => {
  element.addEventListener('click', ((e) => {
    element.classList.remove("click-animation");

    setTimeout(() => {
      element.classList.add("click-animation");
    }, 50)

    var answers = document.querySelector(".answers")
    var content = document.querySelector(".content")

    console.log(currentWord, element.innerHTML);

    var checkedText = element.querySelector(".text");
    console.log(checkedText.innerHTML, currentWord.Turkish);

    var footer = document.querySelector(".footer")
    if (checkedText.innerHTML.toLowerCase() === currentWord.Turkish.toLowerCase()) {
      footer.setAttribute("style", "background: #219653;")
    } else {
      footer.setAttribute("style", "background: #DE3535;")
    }

    answers.classList.remove("slide-animation");
    content.classList.remove("slide-animation");

    setTimeout(() => {
      answers.classList.add("slide-animation");
      content.classList.add("slide-animation");
    }, 600)

    setTimeout(() => {
      loadNewWord();
    }, 1100);
  }))
});