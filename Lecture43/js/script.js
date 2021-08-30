var string = "Hello";
string += " world";
console.log(string + '!');

console.log((5 + 4) / 3);
console.log(undefined/ 3);
function test1 (a){
    console.log( a/ 3);
}
test1();

var x = '4', y = 4;
if(x==y){
    console.log("x='4' is equal to y=4.");
}

if(x===y){
    console.log("x='4' is equal to y=4.");
}
else{
    console.log("Strict: x='4' is not equal to y=4.");
}


if( false || null || undefined || "" || 0 || NaN){
    console.log("This line won't execute");
}
else{
    console.log("All false");
}

if(true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}



function a () {
    return{
        name: "Rajeev"
    };
}
function b ()
{
    return
    {
        name: "Rajeev"
    };
}
console.log(a());
console.log(b());

var sum = 0;
for(var i = 0; i<10; i++){
    console.log(i);
    sum += i
}
console.log("Sum of 9 through 9 is " + sum);