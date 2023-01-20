class Game {
  constructor() {
    this.boardSize = 6;
    this.positions = [];
    this.defaultPositions = [1, 1, 2, 2, 3, 3];
  }

  genBoard(gameBoard) {
    for (let i = 0; i < this.boardSize; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      gameBoard.appendChild(card);
    }
  }

  positionPictures() {
    // CREDITOS: MATHEUS OLIVEIRA
    for (let i = 0; i < this.boardSize; i++) {
      const randomElement =
        this.defaultPositions[
          Math.floor(Math.random() * this.defaultPositions.length)
        ];
      let index = this.defaultPositions.indexOf(randomElement);

      this.defaultPositions.splice(index, 1);
      this.positions.push(randomElement);
    }
  }

  flipCard(cardToFlip, index) {
    const img = document.createElement("img");
    img.setAttribute("src", `./images/${this.positions[index]}.jpg`);
    img.classList.add("flipped-card");

    cardToFlip.appendChild(img);
  }
}
