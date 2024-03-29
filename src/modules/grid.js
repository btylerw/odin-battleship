import hit_marker from '../imgs/hit_marker.svg';
import miss_marker from '../imgs/miss_marker.svg'

// Creating the DOM elements for our grid
function createGrid(player) {
    const grid_container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const node = document.createElement('div');
            node.classList.add('grid-node');
            node.setAttribute('id', player + '.' + i+'-'+j);
            grid_container.appendChild(node);
        }
    }
    grid_container.classList.add('grid-container');
    return grid_container;
}

// loadGrid() is used to display current grid situation
function loadGrid(board, x, y, player) {
    const node = document.getElementById(player+'.'+x+'-'+y);
    if (board === 'shot') {
        const img = new Image();
        img.src = hit_marker;
        img.classList.add('hit-marker');
        node.innerHTML = '';
        node.appendChild(img);
    } else if (board === 'miss') {
        const img = new Image();
        img.src= miss_marker;
        img.classList.add('miss-marker');
        node.innerHTML = '';
        node.appendChild(img);
    } else {
        node.innerHTML = '';
    }
}

export default { createGrid, loadGrid };