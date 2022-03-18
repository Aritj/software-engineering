import { DebuggerComponent } from "./components/Components";

export interface DebuggerObserver {
    notify(active: boolean): void;
}

export class DebuggerSystem {
    public static instance: DebuggerSystem = new DebuggerSystem();
    private _debuggerComponents: DebuggerComponent[] = [];
    private static _debugActive: boolean = false;
    
    private constructor() {}

    public static add(debuggerComponent: DebuggerComponent) {
        this.instance._debuggerComponents.push(debuggerComponent);
    }

    public static getDebugStatus(): boolean {
        return this._debugActive;
    }

    public static switch() {
        console.warn(this._debugActive ? "Debugging off" : "Debugging on");
        this._debugActive = ! this._debugActive;

        this.instance._debuggerComponents.forEach(debuggerComponent => {
            debuggerComponent.active = this._debugActive;
        });
        
    }
}