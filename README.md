jquery-getCSS
=============

cross browser function to dynamically load an external css file. 
see: [github page](http://intesso.github.com/jquery-getCSS/)

## Usage
include this script in your header:

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

(The MIT License)

Copyright (c) 2013 intesso

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Support or Contact
Having trouble with this script? Please let me know: andi.neck@intesso.com.