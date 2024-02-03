let announce = [
  "Got a bug? Write me in discord - ricdodev",
  "Got any ideas? Write me dm - my discord ricdodev!",
  "Something is wrong? Text me in my discord - ricdodev!",
  "You got an idea? Discord - ricdodev",
];

let footer = (document.getElementById("bottominfo").innerHTML =
  announce[Math.floor(Math.random() * announce.length)]);
