export default function sketch(p) {
  let x = 50;
  let y = 50;

  p.setup = function () {
    p.createCanvas(600, 400);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

function sendOSC(...args) {
  const event = new CustomEvent("oscMessage", {
    detail: args
  });
  window.dispatchEvent(event);
}

window.addEventListener("keydown", function (e) {
  if (e.key === "o") {
    sendOSC("hello");
  }
});