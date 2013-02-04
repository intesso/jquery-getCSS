/*
 * jQuery getCSS Plugin
 * Copyright 2013, intesso
 * MIT license.
 *
 * This tiny plugin loads a external css file dynamically.
 * It should address cross browser compatibility, especially the special case IE;-)
 *
 * Original idea by:
 * Soviut http://stackoverflow.com/questions/1184950/dynamically-loading-css-stylesheet-doesnt-work-on-ie
 *
 * Reference IE: http://msdn.microsoft.com/en-us/library/ie/ms531194(v=vs.85).aspx
 *
 */


(function() {
	/*
		arguments: attributes
		attributes can be a string: then it goes directly inside the href attribute.
		e.g.: $.getCSS("fresh.css")

		attributes can also be an objcet.
		e.g.: $.getCSS({href:"cool.css", media:"print"})
		or:	$.getCSS({href:"/styles/forest.css", media:"screen"})
	*/
	var getCSS = function(attributes) {
			// setting default attributes
			if(typeof attributes === "string") {
				var href = attributes;
				attributes = {
					href: href
				};
			}
			if(!attributes.rel) {
				attributes.rel = "stylesheet"
			}

			// appending the stylesheet
			// TODO: cleanup after testing
			// if(document.createStyleSheet ||  !$.each || true) {
			if(true) {
				// no jQuery stuff here, just plain dom manipulations
				var styleSheet = document.createElement("link");
				for(var key in attributes) {
					styleSheet.setAttribute(key, attributes[key]);
				}
				var head = document.getElementsByTagName("head")[0];
				head.appendChild(styleSheet);
				// or:
				//document.documentElement.firstChild.appendChild(styleSheet);
				// another version to make make IE happy until 31 Elements and without any attributes
				// document.createStyleSheet(attributes.href);
			} else {
				// inserting the stylesheet with jQuery
				// building the attribute string
				var builder = "";
				$.each(attributes, function(key, value) {
					builder += key + "='" + value + "' ";
				});

				$('<link rel="stylesheet"' + builder + '" />').appendTo('head');
			}
		};

	if(typeof jQuery === "undefined") {
		window.getCSS = getCSS;
	} else {
		jQuery.getCSS = getCSS;
	}

})();