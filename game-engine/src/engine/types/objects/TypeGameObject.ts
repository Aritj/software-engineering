import { GameComponent } from "../../superClasses/GameComponent";
import { TypeTransform } from "./TypeTransform";
import { GameComponentInstanceDefinition } from "../../superClasses/GameComponent";

export type TypeGameObject = {
    name: string;
    image: string;
    active: boolean;
    transform: TypeTransform;
    setActive(value: boolean): void;

    components: GameComponent[];

    getComponent<TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>): TComponent | null;
    addComponent<TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>, enabled: boolean): TComponent
    onTriggered(current: TypeGameObject, next: TypeGameObject): void
};
