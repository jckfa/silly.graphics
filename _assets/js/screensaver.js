
var screensaver = document.querySelector(".screensaver"),
    t,
    i,
    wait_time   = 60000; // 1 min

window.addEventListener("load", start_timer);

// wait for inactivity
function start_timer() {
  t = setTimeout(inactive, wait_time);
}

// show screensaver
function inactive() {
  screensaver.classList.remove("hidden");
  clock();
  // refresh clock every second
  i = setInterval(clock, 1000);
}

// create clock
function clock() {
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

// prefix singlular digits with zero
function zero_pad(n) {
  return n < 10 ? "0" + n : n;
}

window.addEventListener("mousemove", reset_timer);
window.addEventListener("scroll",    reset_timer);
window.addEventListener("resize",    reset_timer);

function reset_timer() {
  // hide screensaver content
  screensaver.classList.add("hidden");

  // clear timers
  clearTimeout(t);
  clearInterval(i);

  // restart timer
  start_timer();
}
