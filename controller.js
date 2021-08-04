const { Board, Led, Button } = require("johnny-five");
const board = new Board({ port: "COM5" });

board.on("ready", function () {
  const button = new Button({
    board: board,
    pin: 8,
    holdtime: 1000,
    invert: false,
  });

  const led = new Led(13);

  board.repl.inject({
    button: button,
  });

  button.on("down", function () {
    console.log("down");
    led.on();
  });

  button.on("up", function () {
    console.log("up");
    led.off();
  });
});
