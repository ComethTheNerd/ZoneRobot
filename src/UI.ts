import { IGrid } from './Grid';
import { IRobot, Facing } from './Robot';

const BlackSquareGlyph = '⬛';
const WhiteSquareGlyph = '⬜';
const RobotGlyph = '🤖';

export function draw(grid : IGrid, robot : IRobot)
{
    const root = document.getElementById('root');

    if(!!root)
    {
        const gridContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const controlPanelContainer = document.createElement('div');

        updateControlPanel(controlPanelContainer, gridContainer, grid, robot);

        updateGrid(gridContainer, grid, robot);

        updateStatus(statusContainer);

        root.appendChild(gridContainer);

        root.appendChild(controlPanelContainer);

        root.appendChild(statusContainer);
    }
}

function updateControlPanel(container : HTMLElement, gridContainer : HTMLElement, grid : IGrid, robot : IRobot)
{
    container.innerHTML = '';

    const placeBtn = document.createElement('button');

    placeBtn.addEventListener('click', () => {
        if(robot.place(0, 0, Facing.South))
        {
            updateGrid(gridContainer, grid, robot);
        }
        else
        {

        }
    });

    const leftBtn = document.createElement('button');

    leftBtn.addEventListener('click', () => {
        if(robot.left())
        {
            updateGrid(gridContainer, grid, robot);
        }
        else
        {

        }
    });

    const rightBtn = document.createElement('button');

    rightBtn.addEventListener('click', () => {
        if(robot.right())
        {
            updateGrid(gridContainer, grid, robot);
        }
        else
        {

        }
    });

    const moveBtn = document.createElement('button');

    moveBtn.addEventListener('click', () => {
        if(robot.move())
        {
            updateGrid(gridContainer, grid, robot);
        }
        else
        {

        }
    });

    container.appendChild(placeBtn);
    container.appendChild(leftBtn);
    container.appendChild(moveBtn);
    container.appendChild(rightBtn); 
}

function updateGrid(container : HTMLElement, grid : IGrid, robot : IRobot)
{   
    container.innerHTML = '';

    var robotPosition = robot.report();
    
    for(var y = 0; y < grid.rowCount; ++y)
    {
        var row = document.createElement('div');

        for(var x = 0; x < grid.columnCount; ++x)
        {
            var square = document.createElement('div');

            if(x === robotPosition.x && y == robotPosition.y)
            {
                square.textContent = RobotGlyph;
            }
            else if((x % 2) === (y % 2))
            {
                square.textContent = BlackSquareGlyph;
            }
            else
            {
                square.textContent = WhiteSquareGlyph;
            }

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function updateStatus(container : HTMLElement)
{

}
