function loadPlaceBox() {
    const container = document.createElement('div');
    const grid_container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const node = document.createElement('div');
            node.classList.add('grid-node');
            grid_container.appendChild(node);
        }
    }
    const button = document.createElement('button');
    button.innerHTML = 'Confirm';
    button.setAttribute('id', 'confirm-btn');
    grid_container.classList.add('place-box');
    container.appendChild(grid_container);
    container.appendChild(button);
    container.classList.add('place-container');
    container.setAttribute('id', 'place-box');
    return container;
}

export default loadPlaceBox;