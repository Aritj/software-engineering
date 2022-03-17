

import { CollisionSystem } from "../Collision/CollisionSystem";
import { TriggerSystem } from "../Collision/TriggerSystem";
import {PropsWithChildren, useCallback, useState} from "react";
import {CollisionComponent} from "../components/Components";
import { DebuggerSystem } from "../DebuggerSystem";
import {TypeGameObject} from "../types/objects/TypeGameObject";
import {GameLoopContext} from "./GameLoopContext";



export function GameLoop(props: PropsWithChildren<{}>) {
    CollisionSystem.initialize(); //initialize static collision system
    TriggerSystem.initialize();


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
            obj.active && obj.components.forEach((comp) => {
                comp.enabled ? comp.Update(now) : console.log(comp)
            });
        });

        CollisionSystem.checkCollision(); // check for Collisions

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
