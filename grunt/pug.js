module.exports = function(grunt){

  return {
    dev: {
      options: {
        pretty: true,
        data: {
          debug: false
        }
      },
       files: {
        '<%= public %>/index.html': '<%= src %>/pug/index.pug'
      }
    },
    spec: {
      options: {
        pretty: true,
        data: {
          debug: false
        }
      },
      files: {
        // Set option in command line --targetFile="file"
        '<%= public %>/<%= targetFile %>.html': '<%= src %>/pug/<%= targetFile %>.pug'
      }
    }
  };
};