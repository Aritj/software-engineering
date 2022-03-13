import { Vector2D } from "../../Vector2D";

export type TypeTransform = {
    position: Readonly<Vector2D>;
    rotation: Readonly<number>;
    width: Readonly<number>;
    height: Readonly<number>;
    scaleX: Readonly<number>;
    scaleY: Readonly<number>;
    z: Readonly<number>;
    setPosition(value: Vector2D): void;
    setRotation(value: number): void;
    setWidth(value: number): void;
    setHeight(value: number): void;
    setScaleX(value: number): void;
    setScaleY(value: number): void;
    setZ(value: number): void;
    translate(value: Vector2D): void;
    rotate(value: number): void;
};
