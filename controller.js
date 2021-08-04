const { Board, Led } = require("johnny-five");
const board = new Board({ port: "COM5" });

board.on("ready", () => {
  const led = new Led(13);

  led.blink(1000);

  board.on("exit", () => {
    led.off();
  });
});
