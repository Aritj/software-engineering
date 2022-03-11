import { Vector2D } from "../../Vector2D";

export type TypeTransform = {
    position: Readonly<Vector2D>;
    scaleX: Readonly<number>;
    scaleY: Readonly<number>;
    z: Readonly<number>;
    setPosition(value: Vector2D): void;
    setScaleX(value: number): void;
    setScaleY(value: number): void;
    setZ(value: number): void;
    translate(value: Vector2D): void;
};
