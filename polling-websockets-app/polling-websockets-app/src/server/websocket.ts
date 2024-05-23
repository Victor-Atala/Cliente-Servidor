import { Server } from 'http';
import WebSocket from 'ws';

export const createWebSocketServer = (server: Server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log('received: %s', message);
            ws.send(`Echo: ${message}`);
        });

        ws.send('Que onda, se supone que esto es un websocket');
    });
};
