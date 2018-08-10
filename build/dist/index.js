"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./Grid");
const Robot_1 = require("./Robot");
const UI = require("./UI");
const RowCount = 5;
const ColumnCount = 5;
const grid = new Grid_1.Grid(ColumnCount, RowCount);
const robot = new Robot_1.Robot(grid);
UI.draw(grid, robot);
/*


function runSimulation()
{
    const grid : IGrid = new Grid(5,5);

    const robot : IRobot = new Robot(grid);

    robot.place(0, 0, Facing.North);

    robot.move();

    robot.report();

    robot.place(0, 0, Facing.North);

    robot.left();

    robot.report();

    robot.place(1, 2, Facing.East);

    robot.move();

    robot.move();

    robot.left();

    robot.move();

    robot.report();
}
*/ 
//# sourceMappingURL=index.js.map