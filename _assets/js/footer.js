
var footerDropdown    = document.getElementsByClassName("footer-dropdown"),
    footerClose       = document.getElementsByClassName("footer-close-area"),
    footerListContent = document.getElementsByClassName("footer-list-content"),
    movedDown         = "moved-down";

function initFooterDropdown() {
  // position fixed to overlay content
  footerDropdown[0].classList.add("fix-bottom-under-800");

  // move down
  footerDropdown[0].classList.add(movedDown);

  // add top border
  footerDropdown[0].classList.add("border-top");

  // add show icon
  icon[1].innerHTML = "↑";

  // open contact list
  footerListContent[0].classList.remove("over-800");
}

function toggleFooterDropdown() {
  // apply animation
  footerDropdown[0].classList.add("trans");

  // toggle showing/hiding info
  footerDropdown[0].classList.toggle(movedDown);

  // if hiding, use show icon; if not hiding, use hide icon
  if (footerDropdown[0].classList.contains(movedDown)) {
    icon[1].innerHTML = "↑";
  } else {
    icon[1].innerHTML = "↓";
  }

  // toggle close-area button
  footerClose[0].classList.toggle("hiding");

  // place dropdown above close-area
  footerDropdown[0].classList.toggle("z3");
}

// show/hide footer list
function toggleFooterList(index) {
  // if selected item is hiding
  if (footerListContent[index].classList.contains("over-800")) {
    // hide all items
    closeLists();
    // and only show selected item
    footerListContent[index].classList.remove("over-800");
  } else {
    // hide selected item
    footerListContent[index].classList.add("over-800");
  }
}
