function loadPlaceBox() {
    const container = document.createElement('div');
    container.setAttribute('id', 'place-window');
    const grid_container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const node = document.createElement('div');
            node.setAttribute('id', i + '.' + j);
            node.classList.add('placement-nohighlight');
            grid_container.appendChild(node);
        }
    }
    const button = document.createElement('button');
    const pos_btn = document.createElement('button');
    pos_btn.innerHTML = 'Horizontal'
    button.innerHTML = 'Confirm';
    const buttons = document.createElement('div');
    buttons.classList.add('buttons-container')
    button.setAttribute('id', 'confirm-btn');
    pos_btn.setAttribute('id', 'position-btn')
    grid_container.classList.add('place-box');
    container.appendChild(grid_container);
    buttons.appendChild(button);
    buttons.appendChild(pos_btn);
    container.appendChild(buttons);
    container.classList.add('place-container');
    container.setAttribute('id', 'place-box');
    return container;
}

export default loadPlaceBox;