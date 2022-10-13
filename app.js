let numberOfSquares = 76

let createBingoSquares = function () {
  console.log("this is working")

  for (i = 0; i < numberOfSquares; i++) {
    const newBingoNumContainer = document.createElement("div")
    const bingoNumbersParent = document.getElementById("bingoBoardContainer")
    newBingoNumContainer.classList.add("bingoNumber")
    newBingoNumContainer.innerHTML = i + 1
    bingoNumbersParent.appendChild(newBingoNumContainer)
  }
}
createBingoSquares()

let numberOfUserSquares = 24

let createUserBingoSheet = function () {
  console.log("this is working")

  for (i = 0; i < numberOfUserSquares; i++) {
    const userBingo = document.createElement("div")
    const userBingoParent = document.getElementById("userBoardContainer")
    userBingo.classList.add("userBingoNumber")
    userBingo.innerHTML = i + 1
    userBingoParent.appendChild(userBingo)
  }
}
createUserBingoSheet()

let getRandomInt = function () {
  let currentSquare = document.querySelectorAll("bingoNumber")[i]

  for (i = 0; i < numberOfSquares; i++) {
    let randomNumber = Math.ceil(Math.random() * numberOfSquares)
  }
}

document.getElementById("randomiseNum").addEventListener("click", getRandomInt)
// when button is clicked, the numbers are randomised
