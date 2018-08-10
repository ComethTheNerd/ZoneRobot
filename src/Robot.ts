import { IGrid } from './Grid';

export enum Facing
{
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

export interface IRobot // @TODO Will Smith joke
{
    place(x : number, y : number, facing : Facing) : boolean;
    move() : boolean;
    left() : boolean;
    right() : boolean;
    report() : { x : number, y : number, facing : Facing }
}

export class Robot implements IRobot
{
    private facing : Facing;
    private x : number;
    private y : number;

    constructor(private grid : IGrid)
    {
        this.x = - 1;
        this.y = - 1;

        // setting this to a default in case .report() is called before the robot
        // is placed for the first time
        this.facing = Facing.South;
    }

    isPlaced()
    {
        return this.grid.isWithinBounds(this.x, this.y);
    }

    place(x : number, y : number, facing : Facing) : boolean
    {
        if(this.grid.isWithinBounds(x, y))
        {
            this.x = x;
            this.y = y;
            this.facing = facing;
            
            return true;
        }
        else
        {
            return false;
        }
    }

    move() : boolean
    {
        if(this.isPlaced())
        {
            switch(this.facing)
            {
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
        else
        {
            return false;
        }
    }

    left() : boolean
    {
        if(this.isPlaced())
        {
            switch(this.facing)
            {
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
        else
        {
            return false;
        }
    }
    
    right() : boolean
    {
        if(this.isPlaced())
        {
            switch(this.facing)
            {
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
        else
        {
            return false;
        }
    }

    report() : { x : number, y : number, facing : Facing }
    {
        return { x : this.x, y : this.y, facing : this.facing };
    }
}