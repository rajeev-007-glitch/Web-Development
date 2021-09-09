function makemultiplier(multipliers) {

    function b(){
        console.log("Multiplier is: " + multipliers);
    }    
    b();

    return (
        function (x) {
            return multipliers *x;
        }
    );
}

var tripleAll = makemultiplier(3);
console.log(tripleAll(50));