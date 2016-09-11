
var ListContent = document.getElementsByClassName("list-content"),
    listTitle   = document.getElementsByClassName("list-title");

// hide all list items
function closeLists() {
  for (i = 0; i < ListContent.length; i++) {
    ListContent[i].classList.add("over-800");
  }
}

// show/hide list items
function toggleList(index) {
  // if selected item is hiding
  if (ListContent[index].classList.contains("over-800")) {
    // hide all items
    closeLists();
    // and only show selected item
    ListContent[index].classList.remove("over-800");
  } else {
    // hide selected item
    ListContent[index].classList.add("over-800");
  }
}
