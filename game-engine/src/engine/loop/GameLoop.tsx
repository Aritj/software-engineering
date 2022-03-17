import {PropsWithChildren, useCallback, useState} from "react";
import {CollisionComponent} from "../components/Components";
import { DebuggerSystem } from "../DebuggerSystem";
import {TypeGameObject} from "../types/objects/TypeGameObject";
import {GameLoopContext} from "./GameLoopContext";


export function GameLoop(props: PropsWithChildren<{}>) {
    const [objects, setObject] = useState<TypeGameObject[]>([]);
    const [collisionObject, setCollisionObject] = useState<TypeGameObject[]>([]);

    const registerObject = (gameObject: TypeGameObject) => {
        setObject((objects) => {
            objects.push(gameObject);
            return objects;
        });
    };

    /**
     * Takes in gameObject and checks if its list of gameComponents include
     * @param gameObject
     */
    const registerCollisionObjects = (gameObject: TypeGameObject) => {
        if (gameObject.getComponent(CollisionComponent) !== null) {

            setCollisionObject((collisionObject) => {
                collisionObject.push(gameObject);
                return collisionObject;
            })

            return;
        }
    };

    const checkCollision = () => {
        for (let i: number = 0; i < collisionObject.length; i++) {
            let current: TypeGameObject = collisionObject[i]

            for (let j: number = i + 1; j < collisionObject.length; j++) {
                if (current == collisionObject[j]) {
                    continue;
                }

                if ((current.transform.position.x < (collisionObject[j].transform.position.x + collisionObject[j].transform.width)) &&
                    ((current.transform.position.x + current.transform.width) > collisionObject[j].transform.position.x) &&
                    (current.transform.position.y < (collisionObject[j].transform.position.y + collisionObject[j].transform.height)) &&
                    ((current.transform.height + current.transform.position.y) > collisionObject[j].transform.position.y)) {
                    console.log("Collision");
                }
            }
        }
    }

    const updateLoop = (now: number) => {
        
        objects.forEach((obj) => {
            obj.active && obj.components.forEach((comp) => {
                comp.enabled ? comp.Update(now) : console.log(comp)
            });
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
        <GameLoopContext.Provider value={{registerObject, start, registerCollisionObjects}}>
            {props.children}
        </GameLoopContext.Provider>
    );
}
