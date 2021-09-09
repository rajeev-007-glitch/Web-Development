// function print() {
//     console.log("Hello there!!!")
//     this.myAge = "16";
// }
// print();
// console.log(window.myAge);
// console.log(this);

// FUNCTION CONSTRUCTORS

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getarea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};
Circle.prototype.getParameter = function () {
  return Math.PI * this.radius * 2;
};
var myCircle = new Circle(10);
var mySecondCircle = new Circle(40);
console.log(myCircle.getarea());
console.log(myCircle.getParameter());
console.log(mySecondCircle.getarea());
console.log(mySecondCircle.getParameter());
