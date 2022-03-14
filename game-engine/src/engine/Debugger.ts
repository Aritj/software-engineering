import { DebuggerComponent } from "./components/Components";

export class Debugger {
    public static instance: Debugger = new Debugger();
    private _debuggerComponents: DebuggerComponent[] = [];
    private static _debugActive: boolean = false;
    
    private constructor() {}

    public static add(debuggerComponent: DebuggerComponent) {
        this.instance._debuggerComponents.push(debuggerComponent);
    }

    public static switch() {
        console.warn(this._debugActive ? "Debugging on" : "Debugging off");

        this.instance._debuggerComponents.forEach(debuggerComponent => {
            debuggerComponent.enabled = this._debugActive;
        });
        
        this._debugActive = ! this._debugActive;
    }
}