module.exports = function(grunt) {

	// Folder settings
	var SOURCES = "source/";

	var SOURCES_JS = SOURCES+"js/";
	var SOURCES_SASS = SOURCES+"sass/";

	var COMPILED = "public/";
	var COMPILED_JS = COMPILED+"js/";
	var COMPILED_SASS = COMPILED+"css/";


	// JS Files
	var JS_PREFIX = "App";
	var JS_FILES = [
		'global',
		'view',
		'api',
		'tools'
	];

	// Fotmat JS Array
	for(var i in JS_FILES){
		JS_FILES[i] = SOURCES_JS+JS_PREFIX+"."+JS_FILES[i]+".js"
	}

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tag: {
		  banner: '/*!\n' +
				  ' * DO NOT EDIT THIS FILE\n' +
				  ' * File concatatenated by grunt @ <%= grunt.template.today("yyyy-mm-dd HH:MM") %>\n' +
				  ' * <%= pkg.name %>\n' +
				  ' * <%= pkg.title %>\n' +
				  ' * <%= pkg.url %>\n' +
				  ' * @author <%= pkg.author %>\n' +
				  ' * @version <%= pkg.version %>\n' +
				  ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
				  ' */\n\n\n'
		},
		sass: {
		  dist: {
			files: {
			  'public/css/main.css': 'source/sass/main.scss'
			}
		  }
		},
		autoprefixer: {
		  options: {
			browsers: ['last 8 versions']
		  },
		  dist: {
                files: {
                    'public/css/main.css': 'public/css/main.css'
                }
          }
		},
		// JSHint
		jshint: {
			files: [SOURCES_JS+'/*.js'],
			options: {
				laxcomma: true,
				boss: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				es3: true,
				browser: true,
				smarttabs: true,
				"-W099": true, // Relax rules on mixed tabs and spaces
				globals: {
					jQuery: true
				}
			}
		},

		// Concatatenated Javascript
		concat: {
			options: {
				banner: '<%= tag.banner %>'
			},
			js: {
				src: JS_FILES,
				dest: COMPILED_JS+'app.js'
			}
		},

		// Minified Javascript
		uglify: {
		  options: {
			banner: '/*! DO NOT EDIT THIS FILE */\n'+'/*! File Minified by grunt @ <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n<%= tag.banner %>',
			mangle: false
		  },
		  build: {
			src: COMPILED_JS+'app.js',
			dest: COMPILED_JS+'app.min.js'
		  }
		},

		// Watch files and build when they change
		watch: {
			css: {
				files: [SOURCES_SASS+'*.scss'],
				tasks: ['sass','autoprefixer']
			},
			js: {
				files: [SOURCES_JS+'*.js'],
				tasks: ['jshint','concat']
			},
			html: {
				files: [COMPILED_SASS+'*', COMPILED+'*', COMPILED_JS+'*.js'],
				options: {
				    // Start a live reload server on the default port 35729
				    livereload: true
				}
			}
		},

		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 2, // maximum number of notifications from jshint output
				title: "Oops!" // defaults to the name in package.json, or uses project's directory name, you can change to the name of your project
			}
		}

	});

	// Load grunt different tasks
	require('load-grunt-tasks')(grunt);
	grunt.task.run('notify_hooks');
	
	// Register grunt tasks
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'autoprefixer', 'watch', 'notify:watch']);

};