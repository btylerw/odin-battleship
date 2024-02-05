// Is this file even necessary? Need to get certain gameboard object to place ships on
// Possibly loop through for each ship that we're placing to highlight each node? Change which direction

// We're looping through based on if it's horizontal or vertical
function put_ship() {
    let ship_count = 0;
    const checkBox = (e) => {
        //console.log(e.srcElement.id);
        const grid = e.srcElement.id.split('.');
        console.log(grid);
    }

    const highlightGrid = (e) => {
        const grid = e.srcElement.id.split('.');
        //console.log(grid);
        //grid = grid.split('.');
        //console.log(grid);
        const dir = document.getElementById('position-btn').innerHTML;
        if (dir === 'Horizontal') {
            for (let i = 0; i < 4; i++) {
                const num = parseInt(grid[0]) + 1
                grid[0] = num.toString();
                //console.log(grid)
                const new_grid = grid.join('.');
                console.log(new_grid)
                const grid_node = document.getElementById(new_grid);
                grid_node.classList.toggle('placement-highlight');
            }
        }
    }

    const resetNodes = (e) => {
        const grid = e.srcElement.id.split('.');
        //console.log(grid);
        //grid = grid.split('.');
        //console.log(grid);
        const dir = document.getElementById('position-btn').innerHTML;
        if (dir === 'Horizontal') {
            for (let i = 0; i < 4; i++) {
                const num = parseInt(grid[0]) + 1
                grid[0] = num.toString();
                //console.log(grid)
                const new_grid = grid.join('.');
                console.log(new_grid)
                const grid_node = document.getElementById(new_grid);
                grid_node.classList.toggle('placement-nohighlight');
            }
        }
    }
    const nohighlight = document.querySelectorAll('.placement-nohighlight');
    const highlight = document.querySelector('.placement-highlight');
    window.addEventListener('click', checkBox);
    // Instead of using the window or container, we'll make special classes for the place node
    nohighlight.forEach(function(elem) {
        elem.addEventListener("mouseover", highlightGrid);
    });
    //nohighlight.addEventListener('mouseover', highlightGrid, false);
    nohighlight.forEach(function(elem) {
        elem.addEventListener("mouseout", resetNodes);
    });
    nohighlight.addEventListener('mouseout', resetNodes);
    const confirm = document.getElementById('confirm-btn');
    const position_btn = document.getElementById('position-btn')
    function changeDisplay() {
        const box = document.getElementById('place-box');
        box.style.display = 'none';
    }
    function changeDirection() {
        if (position_btn.innerHTML === 'Vertical') {
            position_btn.innerHTML = 'Horizontal';
        } else {
            position_btn.innerHTML = 'Vertical';
        }
    }
    confirm.addEventListener('click', changeDisplay);
    position_btn.addEventListener('click', changeDirection);
}

export default put_ship;