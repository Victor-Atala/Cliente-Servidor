"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebSocketServer = void 0;
const ws_1 = __importDefault(require("ws"));
const createWebSocketServer = (server) => {
    const wss = new ws_1.default.Server({ server });
    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log('received: %s', message);
            ws.send(`${message}`);
        });
        ws.send('Welcome to WebSocket server');
    });
};
exports.createWebSocketServer = createWebSocketServer;
