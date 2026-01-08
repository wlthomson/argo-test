const express = require('express');
const app = express();
const port = 8080;

const message = process.env.MESSAGE || 'Hello from the default UI!';

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple UI</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .message {
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-size: 24px;
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="message">${message}</div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
