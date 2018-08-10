"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Facing;
(function (Facing) {
    Facing["North"] = "NORTH";
    Facing["South"] = "SOUTH";
    Facing["East"] = "EAST";
    Facing["West"] = "WEST";
})(Facing = exports.Facing || (exports.Facing = {}));
class Robot {
    constructor(grid) {
        this.grid = grid;
        this.x = -1;
        this.y = -1;
        // setting this to a default in case .report() is called before the robot
        // is placed for the first time
        this.facing = Facing.South;
    }
    isPlaced() {
        return this.grid.isWithinBounds(this.x, this.y);
    }
    place(x, y, facing) {
        if (this.grid.isWithinBounds(x, y)) {
            this.x = x;
            this.y = y;
            this.facing = facing;
            return true;
        }
        else {
            return false;
        }
    }
    move() {
        if (this.isPlaced()) {
            switch (this.facing) {
                case Facing.North:
                    return this.place(this.x, this.y - 1, this.facing);
                case Facing.East:
                    return this.place(this.x + 1, this.y, this.facing);
                case Facing.South:
                    return this.place(this.x, this.y + 1, this.facing);
                case Facing.West:
                    return this.place(this.x - 1, this.y, this.facing);
                default:
                    // invalid
                    return false;
            }
        }
        else {
            return false;
        }
    }
    left() {
        if (this.isPlaced()) {
            switch (this.facing) {
                case Facing.North:
                    this.facing = Facing.West;
                    break;
                case Facing.East:
                    this.facing = Facing.North;
                    break;
                case Facing.South:
                    this.facing = Facing.East;
                    break;
                case Facing.West:
                    this.facing = Facing.South;
                    break;
                default:
                    // invalid
                    return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    right() {
        if (this.isPlaced()) {
            switch (this.facing) {
                case Facing.North:
                    this.facing = Facing.East;
                    break;
                case Facing.East:
                    this.facing = Facing.South;
                    break;
                case Facing.South:
                    this.facing = Facing.West;
                    break;
                case Facing.West:
                    this.facing = Facing.North;
                    break;
                default:
                    // invalid
                    return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    report() {
        return { x: this.x, y: this.y, facing: this.facing };
    }
}
exports.Robot = Robot;
//# sourceMappingURL=Robot.js.map