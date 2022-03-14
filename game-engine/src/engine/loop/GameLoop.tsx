import {PropsWithChildren, useCallback, useState} from "react";
import {PlayerController} from "../../games/flappyBird/PlayerController";
import { useCollision } from "../Collision/useCollision";
import {CollisionComponent} from "../components/Components";
import {GameComponent} from "../superClasses/GameComponent";
import {TypeGameObject} from "../types/objects/TypeGameObject";
import {GameLoopContext} from "./GameLoopContext";


export function GameLoop(props: PropsWithChildren<{}>) {
    const [objects, setObject] = useState<TypeGameObject[]>([]);

    const {registerCollisionObjects, checkCollision} = useCollision();

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
        checkCollision();
        window.requestAnimationFrame(updateLoop);
    };

    const start = useCallback(() => {
        objects.forEach((obj) => {
            obj.components.forEach((comp) => comp.Start());
        });
        window.requestAnimationFrame(updateLoop);
    }, []);

    return (
        <GameLoopContext.Provider value={{registerObject, start}}>
            {props.children}
        </GameLoopContext.Provider>
    );
}
