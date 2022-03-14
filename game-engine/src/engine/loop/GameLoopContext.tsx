import { createContext } from "react";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { GameLoopOptions } from "./GameLoopOptions";

export const GameLoopContext = createContext<GameLoopOptions>({
    registerObject(_gameObject: TypeGameObject) {},
    start() {},
    registerCollisionObjects(_gameObject: TypeGameObject){}
});
