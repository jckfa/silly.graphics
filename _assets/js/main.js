
var list        = document.getElementsByClassName("list"),
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
