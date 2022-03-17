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
            console.log(this._instance.collisionObject[0].key);
            console.log(this._instance.collisionObject.length);
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
            let current: IMyGameObjType = this._instance.collisionObject[i]
            for (let j: number = i + 1; j < this._instance.collisionObject.length; j++) {
                if (current === this._instance.collisionObject[j]) {
                    continue;
                }

                if (collision(current, this._instance.collisionObject[j])) {
                    //current.obj.onTriggered(current.obj, this._instance.collisionObject[j].obj)
                    current.obj.onTriggered(current.obj, this._instance.collisionObject[j].obj);
                    console.log("Collision");
                    

                }
            }
        }
    }
}
