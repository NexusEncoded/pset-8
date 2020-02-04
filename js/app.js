///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

function render() {
  board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    })
  }

  render();   // we'll write this later
}
