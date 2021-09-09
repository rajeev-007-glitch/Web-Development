(function (window) {
  var helloGreeter = {};
  helloGreeter.name = "Script1.js";
  var greeting = "Hello ";
  helloGreeter.sayHello = function () {
    console.log(greeting + helloGreeter.name);
  };

  window.helloGreeter = helloGreeter;
})(window);
