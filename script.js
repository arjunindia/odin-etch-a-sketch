const container = document.querySelector(".container");
const size = Math.min(window.innerHeight, window.innerWidth);
container.style.width = `${size}px`;
container.style.height = `${size}px`;
const createSquares = (count, sqSize) => {
  let squares = [];
  let mouseOverHandler = (e) => {
    e.currentTarget.style.background = "#111";
  };
  for (i = 0; i < count; i++) {
    let square = document.createElement("div");
    square.style.width = `${sqSize}px`;
    square.style.height = `${sqSize}px`;

    square.addEventListener("mouseover", mouseOverHandler);
    squares.push(square);
  }
  container.replaceChildren(...squares);
};

createSquares(16 * 16, size / 16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let input = window.prompt(
    "Enter the number of squares per side: (limit 100)",
  );
  let sideCount = Number(input);
  if (!isNaN(sideCount) && sideCount >= 0 && sideCount <= 100) {
    let sqSize = size / sideCount;
    createSquares(sideCount * sideCount, sqSize);
  }
});
