var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));
var upload = multer({ dest: './uploads' });

app.get("/",function (req,res) {
	res.send("hello world");
});

app.get('/index.htm',function(req,res){
res.sendFile( __dirname + "/index.htm");
});


app.get("/process_get",function (req,res) {
	res.send("hello "+req.query.first_name);
	res.end(JSON.stringify(res));
});

app.get("/fileUpload.htm",function(req,res){
res.sendFile(__dirname+"/fileUpload.htm");
});

app.post("/file_upload",function(req,res){
 console.log(req.body.file.name);
   console.log(req.files.file.path);	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});