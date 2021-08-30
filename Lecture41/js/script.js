var m = "in global";
console.log("global: message = " + m);
var a = function () {
    var m = "inside a";
    console.log("a: message = " + m);


    var b = function () {
        var m = "inside b";
        console.log("b: message = " + m);
    }
    b();
}
a();