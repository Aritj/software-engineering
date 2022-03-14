import { TypeGameObject } from "../types/objects/TypeGameObject";

export type CollisionOptions = {
    registerCollisionObjects(gameObject: TypeGameObject): void;
    checkCollision(): void;
};
