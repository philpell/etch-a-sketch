//Sets the inital grid size to 16 x 16
let num = 32

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
        if(colour.textContent.trim() === 'Random'){
            e.target.style.backgroundColor = 'black';
        } else{
            e.target.style.backgroundColor = selectColour();
        }
})
grid.appendChild(cells); 
}
};

createGrid();

// Adds event listener to the shake button to reset cells back to white

const shake = document.querySelector('#shake');
shake.addEventListener('click', clearGrid);

//Function to reset all of the cells to white
function clearGrid(){
    cells = grid.children;
    for (let i = 0; i < num*num; i++) {
        cells[i].style.backgroundColor = 'white';
    }
};

//Event listener to change the button text based on button click
const colourBtn = document.querySelector('#colour');
colourBtn.addEventListener('click', changeColour);

//Function to change the colour of the cells
function changeColour(){
    if(colour.textContent === 'Random'){
        document.getElementById("colour").textContent = "Black";
    } else{
        document.getElementById("colour").textContent = "Random";  
    }
}

//Event listener to change the size of the cell based on button click
const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', changeSize);

//Function to change cell size and create new grid
function changeSize(){
    if(size.textContent.trim()   === 'Medium'){
        setMedium();
    } else if(size.textContent.trim() === 'Large'){
        setLarge();
    } else {
        setSmall();
    }
}

function setLarge(){
    //clear current grid
    clearGrid();
    //Set cell size
    document.getElementById("size").textContent = "Small";
    num = 16;
    //Define grid rows and columns
    grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    //Create new grid
    createGrid();
}

function setMedium(){
    clearGrid();
    document.getElementById("size").textContent = "Large";
    num = 32;
    grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    createGrid();
}

function setSmall(){
    clearGrid();
    document.getElementById("size").textContent = "Medium";
    num = 64;
    grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    createGrid();
}

//Choose random colour
function selectColour(){
    const randomColour = "#" + (Math.floor(Math.random()*16777215).toString(16));
    return randomColour
}