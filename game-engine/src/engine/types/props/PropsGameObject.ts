import { IGameComponent } from "../../interfaces/IGameComponent";
import { TypeTransform } from "../objects/TypeTransform";

export type PropsGameObject = {
    name: string;
    image: string;
    active: boolean;
    components: IGameComponent[];
    transform: TypeTransform;
};
