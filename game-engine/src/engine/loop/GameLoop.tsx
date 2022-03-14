import { PropsWithChildren, useCallback, useState } from "react";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { GameLoopContext } from "./GameLoopContext";

export function GameLoop(props: PropsWithChildren<{}>) {
    const [objects, setObject] = useState<TypeGameObject[]>([]);

    const registerObject = (gameObject: TypeGameObject) => {
        setObject((objects) => {
            objects.push(gameObject);
            return objects;
        });
    };

    const updateLoop = (now: number) => {
        // Updates
        objects.forEach((obj) => {
            obj.active && obj.components.forEach((comp) => comp.enabled && comp.Update(now));
        });

        window.requestAnimationFrame(updateLoop);
    };

    const start = useCallback(() => {
        objects.forEach((obj) => {
            obj.components.forEach((comp) => comp.Start());
        });

        window.requestAnimationFrame(updateLoop);
    }, []);

    return (
        <GameLoopContext.Provider value={{ registerObject, start }}>
            {props.children}
        </GameLoopContext.Provider>
    );
}
