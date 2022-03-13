export class Vector2D {


  constructor(public x: number, public y: number) {}

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
    return new Vector2D(0, -1);
  }

  public static get down(): Vector2D {
    return new Vector2D(0, 1);
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

  //This can be used to Check direction
  //generally if > 0 same direction
  //if < 0 opposit, if == 0, perpendicular
  public dotProduct(v: Vector2D) {
    return (this.x *= v.x) + (this.y *= v.y);
  }

  //calculate the lenght of this vector
  // sqrt a*a + b*b
  public lenght() {
    return Math.sqrt(this.dotProduct(this));
  }

  normalize() {
    return this.divide(this.lenght());
}

  public add(rhs: Vector2D) {
    this.x += rhs.x;
    this.y += rhs.y;

    return this;
  }

  //special case of adding
  public subtract(rhs: Vector2D) {
    this.x += (-rhs.x);
    this.y += (-rhs.y);

    return this;
  }

  //multiply bynscalar
  public multiply(rhs: number) {
    this.x *= rhs;
    this.y *= rhs;

    return this;
  }

  //special case of multiplying
  divide(v: Vector2D|number) {
    if (v instanceof Vector2D) {
        if(v.x != 0) this.x /= v.x;
        if(v.y != 0) this.y /= v.y;
    } else {
        if(v != 0) {
            this.x /= v;
            this.y /= v;
        }
    }
    return this;
}

  public getRandomInt(min: number, max: number): number {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
}
