import { createContext } from "react";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { CollisionOptions } from "./CollisionOptions";

export const CollisionContext = createContext<CollisionOptions>({
    registerCollisionObjects(_gameObject: TypeGameObject){},
    checkCollision(){}
});
