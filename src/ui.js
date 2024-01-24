function loadUI() {
    const container = document.createElement('div');
    container.classList.add('container')
    const winner = document.createElement('div');
    winner.innerHTML = 'Player 1 Wins!';
    winner.setAttribute('id', 'winner-box');
    winner.classList.add('winner-box');
    container.appendChild(winner);
    const title = document.createElement('div');
    title.innerHTML = 'BATTLESHIP';
    title.classList.add('title');
    container.appendChild(title);
    return container;
}

export default loadUI;