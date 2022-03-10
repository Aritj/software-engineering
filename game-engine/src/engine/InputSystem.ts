import data from "../game/user_input.json";

/**
 * Credits to Jóhann for the InputTriggerMap type.
 */
export type InputTriggerMap = {
    [code: string]: (() => void)[];
};

/**
 * InputSystem which maps inputs (string) to a function, to be executed upon event trigger.
 */
export class InputSystem {
    private _JSONObject: Object = data;
    private _triggers: InputTriggerMap = {};
    public static instance: InputSystem = new InputSystem();

    public constructor() {
        document.addEventListener("keydown", this.onButtonDown.bind(this)); // add event listener
    }

    public static add(key: string, onTriggered: () => void): void {
        this.instance.addTrigger(key, onTriggered);
    }

    private isValidMove(key: string): boolean {
        return Object.values(this._JSONObject).includes(key);
    }

    private addTrigger(key: string, onTriggered: () => void): void {
        if (!this.isValidMove(key)) {
            // for game developer debugging purposes
            return console.warn(`${key} is not defined in 'user_input.json'`);
        }

        if (!this._triggers[key]) {
            this._triggers = { ...this._triggers, [key]: [onTriggered] };
        }
    }

    private onButtonDown(event: KeyboardEvent): void {
        if (this._triggers[event.key]) {
            return this._triggers[event.key].forEach((trigger) => trigger());
        }

        if (this.isValidMove(event.key)) {
            // for game developer debugging purposes
            return console.warn(`Valid move ${event.key} has no trigger!`);
        }
    }
}
