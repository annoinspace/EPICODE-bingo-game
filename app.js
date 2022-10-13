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
    let initialNumber = i + 1
    userBingo.innerHTML = initialNumber
    userBingoParent.appendChild(userBingo)
  }
}
createUserBingoSheet()

let getRandomInt = function () {
  for (i = 0; i < numberOfSquares; i++) {
    return Math.ceil(Math.random() * numberOfSquares)
  }
}

getRandomInt()

// when button is clicked, the numbers are randomised
