import { CollisionComponent } from "../components/Components";
import { TypeGameObject } from "../types/objects/TypeGameObject"
import { v4 as uuidv4 } from "uuid";

interface IMyGameObjType {
    obj: TypeGameObject,
    key: string,
    _bool: boolean
}

export class ColSys {
    private static _instance: ColSys;
    private constructor() { }
    collisionObject: IMyGameObjType[] = [];

    public static initialize(): void {
        if (! this._instance) {
            this._instance = new ColSys();
        }
    }

    /**
     * Add object if has collision attached
     * @param gameObject
     */
    public static registerCollisionObjects(gameObject: TypeGameObject) {

        if (gameObject.getComponent(CollisionComponent) !== null) {
            this._instance.collisionObject.push({obj:gameObject, key:uuidv4(), _bool:false})
            console.log(this._instance.collisionObject.length);
        }
    };

    public static checkCollision(): void {

        for (let i: number = 0; i < this._instance.collisionObject.length; i++) {
            let current: IMyGameObjType = this._instance.collisionObject[i]
            for (let j: number = i + 1; j < this._instance.collisionObject.length; j++) {
                if (current === this._instance.collisionObject[j]) {
                    continue;
                }
                if ((current.obj.transform.position.x < (this._instance.collisionObject[j].obj.transform.position.x + this._instance.collisionObject[j].obj.transform.width)) &&
                    ((current.obj.transform.position.x + current.obj.transform.width) > this._instance.collisionObject[j].obj.transform.position.x) &&
                    (current.obj.transform.position.y < (this._instance.collisionObject[j].obj.transform.position.y + this._instance.collisionObject[j].obj.transform.height)) &&
                    ((current.obj.transform.height + current.obj.transform.position.y) > this._instance.collisionObject[j].obj.transform.position.y)) {
                    console.log("Collision");        
                }
            }
        }
    }
}
