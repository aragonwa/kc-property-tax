module.exports = function(grunt) {
  'use strict';

  // Set option in command line --targetFile="file"
  var targetFile = grunt.option('targetFile');
  //var aws = grunt.file.readJSON('./config/aws.json');

  var globalConfig = {
    src: 'src',
    public: 'public',
    targetFile : targetFile
  };

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig
  });


// Bower, Jade, CSS, JS, deploy
  require('load-grunt-config')(grunt,{
    configPath: path.join(process.cwd(), 'grunt'),
    init: true,
    data: globalConfig
  });

  grunt.registerTask('default', ['dev', 'watch']);
  grunt.registerTask(
    'dev',
    'Build dev files',
    ['clean:dev', 'bower:install', 'copy:bower', 'pug:dev', 'less:dev', 'postcss:dev', 'css_purge:dev', 'csscomb:dev', 'copy:dev-css', 'concat:dev', 'copy:dev-js', 'watch-dev']
  );
  grunt.registerTask(
    'watch-dev',
    'watch dev files',
    ['watch:pug','watch:styles', 'watch:scripts']
  );
};