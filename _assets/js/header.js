
var headerDropdown = document.getElementsByClassName("header-dropdown"),
    icon           = document.getElementsByClassName("dropdown-icon"),
    label          = document.getElementsByClassName("dropdown-label"),
    close          = document.getElementsByClassName("close-area"),
    movedUp        = "moved-up";

function initHeaderDropdown() {
  // position fixed to overlay content
  headerDropdown[0].classList.add("fix-top");

  // move up
  headerDropdown[0].classList.add(movedUp);

  // add bottom border
  headerDropdown[0].classList.add("border-bottom");

  // show all dropdown labels
  for (i = 0; i < label.length; i++) {
    label[i].classList.remove("hiding");
  }

  // add show icon
  icon[0].innerHTML = "↓";
}

function toggleHeaderDropdown() {
  // apply animation
  headerDropdown[0].classList.add("trans");

  // toggle showing/hiding info
  headerDropdown[0].classList.toggle(movedUp);

  // if hiding, use show icon; if not hiding, use hide icon
  if (headerDropdown[0].classList.contains(movedUp)) {
    icon[0].innerHTML = "↓";
  } else {
    icon[0].innerHTML = "↑";
  }

  // toggle close-area button
  close[0].classList.toggle("hiding");
}
