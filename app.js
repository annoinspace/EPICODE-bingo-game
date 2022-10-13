let numberOfMainSquares = 76

let generateMainBoard = function () {
  const mainBoard = document.getElementById("bingoBoardContainer")

  for (i = 0; i < numberOfMainSquares; i++) {
    mainBoard.innerHTML += `<div class ='bingoNumber'>${i + 1}</div>`
  }
}

const fillArray = function () {
  const arr = []
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1)
  }
  return arr
}

const getRandomNumber = function (range) {
  const randomIndex = Math.floor(Math.random() * range.length)
  const randomNum = range.splice(randomIndex, 1)[0]
  return randomNum
}

const generateRandomNumber = function (range) {
  const randomNum = getRandomNumber(range)
  const randomNumDiv = document.getElementById("randomNumDisplay")
  randomNumDiv.innerText = randomNum
  const cells = document.querySelectorAll("#bingoBoardContainer .bingoNumber")
  cells[randomNum - 1].classList.add("highlight")
}

window.onload = function () {
  generateMainBoard()
  const randomButton = document.getElementById("randButton")
  const range = fillArray()
  randomButton.addEventListener("click", function () {
    generateRandomNumber(range)
  })
}
