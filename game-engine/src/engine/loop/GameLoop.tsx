import { PropsWithChildren, useCallback, useState } from "react";
import { PlayerController } from "../../games/flappyBird/PlayerController";
import { CollisionComponent } from "../components/Components";
import { GameComponent } from "../superClasses/GameComponent";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { GameLoopContext } from "./GameLoopContext";


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
                    console.log(collisionObject);
                    return collisionObject;
                })
                return;

            }
        
    };

    const checkCollision = () => {

        
        for (let i: number = 0; i < collisionObject.length; i++) {
            let current: TypeGameObject = collisionObject[i]
            
            for (let j: number = i+1; j < collisionObject.length; j+1) {
                if (current == collisionObject[j]) {
                    continue;
                }
                if (((current.transform.position.y + current.height) < (collisionObject[j].transform.position.y)) ||
                (current.transform.position.y > (collisionObject[j].transform.position.y + collisionObject[j].height)) ||
                ((current.transform.position.x + current.width) < collisionObject[j].transform.position.x) ||
                (current.transform.position.x > (collisionObject[j].transform.position.x + collisionObject[j].width))) {
                    console.log("Collision");
                    
                }
            }
        }
       
    }

    const updateLoop = (now: number) => {
        // Updates

        checkCollision();
        objects.forEach((obj) => {
            obj.components.forEach((comp) => comp.enabled && comp.Update(now));
            

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
        <GameLoopContext.Provider value={{ registerObject, start, registerCollisionObjects}}>
            {props.children}
        </GameLoopContext.Provider>
    );
}
