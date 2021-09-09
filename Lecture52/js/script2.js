(function (window) {
  var hiGreeter = {};
  hiGreeter.name = "Script2.js";
  var greeting = "Hi "
  hiGreeter.sayHi = function () {
    console.log(greeting + hiGreeter.name);
  };

  window.hiGreeter = hiGreeter;
})(window);
