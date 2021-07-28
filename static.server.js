/* eslint-disable no-console */
import path from 'path';
import compression from 'compression';
import express from 'express';

const PORT = 8092;

// This is the server that runs on "npm run serve".
// It works by serving the statically generated .html files on /out.
// Of course, before starting this server you should export the project with "npm run export"
const mainApp = express();

const rootPath = path.resolve(path.join(__dirname, 'out'));

const staticConfig = {
  extensions: ['html'], // when requesting "/aaa/bbb", also look for "/aaa/bbb.html"
  redirect: true,
  index: 'index.html',
};

mainApp.use(compression());

// serve the actual generated static files
mainApp.use(express.static(path.join(rootPath), staticConfig));

// redirects "/something/that/doesnt_exist"   -> "404.html"
mainApp.all('*', (req, res) => {
  res.status(404).sendFile(path.join(rootPath, '404.html'));
});

console.log(`Server listening on http://localhost:${PORT}/`);

const server = mainApp.listen(PORT);

server.on('connection', (socket) => {
  socket.setNoDelay(true);
});
