var http = require('http');
var dt = require('./myfirstmodule');
var sm = require('./secondmodule');
var tm = require('./thirdmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 // res.write("The date and time are currently: " + dt.myDateTime());
  // res.write("The date and time are currently: " + sm.myDateTime2());
  res.write("The date and time are currently3: " + tm.myDateTime3());

  res.end();
}).listen(8080);