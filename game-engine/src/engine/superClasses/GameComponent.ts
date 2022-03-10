import { TypeTransform } from "../types/objects/TypeTransform";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { Vector2D } from "../Vector2D";

export class GameComponent {
    public constructor(
        private _enabled: boolean,
        public gameObject: Readonly<TypeGameObject>,
        public transform: TypeTransform
    ) {}

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        this._enabled = value;
    }

    public Start() {}

    public Update(dt: number) {}

    public Render(position: Vector2D): any {
        return null;
    }
}
