import { PropsWithChildren, useState } from "react";
import { GameComponent } from "../superClasses/GameComponent";
import { Transform } from "./Transform";
import { PropsGameObject } from "../types/props/PropsGameObject";

export function GameObject(props: PropsWithChildren<PropsGameObject>) {
    const [name, setName] = useState(props.name);
    const [active, setActive] = useState(props.active);
    const transform = Transform(props.transform);

    const [components, setComponents] = useState<GameComponent[]>([]);

    console.log(props.transform.position.x);

    return (
        <img
            src={props.image}
            alt={props.name}
            style={{
                position: "absolute",
                transform: `translate(${props.transform.position.x}px, ${props.transform.position.y}px)`,
                zIndex: `${props.transform.z}`,
            }}
        />
    );
}
