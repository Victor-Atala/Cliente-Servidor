"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortPollingHandler = void 0;
const shortPollingHandler = (req, res) => {
    const data = { message: 'Esta es la respuesta del Short Polling', timestamp: new Date() };
    res.json(data);
};
exports.shortPollingHandler = shortPollingHandler;
