import { GameComponent } from "../../superClasses/GameComponent";
import { TypeTransform } from "./TypeTransform";
// import transform

export type TypeGameObject = {
    name: string;
    image: string;
    active: boolean;
    transform: TypeTransform;

    components: GameComponent[];

    addComponent(): void;
    getComponent(): GameComponent;
};
