const express = require('express');
const expressWs = require('express-ws');

const app = express();
const wsInstance = expressWs(app);

app.ws('/', (ws, req) => {
  // Handle WebSocket connections

  ws.on('message', (message) => {
    // Process incoming WebSocket messages
    console.log('Received message:', message);

    // Send a response back to the client
    ws.send('Message received!');
  });

  ws.on('close', () => {
    // Handle WebSocket connection close
    console.log('WebSocket connection closed');
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
