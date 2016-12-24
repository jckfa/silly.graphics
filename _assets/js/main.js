
var main        = document.getElementsByTagName("main")[0],
    list        = document.getElementsByClassName("list"),
    list_nav    = document.getElementsByClassName("list__nav")[0],
    nav_item    = document.getElementsByClassName("nav-item"),
    top_frag    = document.getElementsByClassName("top-frag")[0],
    closed_list = "closed_list",
    selected    = "selected";

// close all lists, remove selected class
function close_lists() {
  for (i = 0; i < list.length; i++) {
    list[i].classList.add(closed_list);
    list[i].classList.remove(selected);
  }
}

// toggle selected list
function toggle_list(index) {
  // if list is closed
  if (list[index].classList.contains(closed_list)) {
    close_lists();
    // open list, add selected class
    list[index].classList.remove(closed_list);
    list[index].classList.add(selected);
  } else {
    // close list, remove selected class
    list[index].classList.add(closed_list);
    list[index].classList.remove(selected);
  }
}


window.addEventListener("resize", smart_nav);
window.addEventListener("scroll", smart_nav);

function smart_nav() {
  var scroll_pos = document.body.scrollTop,
      nav_pos    = main.offsetTop;

  // fix list-nav if scrolled to/past it
  if (scroll_pos >= nav_pos) {
    // fix nav, show top frag
    list_nav.classList.add("fixed-nav");
    top_frag.classList.add("showing-frag");
  } else {
    // unfix nav, hide top frag
    list_nav.classList.remove("fixed-nav");
    top_frag.classList.remove("showing-frag");
  }

  // highlight nav item when scrolled to/past respective list
  for (i = 0; i < list.length; i++ ) {
    var list_pos = list[i].offsetTop;

    // -1 compensates for frag rounding bug
    if (scroll_pos >= nav_pos + list_pos - 1) {
      nav_item[i].classList.add("current");
    } else {
      nav_item[i].classList.remove("current");
    }
  }
}
