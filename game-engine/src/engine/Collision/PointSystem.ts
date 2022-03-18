export class PointSystem  {
    private static _instance: PointSystem;
    private static points: number = 0;

    public static initialize(): void {
        if (! this._instance) {
            this._instance = new PointSystem();
        }
    }

    public static getPoint(): number {
        return this.points;
    }

    public static increasePoint(point: number): void {
        this.points += point;
        console.log(this.points);
    }

}