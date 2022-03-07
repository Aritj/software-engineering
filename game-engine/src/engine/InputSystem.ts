import data from '../user_input.json';

/**
 * Credits to Jóhann for the InputTriggerMap type.
 */
export type InputTriggerMap = {
    [code: string]: (() => void)[];
}

export class InputSystem {

    private _JSONObject: Object;
    private _triggers: InputTriggerMap = {};
    public static instance: InputSystem = new InputSystem(data);

    private constructor(JSONObject: Object) {
        document.addEventListener("keydown", this.onButtonDown.bind(this));
        this._JSONObject = JSONObject;
    };

    public static add(key: string, onTriggered: () => void): void {
        this.instance.addTrigger(key, onTriggered);
    }

    public getMoves(): string[] {
        return Object.values(this._JSONObject); 
    };

    public isValidMove(key: string): boolean {
        return this.getMoves().includes(key);
    };

    private addTrigger(key: string, onTriggered: () => void): void {
        if (! this.isValidMove(key)) { // for debugging purposes
            return console.warn(`${key} is not defined in 'user_input.json'`);
        };

        if (! this._triggers[key]) {
            this._triggers = {... this._triggers, [key]: [onTriggered]};
        };
    }

    private onButtonDown(event: KeyboardEvent): void {
        if (this._triggers[event.key]) {
            return this._triggers[event.key].forEach(trigger => trigger());
        }

        if (this.isValidMove(event.key)) { // debugging purposes
            return console.warn(`Valid move ${event.key} has no trigger!`);
        }
    }

}
