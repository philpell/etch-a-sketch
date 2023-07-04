//Sets the inital grid size to 16 x 16
let num = 16 //prompt('size?')

//Uses the num input to create a grid with the specified number of rows and columns 
const grid = document.querySelector('.grid');
grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);

// A function to create cells and add them to the grid plus change the cell 
// colour to black when the mouse is over the cell  
createGrid = () => {
for (let i = 0; i < num*num; i++) {
    const cells = document.createElement('div');
    cells.classList.add('cell');
    cells.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black';
        return cells   
    })
    grid.appendChild(cells); 
}
};

createGrid();

// Adds event listener to the shake button to reset cells back to white

const shake = document.querySelector('#shake');
shake.addEventListener('click', clearGrid);

function clearGrid(){
    cells = grid.children;
    for (let i = 0; i < num*num; i++) {
        cells[i].style.backgroundColor = 'white';
    }
};

//Event listener to change the colour of the cell based on button click
const colourBtn = document.querySelector('#colour');
colourBtn.addEventListener('click', changeColour);

//Function to change the colour of the cells
function changeColour(){
    if(colour.textContent.trim()   === 'Rainbow'){
        document.getElementById("colour").textContent = "Black";
        createGrid();
    } else{
        document.getElementById("colour").textContent = "Rainbow";
        createGrid();
    }
}

//Event listener to change the size of the cell based on button click
const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', changeSize);

//Function to change the size of the cells
function changeSize(){
    if(size.textContent.trim()   === 'Medium'){
        clearGrid();
        //change button text to the next size
        document.getElementById("size").textContent = "Large";
        //Set the size of the cell
        num = 16;
        grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
        createGrid();
    } else if(size.textContent.trim() === 'Large'){
        clearGrid();
        document.getElementById("size").textContent = "Small";
        num = 8;
        grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
        createGrid();
    } else {
        clearGrid();
        document.getElementById("size").textContent = "Medium";
        num = 32;
        grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
        createGrid();
    }
}
