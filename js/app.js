///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";

  render();
}

function render() {
  board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    })
  }

  render();   // we'll write this later
}
