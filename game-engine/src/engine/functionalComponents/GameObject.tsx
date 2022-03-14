import { PropsWithChildren, useState } from "react";
import { GameComponent } from "../superClasses/GameComponent";
import { Transform } from "./Transform";
import { PropsGameObject } from "../types/props/PropsGameObject";
import { Fragment, useEffect, useLayoutEffect } from "react";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { GameComponentInstanceDefinition } from "../superClasses/GameComponent";
import { useGameLoop } from "../loop";


export function GameObject(props: PropsWithChildren<PropsGameObject>) {
    const loop = useGameLoop();

    const [name, setName] = useState(props.name);
    const [image, setImage] = useState(props.image);
    const [active, setActive] = useState(props.active);
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState(props.width);
    const transform = Transform(props.transform);

    const [components, setComponents] = useState<GameComponent[]>([]);

       const gameObject: TypeGameObject = {
           name,
           image,
           active,
           height,
           width,
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
    }, []);

    useEffect(() => {
        console.log("Inside use effect");
        
        loop.registerCollisionObjects(gameObject);
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