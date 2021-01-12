
import axios from 'axios';
import express from 'express';
import * as http from 'http';

it('can start a server and access route', async () => {
  const app = express();
  const port = 6789;
  const route = '/hello';
  const message = 'hello world!';
  app.get(route, (req, res) => {
    res.send(message);
  })
  const server = http.createServer(app)
  server.listen(port);

  const result = await axios.get('http://localhost:6789/hello');
  expect(result.data).toEqual(message);
  
  server.close();
})