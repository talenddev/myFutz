var express = require('express');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views',__dirname +'/views');
app.set('view engine','html');

app.get('/send/:text(*)', function(req, res){
	var text = req.params.text;
	console.log("Received "+text);
});

if (!module.parent) {
  var port =8080;
	app.listen(port);
	console.log('Express app started on port '+port);
}