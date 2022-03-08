import { IGameComponent } from "../../interfaces/IGameComponent";
import { TypeTransform } from "./TypeTransform";
// import transform

export type TypeGameObject = {
    name: string;
    image: string;
    active: boolean;
    transform: TypeTransform;

    components: IGameComponent[];

    addComponent(): void;
    getComponent(): IGameComponent;
};
