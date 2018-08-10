
export interface IGrid
{
    rowCount : number;
    columnCount : number;
    isWithinBounds(x : number, y : number) : boolean;
}

export class Grid implements IGrid
{
    constructor(public readonly columnCount : number, public readonly rowCount : number)
    {
    }

    isWithinBounds(x : number, y : number) : boolean
    {
        return x >= 0 && x < this.columnCount && y >= 0 && y < this.rowCount;
    }
}