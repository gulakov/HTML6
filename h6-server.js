var http = require('http'), fs = require('fs'), urlparse = require('url');

var app = function (req,res) {
	var url = urlparse.parse(req.url);

   	res.writeHead(200,{
   		"Access-Control-Allow-Origin": "*"  //enable external domains to scrape hkrnews.com
   });

	 if ( url.pathname == "/h6-script.js"){
		fs.createReadStream("h6-script.js").pipe(res, {end: true});;


	} else {
		fs.createReadStream("index.html").pipe(res, {end: true});;

	}


}


http.createServer(app).listen(66, function(){
	console.log("SERVER STARTED " + new Date().toLocaleString());
})



//https
require('https').createServer({
    cert: fs.readFileSync('../letsencrypt/live/html6.io/fullchain.pem'),
      key: fs.readFileSync('../letsencrypt/live/html6.io/privkey.pem')
  },app).listen(660)
