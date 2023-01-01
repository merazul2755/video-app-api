const jsonServer = require("json-server");
const data = require("./data/videos.json");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = 9000;

server.use(middlewares);
server.use(router);

server.listen(port);
