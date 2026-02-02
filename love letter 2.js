$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

document.addEventListener("click", startMusic, { once: true });

function startMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3; // optional softer volume
  music.play().catch(() => {});
}
