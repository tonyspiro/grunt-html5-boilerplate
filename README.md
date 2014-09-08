#Grunt Initializr

Grunt Initializr is an HTML5 boilerplate with added Grunt task managment functionality.  It is gives you an easy start to any web project by including the great foundation provided by [Bootstrap Initializr](http://www.initializr.com/) and also adds the streamlined workflow power of Grunt JS to output your code minified and easily organized.


##Getting Started

Clone the repo, cd into it and run either of the following commands:
```
grunt
grunt watch
```

Grunt will:<br>
1. Process <code>src/css/main.less</code> into <code>src/css/main.css</code> and minify the css and save to <code>dist/css/main.min.css</code>.<br>
2. Minify <code>src/js/main.js</code> and save to <code>dist/js/main.min.js</code>.<br>
3. Minify <code>src/index.html</code> and save to <code>index.html</code>.<br>

##Grunt.js
This file includes a less preprocessor, javascript minification, css minification, html minification and <code>grunt watch</code> which runs the command when any of the watch files are edited.
