import { Vector2D } from "../../Vector2D";

export type TypeTransform = {
    position: Readonly<Vector2D>;
    scale: Readonly<Vector2D>;
    setPosition(value: Vector2D): void;
    setScale(value: Vector2D): void;
    translate(value: Vector2D): void;
};
