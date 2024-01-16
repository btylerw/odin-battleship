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

export default createGrid;