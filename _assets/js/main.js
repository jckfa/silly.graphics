
var list        = document.getElementsByClassName("list"),
    items_shell = document.getElementsByClassName("list-items-shell"),
    selected    = "selected",
    list_anim   = 250;

window.addEventListener("resize", smart_nav);
window.addEventListener("scroll", smart_nav);

function smart_nav() {
  // if desktop
  if (window.innerWidth >= 800) {
    var main       = document.getElementsByTagName("main")[0],
        // list_nav   = document.getElementsByClassName("list__nav")[0],
        top_frag   = document.getElementsByClassName("top-frag")[0],
        scroll_pos = document.body.scrollTop,
        nav_pos    = main.offsetTop;

    // fix list-nav on scroll to/past, show frag
    if (scroll_pos >= nav_pos) {
      // list_nav.classList.add("fixed-nav");
      top_frag.classList.add("showing-frag");
    } else {
      // list_nav.classList.remove("fixed-nav");
      top_frag.classList.remove("showing-frag");
    }

    // highlight nav item when scrolled to/past respective list
    for (i = 0; i < list.length; i++ ) {
      var nav_item = document.getElementsByClassName("nav-item"),
          list_pos = list[i].offsetTop;

      // -1 compensates for frag rounding bug
      scroll_pos >= nav_pos + list_pos - 1 ?
        nav_item[i].classList.add("current")
        :
        nav_item[i].classList.remove("current")
      ;
    }
  }
}

// toggle selected list (i)
function toggle_list(i) {
  // if mobile
  if (window.innerWidth < 800) {
    // if selected list is closed & another list is open
    if (!list[i].classList.contains(selected) && is_any_list_open()) {
      // close that other list
      close_lists();
      // wait for other list to close
      setTimeout(function() {
        open_list(i)
      }, list_anim);
    // if selected list is closed (and all other lists are closed)
    } else if (!list[i].classList.contains(selected)) {
      open_list(i)
    // if selected list is open
    } else {
      // close selected list
      items_shell[i].style.height = "0";
      list[i].classList.remove(selected);
    }
  }
}

// return true if any lists are open
function is_any_list_open() {
  for (i = 0; i < list.length; i++) {
    if (list[i].classList.contains(selected)) {
      return true;
    }
  }
}

// close all lists
function close_lists() {
  for (i = 0; i < list.length; i++) {
    items_shell[i].style.height = "0";
    list[i].classList.remove(selected);
  }
}

// open selected list
function open_list(i) {
  // add class for animating open/close icon and list color
  list[i].classList.add(selected);
  // open list
  set_list_height();
  // scroll to selected list
  scroll_to_list(i);
}

// adjust height on font-size/padding change
window.addEventListener("resize", set_list_height);

// open list (set height so opening can be animated)
function set_list_height() {
  var list_items = document.getElementsByClassName("list-items");

  for (i = 0; i < list.length; i++) {
    if (list[i].classList.contains(selected)) {
      items_shell[i].style.height = list_items[i].offsetHeight + "px";
    }
  }
}

// scroll to selected list
function scroll_to_list(i) {
  // wait for list to open
  setTimeout(function() {
    // get list's top-position
    var elem_pos = items_shell[i].offsetTop;
    // scroll to top of list/to list title
    smoothScroll.animateScroll(elem_pos);
  }, list_anim);
}
