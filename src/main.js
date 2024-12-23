import p5 from "p5";
import sketch from "./sketch";
import OSC from "osc-js";

const osc = new OSC();
osc.open({ host: "localhost", port: 8080 });

new p5(sketch);

window.addEventListener("oscMessage", function (e) {
    osc.send(new OSC.Message("/test", ...e.detail));
    console.log("sent", e.detail);
});