"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleUtil = void 0;
class CircleUtil {
    getDiameter(radius) {
        return 2 * radius;
    }
    getCircumference(radius) {
        return 2 * CircleUtil.PI * radius;
    }
    getArea(radius) {
        return CircleUtil.PI * radius * radius;
    }
}
exports.CircleUtil = CircleUtil;
CircleUtil.PI = Math.PI;
//# sourceMappingURL=circle_util.js.map