
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

  // add open icon
  dropdownIcon[1].innerHTML = "↑";

  // open contact list
  footerListContent[0].classList.remove("over-800");
}

function toggleFooterDropdown() {
  // apply animation
  footerDropdown[0].classList.add("trans");

  // toggle dropdown position
  footerDropdown[0].classList.toggle(movedDown);

  // if closed, use open icon; if open, use close icon
  if (footerDropdown[0].classList.contains(movedDown)) {
    dropdownIcon[1].innerHTML = "↑";
  } else {
    dropdownIcon[1].innerHTML = "↓";
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
