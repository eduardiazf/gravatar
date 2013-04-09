module.exports = function (grunt) {
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            all: {
                files: ['test/*.js'],
                tasks: ['jshint:lib', 'jshint:test', 'mochacli']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/*.js']
            },
            test: {
                src: ['test/*.js']
            }
        },
        mochacli: {
            options: {
                require: ['should'],
                reporter: 'spec'
            },
            all: ['test/*.js']
        }
    });

    grunt.registerTask('test', ['jshint:lib', 'jshint:test', 'mochacli']);
};