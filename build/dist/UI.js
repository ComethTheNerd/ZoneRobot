"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = require("./Robot");
const RobotGlyph = '🤖';
function draw(grid, robot) {
    const root = document.getElementById('root');
    if (!!root) {
        const gridContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const controlPanelContainer = document.createElement('div');
        updateControlPanel(controlPanelContainer, gridContainer, statusContainer, grid, robot);
        updateGrid(gridContainer, grid, robot);
        updateStatus(statusContainer, "Hit PLACE to get started!");
        root.appendChild(gridContainer);
        root.appendChild(controlPanelContainer);
        root.appendChild(statusContainer);
    }
}
exports.draw = draw;
function updateControlPanel(container, gridContainer, statusContainer, grid, robot) {
    container.innerHTML = '';
    container.classList.add('control-panel');
    const showFailureStatus = () => {
        const message = robot.isPlaced() ? "Uh oh! I would fall off if I move there!" : "Uh oh! You haven't placed me yet!";
        updateStatus(statusContainer, message, "negative");
    };
    const showPositionStatus = () => {
        const { x, y, facing } = robot.report();
        updateStatus(statusContainer, `Beep bop! Now at (${x}, ${y}) facing ${facing}!`);
    };
    const placeBtn = document.createElement('button');
    placeBtn.textContent = 'place';
    placeBtn.addEventListener('click', () => {
        if (robot.place(0, 0, Robot_1.Facing.South)) {
            updateGrid(gridContainer, grid, robot);
            showPositionStatus();
        }
        else {
            showFailureStatus();
        }
    });
    const leftBtn = document.createElement('button');
    leftBtn.textContent = 'left';
    leftBtn.addEventListener('click', () => {
        if (robot.left()) {
            updateGrid(gridContainer, grid, robot);
            showPositionStatus();
        }
        else {
            showFailureStatus();
        }
    });
    const rightBtn = document.createElement('button');
    rightBtn.textContent = 'right';
    rightBtn.addEventListener('click', () => {
        if (robot.right()) {
            updateGrid(gridContainer, grid, robot);
            showPositionStatus();
        }
        else {
            showFailureStatus();
        }
    });
    const moveBtn = document.createElement('button');
    moveBtn.addEventListener('click', () => {
        if (robot.move()) {
            updateGrid(gridContainer, grid, robot);
            showPositionStatus();
        }
        else {
            showFailureStatus();
        }
    });
    moveBtn.textContent = 'move';
    container.appendChild(placeBtn);
    container.appendChild(leftBtn);
    container.appendChild(moveBtn);
    container.appendChild(rightBtn);
}
function updateGrid(container, grid, robot) {
    container.innerHTML = '';
    container.classList.add('grid');
    var robotPosition = robot.report();
    for (var y = 0; y < grid.rowCount; ++y) {
        var row = document.createElement('div');
        row.classList.add('row');
        for (var x = 0; x < grid.columnCount; ++x) {
            var square = document.createElement('div');
            square.classList.add('square');
            if (x === robotPosition.x && y == robotPosition.y) {
                square.textContent = RobotGlyph;
                switch (robotPosition.facing) {
                    case Robot_1.Facing.North:
                        square.classList.add('face-north');
                        break;
                    case Robot_1.Facing.East:
                        square.classList.add('face-east');
                        break;
                    case Robot_1.Facing.West:
                        square.classList.add('face-west');
                        break;
                }
            }
            else if ((x % 2) === (y % 2)) {
                square.classList.add('pattern-1');
            }
            else {
                square.classList.add('pattern-2');
            }
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
function updateStatus(container, message, tone = 'positive') {
    container.innerHTML = '';
    container.classList.add('status');
    var messageContainer = document.createElement('div');
    messageContainer.textContent = message;
    messageContainer.classList.add(tone);
    container.appendChild(messageContainer);
}
//# sourceMappingURL=UI.js.map