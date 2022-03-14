import { GameComponent } from "../../superClasses/GameComponent";
import { TypeTransform } from "./TypeTransform";
import { GameComponentInstanceDefinition } from "../../superClasses/GameComponent";

export type TypeGameObject = {
    name: string;
    image: string;
    active: boolean;
    height: number;
    width: number;
    transform: TypeTransform;
    setActive(value: boolean): void;

    components: GameComponent[];

    getComponent<TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>): TComponent | null;
    addComponent<TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>, enabled: boolean): TComponent
};
