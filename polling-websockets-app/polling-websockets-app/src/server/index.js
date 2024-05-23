"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortPolling_1 = require("./shortPolling");
const longPolling_1 = require("./longPolling");
const websocket_1 = require("./websocket");
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.static('src/client'));
app.get('/short-polling', shortPolling_1.shortPollingHandler);
app.get('/long-polling', longPolling_1.longPollingHandler);
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
(0, websocket_1.createWebSocketServer)(server);
