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

    public setEnabled(value: boolean) {
        this._enabled = value;
    }

    public Start() {
        this.transform.translate(new Vector2D(0, 0))
    }

    public Update(dt: number) {
        this.transform.translate(new Vector2D(0, 0))
    }

    public Render(position: Vector2D) {
        return <img
        src={this.gameObject.image}
        alt={""}
        style={{
            position: "absolute",
            width: `${this.gameObject.transform.width}px`,
            height: `${this.gameObject.transform.height}px`,
            transition: "0.1s",
            transform: `translate(${this.gameObject.transform.position.x}px, ${this.gameObject.transform.position.y}px) rotate(${this.gameObject.transform.rotation}deg)`,
            zIndex: `${this.gameObject.transform.z}`,
        }}
    />
    }

}