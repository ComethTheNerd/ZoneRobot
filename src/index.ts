import { Grid } from './Grid';
import { Robot } from './Robot';
import * as UI from './UI';

const RowCount = 5;
const ColumnCount = 5;

const grid = new Grid(ColumnCount, RowCount);
const robot = new Robot(grid);

UI.draw(grid, robot);