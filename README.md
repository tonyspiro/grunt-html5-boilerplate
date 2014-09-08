#Grunt Initializr

Grunt Initializr is an HTML5 boilerplate with added Grunt task managment functionality.  It is gives you an easy start to any web project by including the great foundation provided by a Bootstrap version of Initializr and also adds the streamlined workflow power of Grunt JS to output your code in a minified and easily organized.


##Getting Started
The structure includes a <code>src</code> folder which compiles to the <code>dist</code> folder and the <code>src/index.html</code> will minify to the <code>/index.html</code> file.

Run either of the following commands:
```
grunt
grunt watch
```

##Grunt.js
This file includes a less preprocessor, uglify, cssmin, htmlmin with <code>grunt watch</code> runs the program as any of the watch files are edited.

Grunt.js
```
'use strict';

module.exports = function(grunt){

	grunt.initConfig({

    less: {
      production: {

        files: {
          "src/css/main.css": "src/css/main.less"
        }
      }
    },
    uglify: {
        my_target: {
          files: {
            'dist/js/main.min.js': 'src/js/main.js'
          }
        }
    },
		cssmin: {
      combine: {
        files: {
          'dist/css/main.min.css': ['dist/css/bootstrap.min.css', 'src/css/main.css']
        }
      }
    },
    htmlmin: {
        dist: {
            options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
                'index.html': 'src/index.html'
            }
        }
    },
    watch: {
      src: {
        files: ['src/css/main.less','src/css/main.css', 'src/js/main.js','src/index.html'],
        tasks: ['build'],
      }
   	}
	});

	// Add plugins
  grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

 	grunt.registerTask('build', ['less', 'uglify','cssmin','htmlmin']);
  grunt.registerTask('default', ['less', 'uglify','cssmin','htmlmin']);

 	grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

};
```
