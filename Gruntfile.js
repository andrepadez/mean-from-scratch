//var config = require('./config/grunt');

module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    'dist/dev/application.js': 'frontend/**/*.js'
                }
            }
        }, 
        watch: {
            js: {
                files: 'frontend/**/*.js',
                tasks: ['browserify:dev']
            }, 
            html: {
                files: 'frontend/**/*.html',
                tasks: ['copy:html'] 
            }
        }, 
        copy: {
            html: {
                expand: true,
                cwd: 'frontend/',
                src: ['**/*.html'],
                dest: 'dist/dev'
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['build:dev', 'watch']);

    grunt.registerTask('build', function(env){
        grunt.task.run('copy');
        grunt.task.run('browserify:'+env);
        //sass compiler
    });

};
