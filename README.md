# HTML6
HTML6.io upgrades next-generation .html pages using a front-end javascript compiler - compatible with all modern HTML5 browsers


**index.html (HTML6.io)**
```
<script src=http://html6.io/jquery+bootstrap>
title "Sample App"
css app-style
js app-script

sidebar
iframe#article sandbox="allow-scripts"
comments-container
	btn-group [reply.btn "reply", open.btn "open", share.btn "share"]
	comments
```


Compiles into HTML5, rendered by modern browsers as
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sample App</title>
<link rel="stylesheet" href="app-style.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="/app-script.js"></script>
</head>
<body>
	<div id="sidebar"></div>
	<iframe id="article" sandbox="allow-scripts"></iframe>
	<div id="comments-container">
		<div id="btn-group">
			<div class='btn' id='reply'>reply</div>
			<div class='btn' id='open'>open</div>
			<div class='btn' id='share'>share</div>
		</div>
		<div id="comments"></div>
	</div>
</body>
</html>
```
