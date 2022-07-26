import DebugWatcher from "./utils/DebugWatcher.js";

function init() {
    console.log("### Starting WebTech-App ###"); // eslint-disable-line no-console
    DebugWatcher.connect(); // Enables live reloading when client code has changed    
}

init();