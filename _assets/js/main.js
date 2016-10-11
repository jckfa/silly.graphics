
var main_container = document.getElementsByClassName("main-container"),
    mainListCont   = document.getElementsByClassName("main-list-content"),
    mainListIcon   = document.getElementsByClassName("main-list-icon"),
    over800class   = "height0";


function closeMainLists() {
  for (i = 0; i < main_container.length; i++) {
    // close all index lists
    main_container[i].classList.add(over800class);
    // add open icon to all index lists
    mainListIcon[i].innerHTML = "+";
  }
}

// open/close index list
function toggleMainList(index, size) {

  // if selected list is closed
  if (main_container[index].classList.contains(over800class)) {
    // close all index lists
    closeMainLists();
    // only open selected list
    main_container[index].classList.remove(over800class);
    // only add close icon to selected list
    mainListIcon[index].innerHTML = "-";

    main_container[index].style.height =
    "calc(" + size + " * (1em + 6px + (var(--target-area) * 2) + 0.1rem))";
  } else {
    // only close selected list
    main_container[index].classList.add(over800class);
    // only add open icon to selected list
    mainListIcon[index].innerHTML = "+";
  }
}
