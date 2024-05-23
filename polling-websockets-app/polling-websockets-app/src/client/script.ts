const output = document.getElementById('output') as HTMLElement;
const shortPollingBtn = document.getElementById('short-polling-btn') as HTMLButtonElement;
const longPollingBtn = document.getElementById('long-polling-btn') as HTMLButtonElement;
const websocketBtn = document.getElementById('websocket-btn') as HTMLButtonElement;

shortPollingBtn.addEventListener('click', async () => {
    const response = await fetch('/short-polling');
    const data = await response.json();
    output.innerHTML = `<p>Short Polling Response: ${data.message} at ${data.timestamp}</p>`;
});

longPollingBtn.addEventListener('click', async () => {
    const response = await fetch('/long-polling');
    const data = await response.json();
    output.innerHTML = `<p>Long Polling Response: ${data.message} at ${data.timestamp}</p>`;
});

websocketBtn.addEventListener('click', () => {
    const socket = new WebSocket('ws://localhost:3000');
    socket.onmessage = event => {
        output.innerHTML = `<p>WebSocket Response: ${event.data}</p>`;
    };
    socket.onopen = () => {
        socket.send('Hello WebSocket');
    };
});
