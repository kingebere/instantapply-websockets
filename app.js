const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

app.ws('/', (ws, req) => {
  // Handle WebSocket connections

  ws.on('message', (message) => {
    // Process incoming WebSocket messages
    console.log('Received message:', message );

    // Send a response back to the client
    ws.send(message);
  });

  ws.on('close', () => {
    // Handle WebSocket connection close
    console.log('WebSocket connection closed');
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
