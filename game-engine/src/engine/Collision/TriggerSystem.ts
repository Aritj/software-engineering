import { CollisionComponent, PhysicsComponent } from "../components/Components";
import { TypeGameObject } from "../types/objects/TypeGameObject";
import { PointSystem } from "./PointSystem";

export class TriggerSystem  {
    private static _instance: TriggerSystem;

    public static initialize(): void {
        if (! this._instance) {
            this._instance = new TriggerSystem();
        }
    }

    public static onTriggered(gameObj1: TypeGameObject, gameObj2: TypeGameObject): void {

        if (gameObj1.name == "Bird") {
                    
            if (gameObj2.name == "lowerPipe" || gameObj2.name == "upperPipe") {
                const physics = gameObj1.getComponent(PhysicsComponent);
                physics?.setEnabled(false);
                
            }
            
            if (gameObj2.name == "Point") {
                PointSystem.increasePoint(1);
            }

        }
    }

}