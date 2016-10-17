
var main_shell = document.getElementsByClassName("main-shell"),
    list_icon  = document.getElementsByClassName("list-icon"),
    height0    = "height0";


function closeMainLists() {
  for (i = 0; i < main_shell.length; i++) {
    // close all index lists
    main_shell[i].classList.add(height0);
    // add open icon to all index lists
    list_icon[i].innerHTML = "+";
  }
}

// open/close index list
function toggleMainList(index, size) {

  // if selected list is closed
  if (main_shell[index].classList.contains(height0)) {
    // close all index lists
    closeMainLists();
    // only open selected list
    main_shell[index].classList.remove(height0);
    // only add close icon to selected list
    list_icon[index].innerHTML = "-";

    main_shell[index].style.height =
    "calc(" + size + " * (1em + (var(--target-area) * 2) + 1px))";
  } else {
    // only close selected list
    main_shell[index].classList.add(height0);
    // only add open icon to selected list
    list_icon[index].innerHTML = "+";
  }
}
