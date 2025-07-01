let container = document.querySelector("#container");
let newBoardButton = document.querySelector("#newBoard");
let currentColor = "black";
const DEFAULTSIZE = 16;
let gridSize = DEFAULTSIZE;


newBoardButton.addEventListener("click", ()=> newBoard());

function newBoard(){
    let newBoardSize = prompt("Please enter your preferred board size! (1-100)");
    while(!(newBoardSize>=1 && newBoardSize <=100)){
        prompt("Invalid board size! Please enter a number between 1 and 100!");
    }
    deleteBoard();
    gridSize = newBoardSize;
    setup();
}

function deleteBoard(){
    const parentContainer = document.getElementById("container");
    while(parentContainer.firstChild){
        parentContainer.firstChild.remove();
    }
}

function setup(){
    for(let i = 0; i<gridSize; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j<gridSize; j++){
            let nestedElement = document.createElement("div")
            nestedElement.className = "rowElement";
            nestedElement.addEventListener("mouseover", ()=>hover(nestedElement));
            //nestedElement.addEventListener("mouseleave", ()=>unHover(nestedElement));
            row.appendChild(nestedElement);
        }
        container.appendChild(row);
    }
}

function hover(element){
    element.style.backgroundColor = currentColor;
}

function unHover(element){
    element.style.backgroundColor = "";
}

setup();