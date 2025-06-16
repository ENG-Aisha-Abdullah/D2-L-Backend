import express from 'express';
import fs from 'fs';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/hello-world');
});

app.get('/hello-world', (req, res) => {
  res.redirect('/hello-world.json');
});

app.use((req, res) => {
  res.status(404).send(`${req.method} is not supported on ${req.path}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
