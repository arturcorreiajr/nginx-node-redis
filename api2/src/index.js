const app = require('express')();

app.get('/api2', (req, res) => {
  return res.send('Hello from Api 2');
});

app.listen('3002', () => console.log('Server running on port 3002'));
