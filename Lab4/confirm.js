let name = localStorage.getItem("name");
let events = JSON.parse(localStorage.getItem("events"));

let summary = document.getElementById("summary");

summary.innerHTML = "Name: " + name + "<br><br>";
summary.innerHTML += "Events:<br>";

for (let i = 0; i < events.length; i++) {
  summary.innerHTML += events[i] + "<br>";
}

summary.innerHTML += "<br>Total Fee: " + events.length * 150 + " Taka";

function goBack() {
  window.location.href = "index.html";
}
