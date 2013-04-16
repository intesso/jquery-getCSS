jquery-getCSS
=============

cross browser function to dynamically load an external css file. 
see: [github page](http://intesso.github.com/jquery-getCSS/)

## Usage
Download the file [jquery.getCSS.js](https://raw.github.com/intesso/jquery-getCSS/master/jquery.getCSS.js) and include it in the header of your html:

```html
	<script src="jquery.getCSS.js"></script>
```

if jQuery is loaded it adds the getCSS function to the jQuery object:
```js
	$.getCSS("getCSS.css");
```

Otherwise it adds it to the window object:
```js
	window.getCSS("getCSS.css");
```

### Options
the function takes an attributes hash or a string

```js
	// file name as string:
	$.getCSS("fresh.css")

	// attributes as hash:
	$.getCSS({href:"cool.css", media:"print"})
	$.getCSS({href:"/styles/forest.css", media:"screen"})	
```

## Testing

Tested with Firefox, Chrome, IE

Open this link: [Test Page](http://htmlpreview.github.com/?https://raw.github.com/intesso/jquery-getCSS/master/getCSS.html) and click applyCSS and the external css file should be loaded and the styles should be applied.

## Credits
Original Idea by:
Soviut http://stackoverflow.com/questions/1184950/dynamically-loading-css-stylesheet-doesnt-work-on-ie

## References
IE special: http://msdn.microsoft.com/en-us/library/ie/ms531194(v=vs.85).aspx

## License 
[MIT License](https://github.com/intesso/jquery-getCSS/blob/master/LICENSE)


## Support or Contact
Having trouble with this script? Please let me know: andi.neck@intesso.com.
