import OSC from "osc-js";
const osc = new OSC({
    plugin: new OSC.BridgePlugin({
        wsServer: {
            port: 8080
        },
        udpClient: {
            port: 8080
        }
    })
});

osc.open();