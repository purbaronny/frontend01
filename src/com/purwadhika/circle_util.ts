export class CircleUtil {
    private static readonly PI = Math.PI;
    
    getDiameter(radius: number): number {
        return 2 * radius;
    }

    getCircumference(radius: number): number {
        return 2 * CircleUtil.PI * radius;
    }

    getArea(radius: number): number {
        return CircleUtil.PI * radius * radius;
    }
}