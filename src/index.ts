import { Chicken } from "./chicken"
import { CircleUtil } from "./com/purwadhika/circle_util";
import { Util } from "./com/purwadhika/util";

console.log("hello")

const chicken = new Chicken();
chicken.cluck();

const util = new Util();
const length = 5;
const width = 3;
const area = util.getRectangleArea(length, width);
console.log(`Area of the rectangle: ${area}`);

const circle = new CircleUtil();
const radius = 5;

console.log(`Diameter: ${circle.getDiameter(radius)}`);
console.log(`Circumference: ${circle.getCircumference(radius).toFixed(4)}`);
console.log(`Area: ${circle.getArea(radius).toFixed(4)}`);

const a = 80;
const b = 65;

console.log(`Third angle: ${util.getThirdAngle(a, b)}`);

const date1 = "2024-03-19";
const date2 = "2024-03-21";

console.log(`Difference in days: ${util.getDateDifference(date1, date2)}`);

const name = "John Doe";
console.log(`Initials: ${util.getInitials(name)}`);