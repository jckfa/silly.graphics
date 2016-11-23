
var list        = document.getElementsByClassName("list"),
    hiding_list = "hiding_list";


function close_lists() {
  for (i = 0; i < list.length; i++) {
    list[i].classList.add(hiding_list);
  }
}

function toggle_list(index) {

  if (list[index].classList.contains(hiding_list)) {
    close_lists();
    list[index].classList.remove(hiding_list);
  } else {
    list[index].classList.add(hiding_list);
  }
}
