const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const gameBoard = document.getElementById("game-board");

btnStart.addEventListener("click", () => {
  header.classList.add("hidden");

  const game = new Game();
  console.log(game);

  game.genBoard(gameBoard);
  game.positionPictures();

  console.log(game);

  for (let i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].addEventListener("click", (event) => {
      game.flipCard(event.target, i);
    });
  }
});
