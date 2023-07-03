const grid = document.querySelector('.grid');

createGrid = () => {
for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black';
    })
    grid.appendChild(cell); 
}
};

createGrid();

const shake = document.querySelector('#shake');
shake.addEventListener('click', function(){
    let num = 16;
    cell = grid.children;
    for (let i = 0; i < num*num; i++) {
        cell[i].style.backgroundColor = 'white';
             
    }
});