(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = names;
  var speakWord = "Hello";

  helloSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
