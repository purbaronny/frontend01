export class Util {
    getRectangleArea(length: number, width: number): number {
        return length * width;
    }

    getThirdAngle(angle1: number, angle2: number): number {
        const totalSum = 180;
        return totalSum - (angle1 + angle2);
    }

    getDateDifference(date1: string, date2: string): number {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2.getTime() - d1.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    getInitials(name: string): string {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    }
}