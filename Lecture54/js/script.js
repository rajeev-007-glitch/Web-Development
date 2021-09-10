// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded", function (event) {
  function sayHello(event) {
    this.textContent = "Said it!";
    console.log(this);
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";

    // document.getElementById("content").textcontent = message;

    document.getElementById("content").innerHTML = message;

    if (name === "Rajeev") {
      var title = document.querySelector("#title").textContent;
      title += " OkyokSama Moshi Moshi!";
      document.querySelector("h1").textContent = title;
    }
  }

  // Unobstructive event Binding
  // document.querySelector("button").addEventListener("click", sayHello);

  document.querySelector("button").onclick = sayHello;
});
