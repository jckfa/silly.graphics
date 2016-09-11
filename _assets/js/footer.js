
var footerListContent = document.getElementsByClassName("footer-list-content"),
    footerListIcon    = document.getElementsByClassName("footer-list-icon"),
    footerDropdown    = document.getElementsByClassName("footer-dropdown"),
    footerClose       = document.getElementsByClassName("footer-close-area"),
    movedDown         = "moved-down";
    // over800class is defined in main.js

function closeFooterLists() {
  for (i = 0; i < footerListContent.length; i++) {
    // close all footer lists
    footerListContent[i].classList.add(over800class);
    // add open icon to all footer lists
    footerListIcon[i].innerHTML = "+";
  }
}

// open contact list
function openContactList() {
  footerListContent[0].classList.remove(over800class);
  footerListIcon[0].innerHTML = "-";
}

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
  openContactList();
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

// open/close footer list
function toggleFooterList(index) {
  // if selected list is closed
  if (footerListContent[index].classList.contains(over800class)) {
    // close all footer lists
    closeFooterLists();
    // only open selected list
    footerListContent[index].classList.remove(over800class);
    // only add close icon to selected list
    footerListIcon[index].innerHTML = "-";
  } else {
    // only close selected list
    footerListContent[index].classList.add(over800class);
    // only add open icon to selected list
    footerListIcon[index].innerHTML = "+";
  }
}
