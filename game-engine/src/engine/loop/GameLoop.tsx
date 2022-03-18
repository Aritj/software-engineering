

import { CollisionSystem } from "../Collision/CollisionSystem";
import { TriggerSystem } from "../Collision/TriggerSystem";
import {PropsWithChildren, useCallback, useState} from "react";
import {CollisionComponent} from "../components/Components";
import { DebuggerSystem } from "../DebuggerSystem";
import {TypeGameObject} from "../types/objects/TypeGameObject";
import {GameLoopContext} from "./GameLoopContext";
import { PointSystem } from "../Collision/PointSystem";

let lastCalledTime: number;
var fps: number;

export function GameLoop(props: PropsWithChildren<{}>) {
    CollisionSystem.initialize(); //initialize static collision system
    TriggerSystem.initialize();
    PointSystem.initialize();
    console.log(PointSystem.getPoint());
     

    const [objects, setObject] = useState<TypeGameObject[]>([]);

    const getFPS = () => {
        if(!lastCalledTime) {
           lastCalledTime = Date.now();
           fps = 0;
           return;
        }
        let delta = (Date.now() - lastCalledTime)/1000;
        lastCalledTime = Date.now();
        fps = Math.round(1/delta);
    }

    const registerObject = (gameObject: TypeGameObject) => {
        setObject((objects) => {
            objects.push(gameObject);
            return objects;
        });
    };

    const updateLoop = (now: number) => {

        getFPS();

        if (DebuggerSystem.getDebugStatus()) {
            //console.log("FPS: " + fps);
        }
        
        // Updates
        objects.forEach((obj) => {
            obj.active && obj.components.forEach((comp) => {
                comp.enabled ? comp.Update(now) : console.log();
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
