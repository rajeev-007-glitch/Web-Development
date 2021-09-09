// var array = new Array();
// array[0] = "Room";
// array[1] = 876;
// array[2] = function (name){
//     console.log("Hello " + name);
// };
// array[3] = { flat: "Rent, Food, OtherStuffs"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].flat);


// Short hand array creation
// var names = ["Rajeev", "Singh", "Jadon"];
// console.log(names);

// for(var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

// names[100] = "Oh hello yeah!!!";
// for(var i = 0; i < names.length; i++){

//     if(names[i]==undefined){
//         names[i] = "Empty";
//     }

//     console.log("Hello " + names[i]);
// }

var flat2 = ["Raj Kamal Tower", "Indore", "Madhya Pradesh", "INDIA"];

var meraObj = {
    name: "Raj Kamal Tower",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "INDIA"
};

// for (var prop in meraObj){
//     console.log(prop + ": " + meraObj[prop]);
// }

// for (var flat in flat2) {
//     console.log("Hello " + flat2[flat]);
// }

flat2.rooms = "3";
for (var flat in flat2) {
    console.log("Hello " + flat2[flat]);
}