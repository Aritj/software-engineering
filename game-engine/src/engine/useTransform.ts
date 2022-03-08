import { useState } from "react";
import { Vector2D } from "./Vector2D";
import { Transform } from "./Transform";

type TransformProps = {
  position?: Vector2D;
  scale?: Vector2D;
};

export function useTransform(props?: TransformProps): Transform {
  const [position, setPosition] = useState(props?.position || Vector2D.zero);
  const [scale, setScale] = useState(props?.scale || Vector2D.one);

  const translate = (pos: Vector2D) => {
    setPosition((current) => Vector2D.add(current, pos));
  };

  return {
    position,
    scale,
    setPosition,
    setScale,
    translate,
  };
}
