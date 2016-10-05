
var mainListContContainer = document.getElementsByClassName("main-list-content-container"),
    mainListCont = document.getElementsByClassName("main-list-content"),
    mainListIcon = document.getElementsByClassName("main-list-icon"),
    over800class = "height0";


function closeMainLists() {
  for (i = 0; i < mainListContContainer.length; i++) {
    // close all index lists
    mainListContContainer[i].classList.add(over800class);
    // add open icon to all index lists
    mainListIcon[i].innerHTML = "+";
  }
}

// open/close index list
function toggleMainList(index, size) {
  // bleh = window.getComputedStyle(mainListContContainer[0], null).getPropertyValue("font-size");
  // label[0].innerHTML = bleh;

  // if selected list is closed
  if (mainListContContainer[index].classList.contains(over800class)) {
    // close all index lists
    closeMainLists();
    // only open selected list
    mainListContContainer[index].classList.remove(over800class);
    // only add close icon to selected list
    mainListIcon[index].innerHTML = "-";

    mainListContContainer[index].style.height = "calc(" + size + " * (1em + 6px + (var(--target-area) * 2) + 0.1rem))";
  } else {
    // only close selected list
    mainListContContainer[index].classList.add(over800class);
    // only add open icon to selected list
    mainListIcon[index].innerHTML = "+";
  }
}
