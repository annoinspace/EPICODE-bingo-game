let createBingoSquares = function () {
  console.log("this is working")
  let numberOfSquares = 76
  for (i = 0; i < numberOfSquares; i++) {
    const newBingoNumContainer = document.createElement("div")
    const bingoNumbersParent = document.getElementById("bingoBoardContainer")
    newBingoNumContainer.classList.add("bingoNumber")
    newBingoNumContainer.innerHTML = i + 1
    bingoNumbersParent.appendChild(newBingoNumContainer)
  }
}
createBingoSquares()
