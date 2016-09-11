
var mainListContent = document.getElementsByClassName("main-list-content"),
    mainListIcon    = document.getElementsByClassName("main-list-icon");
    over800class    = "over-800"

function closeMainLists() {
  for (i = 0; i < mainListContent.length; i++) {
    // close all index lists
    mainListContent[i].classList.add(over800class);
    // add open icon to all index lists
    mainListIcon[i].innerHTML = "+";
  }
}

// open/close index list
function toggleMainList(index) {
  // if selected list is closed
  if (mainListContent[index].classList.contains(over800class)) {
    // close all index lists
    closeMainLists();
    // only open selected list
    mainListContent[index].classList.remove(over800class);
    // only add close icon to selected list
    mainListIcon[index].innerHTML = "-";
  } else {
    // only close selected list
    mainListContent[index].classList.add(over800class);
    // only add open icon to selected list
    mainListIcon[index].innerHTML = "+";
  }
}
