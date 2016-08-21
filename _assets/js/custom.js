
var description = document.getElementsByClassName("site-description");
var container   = document.getElementsByClassName("site-description-container");

function hideDescription() {
  description[0].classList.add("hiding");
}

function toggleDescription() {
  description[0].classList.toggle("hiding");
  container[0].classList.toggle("invert");
}
