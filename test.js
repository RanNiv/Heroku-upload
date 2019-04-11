/* var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Test: 'Express'}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
}); */


var port=process.env.port || 8081;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Test Node js');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example node app listening at http://%s:%s", host, port)
})


