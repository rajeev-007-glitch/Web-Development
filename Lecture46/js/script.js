function multiply(x, y){
    return x * y;
}
multiply.version = "v.1.0.1.0";
console.log(multiply(3, 7));
console.log(multiply.version);

function makeMultiplier(multiplier){
    var myfunc = function(x){
        return multiplier*x;
    };
    return myfunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(1133));
var quadAll = makeMultiplier(4);
console.log(quadAll(4444));

function performOperation(x, operation){
    return operation(x);
}

var result = performOperation(6, quadAll);
console.log(result);