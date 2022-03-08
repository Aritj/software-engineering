import { useState } from "react";
import { Vector2D } from "../Vector2D";
import { TypeTransform } from "../types/objects/TypeTransform";
import { PropsTransform } from "../types/props/PropsTransfrom";

export function Transform(props?: PropsTransform): TypeTransform {
    const [position, setPosition] = useState(props?.position || Vector2D.zero);
    const [scale, setScale] = useState(props?.scale || Vector2D.one);

    const translate = (pos: Vector2D) => {
        setPosition((current) => Vector2D.add(current, pos));
    };

    return {
        //position,
        //scale,
        setPosition,
        setScale,
        translate,
    };
}
