
import "jasmine";
import { IGrid, Grid } from '../src/Grid';

const RowCount = 5;
const ColumnCount = 3;

describe("Grid", () => {

  var grid : IGrid;

  beforeEach(() => {

    grid = new Grid(ColumnCount, RowCount);

  });

  it("detects positions within bounds", () => {

    expect(grid.isWithinBounds(0, 0)).toBe(true);
    
    expect(grid.isWithinBounds(0, RowCount + 1)).toBe(false);

    expect(grid.isWithinBounds(0, RowCount - 1)).toBe(true);

    expect(grid.isWithinBounds(ColumnCount + 1, 0)).toBe(false);

    expect(grid.isWithinBounds(ColumnCount - 1, 0)).toBe(true);

    expect(grid.isWithinBounds(1, 1)).toBe(true);

  });

});