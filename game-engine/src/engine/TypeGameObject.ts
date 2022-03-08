import { IGameComponent } from "./IGameComponent";
// import transform

export type TypeGameObject = {
    name: string;
    active: boolean;
    //transform: Transform;

    components: IGameComponent[];

    addComponent(): void;
    getComponent(): IGameComponent;
};
