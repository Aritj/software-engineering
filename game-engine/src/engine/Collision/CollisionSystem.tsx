import { PropsWithChildren, useState } from "react";
import { CollisionComponent } from "../components/Components";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { CollisionContext } from "./CollisionContext";


export function CollisionSystem(props: PropsWithChildren<{}>) {
    const [collisionObject, setCollisionObject] = useState<TypeGameObject[]>([]);

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


    return (
        <CollisionContext.Provider value={{registerCollisionObjects, checkCollision}}>
            {props.children}
        </CollisionContext.Provider>
    );
}
