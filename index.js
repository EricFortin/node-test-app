var restify = require('restify');
var bunyan = require('bunyan');


var log = bunyan.createLogger({name: "myapp"});

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  log.info("Echoing %s", req.params.name);
  res.send(req.params);
  return next();
});

server.listen(8080, function () {
  log.info('%s listening at %s', server.name, server.url);
});
