var express = require('express')
var app = express();
app.get('/', function(req, res){
    res.send('Hello World');   
});
app.get('/cocky', function(req, res){
    res.send('cocky duck');   
});
app.get('/failu', function(req, res){
    res.sendfile('/index.html');   
});
app.get('/about', function(req, res){
    res.sendfile(__dirname + '/about.html');   
});
app.get('/sitemap.html', function(req, res){
    res.sendfile(path.join(__dirname) + 'sitemap.html');   
});
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});