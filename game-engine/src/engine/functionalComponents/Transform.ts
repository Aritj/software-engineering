import { useState } from "react";
import { Vector2D } from "../Vector2D";
import { TypeTransform } from "../types/objects/TypeTransform";
import { PropsTransform } from "../types/props/PropsTransform";

export function Transform(props?: PropsTransform): TypeTransform {
    const [position, setPosition] = useState(props?.position || Vector2D.zero);
    const [rotation, setRotation] = useState(props?.rotation || 0);
    const [width, setWidth] = useState(props?.width || 0);
    const [height, setHeight] = useState(props?.height || 0);
    const [scaleX, setScaleX] = useState(props?.scaleX || 1);
    const [scaleY, setScaleY] = useState(props?.scaleY || 1);
    const [z, setZ] = useState(props?.z || 0);


    const translate = (pos: Vector2D) => {
        setPosition((current) => Vector2D.add(current, pos));
    };

    const rotate = (angle: number) => {
        setRotation((current) => current + angle);
    }

    return {
        position,
        rotation,
        width,
        height,
        scaleX,
        scaleY,
        z,
        setPosition,
        setRotation,
        setWidth,
        setHeight,
        setScaleX,
        setScaleY,
        setZ,
        translate,
        rotate
    };
}
