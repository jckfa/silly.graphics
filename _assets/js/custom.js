
var description = document.getElementsByClassName("site-description");
var container   = document.getElementsByClassName("site-description-container");
var html        = document.getElementsByTagName("html")[0];

function hideDescription() {
  description[0].classList.add("hiding");
}

function toggleDescription() {
  description[0].classList.toggle("hiding");
  container[0].classList.toggle("bring-to-front");
}


function changeColorScheme() {
  var d = new Date().getDay();

  // Monday
  if (d == 1) {
    html.classList.add("red");

  // Tuesday
  } else if (d == 2) {
    html.classList.add("orange");

  // Wednesday
  } else if (d == 3) {
    html.classList.add("banana");

  // Thursday
  } else if (d == 4) {
    html.classList.add("olive");

  // Friday
  } else if (d == 5) {
    html.classList.add("blue");

  // Saturday
  } else if (d == 6) {
    html.classList.add("magenta");

  // Sunday
  } else if (d == 7) {
    html.classList.add("black");
  }
}
