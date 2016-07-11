var http = require('http'), fs = require('fs'), urlparse = require('url');
const querystring = require('querystring');

global.o = function(msg){
	console.log(msg)
}

var app = function (req,res) {
	var url = urlparse.parse(req.url);
	var path = url.pathname;

	var q = querystring.parse(url.query)


	// o(path)

	res.writeHead(200);

	 if ( path == "/" || !url.pathname)
		return fs.createReadStream(__dirname + "/../html/index.html").pipe(res, {end: true});;



	if( path == "/email_submit" ){

			o("EMAIL FROM:" + q.email)

			res.end()

	} else if( path == "/libs/search" ){


		var libs = fs.readFileSync(__dirname + '/libs.txt', "utf8");

		libs = libs.split(" ");

		// if(q.q)
		// result_libs = libs.filter((item) => {
		// 	return item.toLowerCase().indexOf(q.q.toLowerCase())>-1
		// })


		res.write(JSON.stringify(libs));
		res.end();


	} else {	//or else get file

		file_path = "./"+url.pathname.substr(1);

		if (fs.existsSync(file_path))

			fs.createReadStream(file_path).pipe(res, {end: true});;

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
