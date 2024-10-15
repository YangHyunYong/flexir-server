// index.ts
import http from "http";
import app from "./app";
import { subscribeEvent } from "./subscribeEvent";

const PORT = 5001;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Start service on ${PORT} port!`);
    subscribeEvent("wss://sepolia.infura.io/ws/v3/2a34b908696f4275b84ae15338cc6b8a","0x48EfDb7b1995432fb733FadE4Aa4b7CB03e6cF03");
    subscribeEvent("wss://arbitrum-mainnet.infura.io/ws/v3/2a34b908696f4275b84ae15338cc6b8a","");
});