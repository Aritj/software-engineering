export class Vector2D {

    constructor(public x: number, public y: number) {
    }

    public static get zero(): Vector2D {
        return new Vector2D(0, 0);
    }

    public static get one(): Vector2D {
        return new Vector2D(1, 1);
    }

    public static get right(): Vector2D {
        return new Vector2D(1, 0);
    }

    public static get left(): Vector2D {
        return new Vector2D(-1, 0);
    }

    public static get up(): Vector2D {
        return new Vector2D(0, 1);
    }

    public static get down(): Vector2D {
        return new Vector2D(0, -1);
    }

    public static add(a: Vector2D, b: Vector2D): Vector2D {
        return new Vector2D(a.x + b.x, a.y + b.y);
    }

    public static subtract(a: Vector2D, b: Vector2D): Vector2D {
        return new Vector2D(a.x - b.x, a.y - b.y);
    }

    public static multiply(v: Vector2D, scalar: number): Vector2D {
        return new Vector2D(v.x * scalar, v.y * scalar);
    }

    public add(rhs: Vector2D) {
        this.x += rhs.x;
        this.y += rhs.y;

        return this;
    }

    public subtract(rhs: Vector2D) {
        this.x -= rhs.x;
        this.y -= rhs.y;

        return this;
    }

    public multiply(rhs: number) {
        this.x *= rhs;
        this.y *= rhs;

        return this;
    }
}