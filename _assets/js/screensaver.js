
var screensaver = document.querySelector(".screensaver"),
    t,
    wait_time   = 60000;

// prefix singlular digits with zero
function zero_pad(n) {
  return n < 10 ? "0" + n : n;
}

// construct clock and print to page
function tick() {
  var d       = new Date(),
      h24     = d.getHours(),
      h12     = (h24 + 24) % 12 || 12, // default to 12 when h24 = 0 or 12
      h       = zero_pad(h12),
      m       = zero_pad(d.getMinutes()),
      s       = zero_pad(d.getSeconds()),
      ampm    = h24 < 12 ? "am" : "pm",
      format  = h + ":" + m + ":" + s + " " + ampm,
      content = document.querySelector(".screensaver-content");

  content.innerHTML = format;
}

// user is inactive, enable screensaver
function start_screensaver() {
  tick();
  setInterval(tick, 1000);
  screensaver.classList.remove("hidden");
}

// wait for inactivity
function start_countdown() {
  t = setTimeout(start_screensaver, wait_time)
}

window.addEventListener("load", start_countdown);

function reset_screensaver() {
  clearTimeout(t);
  screensaver.classList.add("hidden");
  start_countdown();
}

window.addEventListener("mousemove", reset_screensaver);
window.addEventListener("scroll",    reset_screensaver);
window.addEventListener("resize",    reset_screensaver);
