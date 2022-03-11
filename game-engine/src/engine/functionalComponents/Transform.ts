import { useState } from "react";
import { Vector2D } from "../Vector2D";
import { TypeTransform } from "../types/objects/TypeTransform";
import { PropsTransform } from "../types/props/PropsTransform";

export function Transform(props: PropsTransform): TypeTransform {
    const [position, setPosition] = useState(props.position);
    const [scaleX, setScaleX] = useState(props.scaleX);
    const [scaleY, setScaleY] = useState(props.scaleY);
    const [z, setZ] = useState(props.z);


    const translate = (pos: Vector2D) => {
        setPosition((current) => Vector2D.add(current, pos));
    };

    return {
        position,
        scaleX,
        scaleY,
        z,
        setPosition,
        setScaleX,
        setScaleY,
        setZ,
        translate,
    };
}
