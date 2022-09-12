const app = require('express')();
const Redis = require('./redis');

app.get('/api1', async (req, res) => {
  const counter = Number((await Redis.get('api1:counter')) || 0) + 1;

  await Redis.set('api1:counter', counter);

  return res.send(`Hello from Api 1. Counter: ${counter}`);
});

app.listen('3001', () => console.log('Server running on port 3001'));
