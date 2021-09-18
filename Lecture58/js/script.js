// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
  // Unobtrusive event binding
  document.querySelector("button").addEventListener("click", function () {
    // Call server to get the name
    $ajaxUtils.sendGetRequest("data/name.json", function (res) {
      var message = res.firstName + " " + res.lastName;
      if (res.likesChineseFood) {
        message += " likes Chinese food";
      } else {
        message += " dosen't like Chinese food";
      }
      message += " and uses ";
      message += res.numberOfDisplay;
      message += " display for coding.";

      document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
    });
  });
});
