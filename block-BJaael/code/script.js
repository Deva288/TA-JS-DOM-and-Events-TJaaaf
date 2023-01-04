let parentBox = document.querySelector(".boxes");

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum is inclusive.
  }
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); 
    
}


for (let i = 1; i <= 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    let h3 = document.createElement("h3");
    h3.innerText = getRandomNumber(1, 500);
    
    div.append(h3);
    parentBox.append(div);
};

let allBoxes = document.querySelectorAll(".box");

function handleMouseMove() {
    allBoxes.forEach((box) => {
        box.style.backgroundColor = getRandomColor();
        box.querySelector("h3").innerText = getRandomNumber(1, 500);
    });
}

parentBox.addEventListener("mousemove",  handleMouseMove);
