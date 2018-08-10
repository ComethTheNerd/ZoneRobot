"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid {
    constructor(columnCount, rowCount) {
        this.columnCount = columnCount;
        this.rowCount = rowCount;
    }
    isWithinBounds(x, y) {
        return x >= 0 && x < this.columnCount && y >= 0 && y < this.rowCount;
    }
}
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map