const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('New visitor IP:', ip);
  res.send(`<h1>Hello! Your IP is logged.</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
