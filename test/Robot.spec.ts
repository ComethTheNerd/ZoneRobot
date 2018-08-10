
import "jasmine";
import { IGrid, Grid } from '../src/Grid';
import { IRobot, Robot, Facing } from '../src/Robot';

const RowCount = 5;
const ColumnCount = 5;

describe("Robot", () => {

  var grid : IGrid;
  var robot : IRobot;

  beforeEach(() => {

    grid = new Grid(ColumnCount, RowCount);
    robot = new Robot(grid);

  });

  it("does not execute commands until placed", () => {

    expect(robot.isPlaced()).toBe(false);

    expect(robot.move()).toBe(false);

    expect(robot.place(0, 0, Facing.South)).toBe(true);

    expect(robot.move()).toBe(true);

    expect(robot.isPlaced()).toBe(true);

  });

  it("does not fall off the grid", () => {

    robot.place(0, 0, Facing.West);

    expect(robot.move()).toBe(false);

    robot.place(0, 0, Facing.North);

    expect(robot.move()).toBe(false);

    robot.place(0, RowCount - 1, Facing.South);

    expect(robot.move()).toBe(false);

    robot.place(ColumnCount - 1, 0, Facing.East);

    expect(robot.move()).toBe(false);
  });

  it("reports the correct status", () => {

    robot.place(0, 0, Facing.North);

    robot.move();

    var pos = robot.report();

    expect(pos.x).toEqual(0);
    expect(pos.y).toEqual(0);
    expect(pos.facing).toEqual(Facing.North);

    robot.place(0, 0, Facing.North);

    robot.left();

    pos = robot.report();

    expect(pos.x).toEqual(0);
    expect(pos.y).toEqual(0);
    expect(pos.facing).toEqual(Facing.West);

    robot.place(1, 2, Facing.East);

    robot.move();

    robot.move();

    robot.left();

    robot.move();

    pos = robot.report();

    expect(pos.x).toEqual(3);
    expect(pos.y).toEqual(1);
    expect(pos.facing).toEqual(Facing.North);

  });

});