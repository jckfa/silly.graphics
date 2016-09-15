
var yo           = document.getElementsByClassName("yo"),
    mainListCont = document.getElementsByClassName("main-list-content"),
    mainListIcon = document.getElementsByClassName("main-list-icon"),
    over800class = "height0";


function closeMainLists() {
  for (i = 0; i < yo.length; i++) {
    // close all index lists
    yo[i].classList.add(over800class);
    // add open icon to all index lists
    mainListIcon[i].innerHTML = "+";
    // unindent lists and set opacity to 0
    mainListCont[i].classList.add("unindented");
  }
}

// open/close index list
function toggleMainList(index, size) {
  // bleh = window.getComputedStyle(yo[0], null).getPropertyValue("font-size");
  // label[0].innerHTML = bleh;

  // if selected list is closed
  if (yo[index].classList.contains(over800class)) {
    // close all index lists
    closeMainLists();
    // only open selected list
    yo[index].classList.remove(over800class);
    // only add close icon to selected list
    mainListIcon[index].innerHTML = "-";
    // indent selected list and set opacity to 1
    mainListCont[index].classList.remove("unindented");

    // top, bottom padding: 1.5rem + 1.5rem = 3rem
    // text: 1em
    // top border for each item and container: 0.1rem
    // yo[index].style.height = "calc(" + size + " * (3.1rem + 1em))";
    // yo[index].style.height = "calc(" + size + " * (" + bleh + " + 0.1rem))";
    // yo[index].style.height = "calc(" + size + " * (2.8rem + (var(--target-area) * 2) + 0.1rem))";
    // 1em = 22px. Why? Dunno. But I need 28px (2.8rem) and 22 + 6 gets me that
    yo[index].style.height = "calc(" + size + " * (1em + 6px + (var(--target-area) * 2) + 0.1rem))";
  } else {
    // only close selected list
    yo[index].classList.add(over800class);
    // only add open icon to selected list
    mainListIcon[index].innerHTML = "+";
    // unindent selected list and set opacity to 0
    mainListCont[index].classList.add("unindented");
  }
}
