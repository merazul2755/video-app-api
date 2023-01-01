const data = require("./db.jd");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = 9000;

server.use(middlewares);
server.use(router);

server.listen(port);
