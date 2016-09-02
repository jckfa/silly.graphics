
var info       = document.getElementsByClassName("info");
var icon       = document.getElementsByClassName("info-icon");
var close      = document.getElementsByClassName("close-area");
var hidingInfo = "hiding-info";

function hideInfo() {
  // position absolute to overlay content
  info[0].classList.add("absolute");

  // hide info
  info[0].classList.add(hidingInfo);

  // add show icon
  icon[0].innerHTML = "+";
}

function toggleInfo() {
  // apply animation
  info[0].classList.add("trans");

  // toggle showing/hiding info
  info[0].classList.toggle(hidingInfo);

  // if hiding, use show icon(+); else, use hide icon(-)
  if (info[0].classList.contains(hidingInfo)) {
    icon[0].innerHTML = "+";
  } else {
    icon[0].innerHTML = "-";
  }

  // toggle close-area button
  close[0].classList.toggle("hiding");
}
