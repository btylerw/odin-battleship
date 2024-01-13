function createGrid() {
    const grid_container = document.createElement('div');
    for (let i = 0; i < 100; i++) {
        const node = document.createElement('div');
        node.innerHTML = i;
        node.classList.add('grid-node');
        grid_container.appendChild(node);
    }
    grid_container.classList.add('grid-container');
    return grid_container;
}

export default createGrid;