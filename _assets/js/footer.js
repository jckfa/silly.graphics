
var button    = document.getElementsByClassName("tab")[0];
var header    = document.getElementsByClassName("site__header")[0];

header.classList.add("fixed");
header.classList.add("hiding");

function toggleFooterItem() {
  if (header.classList.contains("hiding")) {
    header.classList.remove("hiding");
  } else {
    header.classList.add("hiding");
  }
}
