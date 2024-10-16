// index.ts
import http from "http";
import app from "./app";
import { subscribeEvent } from "./subscribeEvent";

const PORT = 5001;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Start service on ${PORT} port!`);
    subscribeEvent("wss://sepolia.infura.io/ws/v3/2a34b908696f4275b84ae15338cc6b8a","0x7A001c1b5df0b7D2Ef0e6d74a503690C52E2b549");
    subscribeEvent("wss://arbitrum-mainnet.infura.io/ws/v3/2a34b908696f4275b84ae15338cc6b8a","");
});