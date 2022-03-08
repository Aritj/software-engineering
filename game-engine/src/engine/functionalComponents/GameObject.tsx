import { PropsWithChildren, useState } from "react";
import { IGameComponent } from "../interfaces/IGameComponent";
import { Transform } from "./Transform";
import { PropsGameObject } from "../types/props/PropsGameObject";

export function GameObject(props: PropsWithChildren<PropsGameObject>) {
    const [name, setName] = useState(props.name);
    const [active, setActive] = useState(props.active);
    //const transform = Transform(props.transform);

    const [components, setComponents] = useState<IGameComponent[]>([]);

    const transform = props.transform;

    return <img src={props.image} alt={props.name} />;
}
