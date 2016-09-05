
var info       = document.getElementsByClassName("info");
var icon       = document.getElementsByClassName("info-icon");
var close      = document.getElementsByClassName("close-area");
var collapsed  = "collapsed";

function hideInfo() {
  // position absolute to overlay content
  // info[0].classList.add("absolute-top");

  // hide info
  info[0].classList.add(collapsed);

  // add show icon
  icon[0].innerHTML = "↓";
}

function toggleInfo() {
  // apply animation
  info[0].classList.add("trans");

  // toggle showing/hiding info
  info[0].classList.toggle(collapsed);

  // if hiding, use show icon; if not hiding, use hide icon
  if (info[0].classList.contains(collapsed)) {
    icon[0].innerHTML = "↓";
  } else {
    icon[0].innerHTML = "↑";
  }

  // toggle close-area button
  close[0].classList.toggle("hiding");
}
