import { IGameComponent } from "./interfaces/IGameComponent";
import data from "../game/physics_properties.json";

export class Physics implements IGameComponent {
    private gravity: number = Object.values(data)[0];

    start(): void {
        console.log("Test");
    }

    update(): void {
        console.log("Test");
    }

    render(): void {
        console.log("Test");
    }
}
