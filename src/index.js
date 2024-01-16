import loadUI from "./ui";
import grid from './modules/grid';
import Game from "./modules/game";
import './styles.css';


//document.body.appendChild(loadUI());
const ui = loadUI();
const grid1 = grid.createGrid('player1');
const grid2 = grid.createGrid('player2');
ui.appendChild(grid1);
ui.appendChild(grid2);
document.body.appendChild(ui);
Game();