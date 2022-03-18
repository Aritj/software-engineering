import { CollisionComponent } from "../components/Components";
import { TypeGameObject } from "../types/objects/TypeGameObject"
import { v4 as uuidv4 } from "uuid";
import { TriggerSystem } from "./TriggerSystem";

interface IMyGameObjType {
    obj: TypeGameObject,
    key: string,
    _bool: boolean
}
export class CollisionSystem {
    private static _instance: CollisionSystem;
    private constructor() { }
    collisionObject: IMyGameObjType[] = [];

    public static initialize(): void {
        if (! this._instance) {
            this._instance = new CollisionSystem();
        }
    }

    /**
     * Add object if has collision attached
     * @param gameObject
     */
    public static registerCollisionObjects(gameObject: TypeGameObject) {
        if (gameObject.getComponent(CollisionComponent) !== null) {
            this._instance.collisionObject.push({obj:gameObject, key:uuidv4(), _bool:false})
        }
    };

    public static checkCollision(): void {

        function collision(current: IMyGameObjType, next: IMyGameObjType): boolean {
            return (current.obj.transform.position.x < (next.obj.transform.position.x + next.obj.transform.width)) &&
            ((current.obj.transform.position.x + current.obj.transform.width) > next.obj.transform.position.x) &&
            (current.obj.transform.position.y < (next.obj.transform.position.y + next.obj.transform.height)) &&
            ((current.obj.transform.height + current.obj.transform.position.y) > next.obj.transform.position.y);
        }

        for (let i: number = 0; i < this._instance.collisionObject.length; i++) {
            let current: IMyGameObjType = this._instance.collisionObject[i];

            for (let j: number = i + 1; j < this._instance.collisionObject.length; j++) {
                if (current === this._instance.collisionObject[j]) {
                    continue;
                }

                if (collision(current, this._instance.collisionObject[j])) {
                    this._instance.collisionObject[j].obj.components.forEach(comp => {
                        if (comp instanceof CollisionComponent) {
                            comp.trigger();
                        }
                    })
                    //TriggerSystem.onTriggered(current.obj, this._instance.collisionObject[j].obj); // LEGACY (OLD)
                }
            }
        }
    }
}
