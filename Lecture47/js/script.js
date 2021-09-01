// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 4;
// console.log("After changing the value of b.")
// console.log("a: " + a);
// console.log("b: " + b);


// var a = { x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;

// console.log("After changing the value of b.")
// console.log(a);
// console.log(b);

// function changePrimitive(primvalue){
//     console.log("in changePrimitive...");
//     console.log("before");
//     console.log(primvalue);

//     primvalue = 5;
//     console.log("after");
//     console.log(primvalue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orignal value: ");
// console.log(value);

function changeobject(object){
    console.log("in changeobject...");
    console.log("before");
    console.log(object);

    object.x = 5;
    console.log("after");
    console.log(object);
}

var value = {x: 7};
changeobject(value);
console.log("after changeobject, orignal value: ");
console.log(value);