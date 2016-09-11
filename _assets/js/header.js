
var headerDropdown = document.getElementsByClassName("header-dropdown"),
    dropdownIcon   = document.getElementsByClassName("dropdown-icon"),
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

  // add open icon
  dropdownIcon[0].innerHTML = "↓";
}

function toggleHeaderDropdown() {
  // apply animation
  headerDropdown[0].classList.add("trans");

  // toggle dropdown position
  headerDropdown[0].classList.toggle(movedUp);

  // if closed, use open icon; if open, use close icon
  if (headerDropdown[0].classList.contains(movedUp)) {
    dropdownIcon[0].innerHTML = "↓";
  } else {
    dropdownIcon[0].innerHTML = "↑";
  }

  // toggle close-area button
  close[0].classList.toggle("hiding");
}
