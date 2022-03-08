import { IGameComponent } from "./IGameComponent";
import data from "../game/physics_properties.json";

export class Physics implements IGameComponent {
    private gravity: number = Object.values(data)[0];

    start(): void {}

    update(): void {}

    render(): void {}
}
