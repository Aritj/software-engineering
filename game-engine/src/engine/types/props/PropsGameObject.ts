import { GameComponent } from "../../superClasses/GameComponent";
import { PropsTransform } from "./PropsTransform";

export type PropsGameObject = {
    name: string;
    image: string;
    active: boolean;
    components: GameComponent[];
    transform: PropsTransform;
};
