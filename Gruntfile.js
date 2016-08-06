"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                src: 'app/app.js',
                dest: 'dist/bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        karma: {
            continuous: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            karma: {
                files: ['app/app.js', 'app/**/*.js', 'test/**/*.js'],
                tasks: 'karma:continuous'
            },
            browserify: {
                files: ['app/app.js', 'app/**/*.js'],
                tasks: 'browserify'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
