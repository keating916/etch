let container = document.getElementById("container"); //get container element for grid
 // create div element for grid
container.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); height: 100vh; width: auto;";
generateDivs(16)
function colorGenerator() {
    let color ='#'+Math.floor(Math.random()*16777215).toString(16);
    return color
}
function generateDivs(x) {
    for(let i=0; i<x**2; i++) {
        let grid = document.createElement("div");
        grid.style = `border: 1px solid black;`
        grid.className = "gridItems";
        container.appendChild(grid)
    }
}
function changeColor(item) {
    let color = colorGenerator()
    item.style= `background-color = ${color}`;
}
let gridItems = document.getElementsByClassName("gridItems");
for(let i = 0; i <gridItems.length; i++) {
    gridItems[i].addEventListener('click', e => {
        console.log("Clicked index: " + i);
}