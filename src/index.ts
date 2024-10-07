import http from "http";
import app from "./app";
import { subscribeEvent } from "./subscribeEvent";

const PORT = 5001;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Start service on ${PORT} port!`);

    subscribeEvent();
});