import { Fragment, PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { ColSys } from "../Collision/CollisionSystem";
import { PhysicsComponent } from "../components/Components";
import { useGameLoop } from "../loop";
import { GameComponent, GameComponentInstanceDefinition } from "../superClasses/GameComponent";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { PropsGameObject } from "../types/props/PropsGameObject";
import { Transform } from "./Transform";


export function GameObject(props: PropsWithChildren<PropsGameObject>) {
    const loop = useGameLoop();
    const [name, setName] = useState(props.name);
    const [image, setImage] = useState(props.image);
    const [active, setActive] = useState(props.active);
    const transform = Transform(props.transform);
    const [components, setComponents] = useState<GameComponent[]>([]);

       const gameObject: TypeGameObject = {
           name,
           image,
           active,
           setActive,
           transform,
           components: components,
           getComponent: <TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>): TComponent | null => {
               const found = components.find(comp => comp instanceof type);
               return found ? found as TComponent : null;
           },
           addComponent: <TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>, enabled: boolean = true): TComponent => {
               const newComp = new type(enabled, gameObject, transform);
               setComponents(components => {
                   components.push(newComp);
                   return components;
               });
               return newComp;
           },
           
           /**
            * Game specific
            * @param current
            * @param next 
            */
           onTriggered: (current: TypeGameObject, next: TypeGameObject) => {

                if (current.name == "Bird") {
                    
                    if (next.name == "lowerPipe" || next.name == "upperPipe") {
                        const physics = current.getComponent(PhysicsComponent);
                        
                        
                        for (let index = 0; index < 1000; index++) {
                            physics?.Update(0);
                        }

                        console.log(physics);
                        
                        physics?.Update(100);
                        console.log("bei");
                        
                    }
                }

           }
       };
    
    useLayoutEffect(() => {
        props.components.forEach(comp => gameObject.addComponent(comp, true));
    }, []);

    useEffect(() => {
        loop.registerObject(gameObject);
        ColSys.registerCollisionObjects(gameObject);
    }, []);
    

    return <Fragment>
        {components.map((comp, i) => {
            //console.log(comp)
            return <Fragment key={i + " : " + transform.position.x}>
                {comp.Render(transform.position)}
            </Fragment>
        })}
        {props.children}
    </Fragment>
}

function Physics(Physics: any) {
    throw new Error("Function not implemented.");
}
