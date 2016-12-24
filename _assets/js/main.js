
var main        = document.getElementsByTagName("main")[0],
    list        = document.getElementsByClassName("list"),
    list_items  = document.getElementsByClassName("list-items"),
    items_shell = document.getElementsByClassName("list-items-shell"),
    list_nav    = document.getElementsByClassName("list__nav")[0],
    nav_item    = document.getElementsByClassName("nav-item"),
    top_frag    = document.getElementsByClassName("top-frag")[0],
    selected    = "selected";

// close all lists
function close_lists() {
  for (i = 0; i < list.length; i++) {
    items_shell[i].style.height = "0";
    list[i].classList.remove(selected);
  }
}

window.addEventListener("resize", set_list_height);

function set_list_height() {
  for (i = 0; i < list.length; i++) {
    if (list[i].classList.contains(selected)) {
      items_shell[i].style.height = list_items[i].offsetHeight + "px";
    }
  }
}

// toggle selected list
function toggle_list(i) {
  if (window.innerWidth < 800) {
    // if list is closed
    if (!list[i].classList.contains(selected)) {
      close_lists();
      // open list
      list[i].classList.add(selected);
      set_list_height();
    } else {
      // close list
      items_shell[i].style.height = "0";
      list[i].classList.remove(selected);
    }
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
