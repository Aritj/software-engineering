import { TypeTransform } from "../types/objects/TypeTransform";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { Vector2D } from "../Vector2D";

export type GameComponentInstanceDefinition<TComponent extends GameComponent> =
    {
        new (
            enabled: boolean,
            gameObject: TypeGameObject,
            transform: TypeTransform
        ): TComponent;
    };

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

    public Start() {
        this.transform.translate(new Vector2D(0, 0))
    }

    public Update(dt: number) {}

    public Render(position: Vector2D) {
        return <img
        src={this.gameObject.image}
        alt={this.gameObject.name}
        style={{
            position: "absolute",
            transform: `translate(${this.gameObject.transform.position.x}px, ${this.gameObject.transform.position.y}px) scaleX(${this.gameObject.transform.scaleX}) scaleY(${this.gameObject.transform.scaleY})`,
            zIndex: `${this.gameObject.transform.z}`,
        }}
    />
    }

}