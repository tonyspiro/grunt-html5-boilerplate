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
