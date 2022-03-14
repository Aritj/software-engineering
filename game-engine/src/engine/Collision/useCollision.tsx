import { useContext } from "react";
import { CollisionContext } from "./CollisionContext";

export function useCollision() {
    return useContext(CollisionContext);
}