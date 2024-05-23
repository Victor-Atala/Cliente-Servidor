import express from 'express';
import { shortPollingHandler } from './shortPolling';
import { longPollingHandler } from './longPolling';
import { createWebSocketServer } from './websocket';

const app = express();
const port = 5000;


app.use(express.static('src/client'));

app.get('/short-polling', shortPollingHandler);
app.get('/long-polling', longPollingHandler);


const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

createWebSocketServer(server);
