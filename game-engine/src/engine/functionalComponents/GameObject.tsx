import { Fragment, PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { CollisionSystem } from "../Collision/CollisionSystem";
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
        
       };
    
    useLayoutEffect(() => {
        props.components.forEach(comp => gameObject.addComponent(comp, true));
    }, []);

    useEffect(() => {
        loop.registerObject(gameObject);
        CollisionSystem.registerCollisionObjects(gameObject);
    }, []);


    return <Fragment>
        {components.map((comp, i) => {
            if (! comp.enabled) {
                return <Fragment key={i}></Fragment>
            }
            return <Fragment key={i + " : " + transform.position.x}>
                {comp.Render(transform.position)}
            </Fragment>
        })}
        {props.children}
    </Fragment>
}
