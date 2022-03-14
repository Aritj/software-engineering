import { TypeGameObject } from "../types/objects/TypeGameObject";

export type GameLoopOptions = {
    registerObject(gameObject: TypeGameObject): void;
    start(): void;
    registerCollisionObjects(gameObject: TypeGameObject): void;
};
