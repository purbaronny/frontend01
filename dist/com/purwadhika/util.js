"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    getRectangleArea(length, width) {
        return length * width;
    }
    getThirdAngle(angle1, angle2) {
        const totalSum = 180;
        return totalSum - (angle1 + angle2);
    }
    getDateDifference(date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2.getTime() - d1.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    getInitials(name) {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map