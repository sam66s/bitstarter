var express = require('express');
var app = express();
app.use(express.logger());

var buf = new Buffer (16);
buf = fs.readFileSync(index.html);
output_sam = buf.toString('utf-8');



app.get('/', function(request, response) {
  response.send(output_sam);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
