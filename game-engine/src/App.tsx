import "./App.css";
import { PlayerController } from "./game/PlayerController";
import bird from "./game/images/bird.png";
import { GameObject } from "./engine/functionalComponents/GameObject";
import { Physics } from "./engine/Physics";
import { Vector2D } from "./engine/Vector2D";
import { Transform } from "./engine/functionalComponents/Transform";
import { render } from "@testing-library/react";

function App() {
    new PlayerController().start();
    const testVector = new Vector2D(150, 200);

    return (
        <div id="center-div">
            <GameObject
                name={"Bird"}
                image={bird}
                active={false}
                components={[]}
                transform={{
                    setPosition: function (value: Vector2D): void {
                        throw new Error("Function not implemented.");
                    },
                    setScale: function (value: Vector2D): void {
                        throw new Error("Function not implemented.");
                    },
                    translate: function (value: Vector2D): void {
                        throw new Error("Function not implemented.");
                    },
                }}
            />
        </div>
    );
}

export default App;
