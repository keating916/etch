let container = document.getElementById("container"); //get container element for grid
 // create div element for grid
 let v = 16;
let header = document.getElementById('header');
header.style= "display: flex; width: 400px;;"
container.style.cssText = `display: grid; grid-template-columns: repeat(${v}, 1fr); grid-template-rows: repeat(${v}, 1fr); height: 400px; width: 400px; border: 1px solid black; padding: auto;`;
let button = document.getElementById('clear')
button.style.height = "auto"; 
generateDivs(v)
function colorGenerator() {
    let color ='#'+Math.floor(Math.random()*16777215).toString(16);
    return color
}
function generateDivs(x) {
    for(let i=0; i<x**2; i++) {
        let grid = document.createElement("div");
        grid.style = `background-color: white`
        grid.className = "gridItems";
        grid.id = i;
        container.appendChild(grid)
    }
}
function changeColor() {
    let color = colorGenerator()
    return color;
}
let totalGrid = document.getElementsByClassName("gridItems");
for(let i = 0; i < totalGrid.length; i++) {
    let item = document.getElementById(`${i}`);
    item.addEventListener("mouseover", function() {
        item.style = `background-color: ${changeColor()}`
    })
};
button.addEventListener('click', e => {
    let input = prompt("How many squares would you like across?")
    v=input;
    for(let i = 0; i < totalGrid.length; i++) {
        let item = document.getElementById(`${i}`)
        document.removeChild(container);
    }
    generateDivs(v);
})