module.exports = {
  dev: {
    options: {
      config: '.csscomb.json'
    },
    files: {
      '<%= public %>/css/default.css': '<%= public %>/css/default.css',
      '<%= public %>/css/caring.css': '<%= public %>/css/caring.css',
      '<%= public %>/css/environment.css': '<%= public %>/css/environment.css',
      '<%= public %>/css/corporate.css': '<%= public %>/css/corporate.css',
    }
  }
};
