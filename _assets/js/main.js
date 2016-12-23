
var list        = document.getElementsByClassName("list"),
    container   = document.getElementsByClassName('list-container')[0],
    list_nav    = document.getElementsByClassName('list__nav')[0],
    nav_item    = document.getElementsByClassName('nav-item'),
    list_title  = document.getElementsByClassName('content-shell'),
    top_frag    = document.getElementsByClassName('top-frag')[0],
    hiding_list = "hiding_list";
    selected    = "selected";

function close_lists() {
  for (i = 0; i < list.length; i++) {
    list[i].classList.add(hiding_list);
    list[i].classList.remove(selected);
  }
}

function toggle_list(index) {
  if (list[index].classList.contains(hiding_list)) {
    close_lists();
    list[index].classList.remove(hiding_list);
    list[index].classList.add(selected);
  } else {
    list[index].classList.add(hiding_list);
    list[index].classList.remove(selected);
  }
}


window.addEventListener("resize", smart_nav);
window.addEventListener("scroll", smart_nav);

function smart_nav() {

  var scroll_pos = document.body.scrollTop,
      nav_pos    = container.offsetTop;

  // fix list-nav
  if (scroll_pos >= nav_pos) {
    list_nav.classList.add("fixed-nav");
    top_frag.classList.add("showing-frag");
  } else {
    list_nav.classList.remove("fixed-nav");
    top_frag.classList.remove("showing-frag");
  }


  for (i = 0; i < list.length; i++ ) {
    var list_pos = list_title[i].offsetTop;

    // -1 compensates for frag rounding bug
    if (scroll_pos >= nav_pos + list_pos - 1) {
      nav_item[i].classList.add("current");
    } else {
      nav_item[i].classList.remove("current");
    }
  }
}
