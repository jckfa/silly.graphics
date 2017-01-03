var screensaver = document.getElementsByClassName("screensaver")[0],
    t,
    i,
    wait_time   = 60000; // 1 min

// prefix single-digit numbers with zero
function zero_pad(n) {
  return (n < 10) ? "0" + n : n;
}

// create clock
function clock() {
  var d       = new Date(),
      h24     = d.getHours(),
      h12     = (h24 + 24) % 12 || 12, // default to 12 when h24 = 0 or 12
      h       = zero_pad(h12),
      m       = zero_pad(d.getMinutes()),
      s       = zero_pad(d.getSeconds()),
      ampm    = (h24 < 12) ? "am" : "pm",
      format  = h + ":" + m + ":" + s + " " + ampm,
      content = document.getElementsByClassName("screensaver-content")[0];

  content.innerHTML = format;
}

// print screensaver content
function start_timer() {
  // wait before showing screensaver
  t = setTimeout( function() {
    // show screensaver
    screensaver.classList.remove("hidden");
    // run clock immediately after wait_time
    clock();
    // refresh clock every second
    i = setInterval(function() {
      clock();
    }, 1000);
  }, wait_time);
}

function stop_timer() {
  // hide screensaver content
  screensaver.classList.add("hidden");

  // clear timers
  clearTimeout(t);
  clearInterval(i);
}

function reset_timer() {
  stop_timer();
  start_timer();
}

window.addEventListener("load",      start_timer);
window.addEventListener("mousemove", reset_timer);
window.addEventListener("scroll",    reset_timer);
window.addEventListener("resize",    reset_timer);
