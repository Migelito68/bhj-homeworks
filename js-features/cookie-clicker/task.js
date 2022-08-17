const img = document.getElementById("cookie");

function changeSize() {
  let output = document.getElementById("clicker__counter");
  output.textContent++;
  
  img.width = output.textContent % 2 !== 0 ? 150 : 200;
  
}

img.onclick = changeSize;