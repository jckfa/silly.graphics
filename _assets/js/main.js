
var mainListContent = document.getElementsByClassName("main-list-content"),
    mainListIcon    = document.getElementsByClassName("main-list-icon"),
    listTitle       = document.getElementsByClassName("list-title");

function closeMainLists() {
  for (i = 0; i < mainListContent.length; i++) {
    // close all index lists
    mainListContent[i].classList.add("over-800");
    // add open icon to all index lists
    mainListIcon[i].innerHTML = "+";
  }
}

// open/close index list
function toggleMainList(index) {
  // if selected list is closed
  if (mainListContent[index].classList.contains("over-800")) {
    // close all index lists
    closeMainLists();
    // only open selected list
    mainListContent[index].classList.remove("over-800");
    // only add close icon to selected list
    mainListIcon[index].innerHTML = "-";
  } else {
    // only close selected list
    mainListContent[index].classList.add("over-800");
    // only add open icon to selected list
    mainListIcon[index].innerHTML = "+";
  }
}
