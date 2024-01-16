function loadUI() {
    const container = document.createElement('div');
    container.classList.add('container')
    const title = document.createElement('div');
    title.innerHTML = 'BATTLESHIP';
    title.classList.add('title');
    container.appendChild(title);
    return container;
}

export default loadUI;