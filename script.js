let container = document.querySelector("#container");
let currentColor = "black";

function setup(){
    for(let i = 0; i<16; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j<16; j++){
            let nestedElement = document.createElement("div")
            nestedElement.className = "rowElement";
            nestedElement.addEventListener("mouseover", ()=>hover(nestedElement));
            nestedElement.addEventListener("mouseleave", ()=>unHover(nestedElement));
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