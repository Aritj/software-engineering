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
    private _data: Object;
    private _triggers: InputTriggerMap = {};
    private static _instance: InputSystem;

    private constructor(data: Object) {
        this._data = data;
        document.addEventListener("keydown", this.onButtonDown.bind(this)); // add event listener
    }

    public static initialize(data: Object): void {
        if (! this._instance) {
            this._instance = new InputSystem(data);
        }
    }

    public static add(key: string, onTriggered: () => void): void {
        this._instance.addTrigger(key, onTriggered);
    }
  
    private isValidMove(key: string): boolean {
        return Object.values(this._data).includes(key);
    }

    private addTrigger(key: string, onTriggered: () => void): void {
        if (! this.isValidMove(key)) { // for game developer debugging purposes
            return console.warn(`${key} is not defined in 'user_input.json'`);
        }

        if (! this._triggers[key]) {
            this._triggers = {...this._triggers, [key]: []};
        }

        this._triggers[key].push(onTriggered);
    }

    private onButtonDown(event: KeyboardEvent): void {
        if (this._triggers[event.key]) {
            return this._triggers[event.key].forEach((trigger) => trigger());
        }

        if (this.isValidMove(event.key)) { // for game developer debugging purposes
            return console.warn(`Valid move ${event.key} has no trigger!`);
        }
    }
}