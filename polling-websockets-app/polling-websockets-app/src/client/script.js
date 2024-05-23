"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const output = document.getElementById('output');
const shortPollingBtn = document.getElementById('short-polling-btn');
const longPollingBtn = document.getElementById('long-polling-btn');
const websocketBtn = document.getElementById('websocket-btn');
shortPollingBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('/short-polling');
    const data = yield response.json();
    output.innerHTML = `<p>Respuesta de Short Polling: ${data.message} at ${data.timestamp}</p>`;
}));
longPollingBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('/long-polling');
    const data = yield response.json();
    output.innerHTML = `<p>Respuesta de Long Polling: ${data.message} at ${data.timestamp}</p>`;
}));
websocketBtn.addEventListener('click', () => {
    const socket = new WebSocket('ws://localhost:3000');
    socket.onmessage = event => {
        output.innerHTML = `<p>Respuesta del WebSocket: ${event.data}</p>`;
    };
    socket.onopen = () => {
        socket.send('Que onda, se supone que esto es una respuesta de websocket');
    };
});
