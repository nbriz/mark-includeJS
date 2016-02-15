# mark-includeJS
quick JavaScript hack, meant to function similarly to php includes ( in that u can stick html from one file into html in another file ). in this case, it also allows u to pass variables to the .html page being included. 

## how it works
like i said, similar use case to php includes, xcept it’s client-side. so say u’ve got ur site’s menu in a file called nav.html like so:

```html
<div id="menu">
	<a href="#"> home </a> | <a href="#">about</a> | <a href="#">links</a>
</div>
```

and u'd like to include it in a few other pages, here's what one of those might look like:

```html
<html>
	<head>
		<title> simple example </title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/styles.css">
	</head>
	<body>
		<div id="nav-bar"></div>
		<script src="js/include.js"></script>
		<script>
			// first argument: id of element u want to insert this into
			// second argument: path to the file u want to insert
			Include('nav-bar','includes/nav.html');
		</script>
	</body>
</html>
```
## just a tad more functionality
u could also pass variables through to the include. just put the '&' symbol before the name of the variable ( ex: &name or &age, etc.) like so:

```html
<div class="profilepic">
	<img src="&imgSrc" alt="&name">
	<div class="info">
		this is a picture of &name
	</div>
</div>
```
then in the page u'd like to include this in, something like:

```html
<div id="pic"></div>
<script src="js/include.js"></script>
<script>
	Include('pic','includes/imageframe.html', {
		imgSrc: 'images/cat.gif',
		name: 'cool cat'
	});
</script>
```
...that's pretty much it, check out the examples in the example folder