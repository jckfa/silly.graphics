
var ListContent = document.getElementsByClassName("list-content"),
    listIcon    = document.getElementsByClassName("list-icon"),
    listTitle   = document.getElementsByClassName("list-title");

function initMainDropdown() {
  // add open icon
  for (i = 0; i < listIcon.length; i++) {
    listIcon[i].innerHTML = "+";
  }
}

// hide all list items
function closeLists() {
  for (i = 0; i < ListContent.length; i++) {
    ListContent[i].classList.add("over-800");
  }
}

// show/hide list items
function toggleMainList(index) {
  // if selected item is hiding
  if (ListContent[index].classList.contains("over-800")) {
    // hide all items
    closeLists();
    // and only show selected item
    ListContent[index].classList.remove("over-800");

    // add close icon
    listIcon[index].innerHTML = "-";
  } else {
    // hide selected item
    ListContent[index].classList.add("over-800");

    // add open icon
    listIcon[index].innerHTML = "+";
  }
}
