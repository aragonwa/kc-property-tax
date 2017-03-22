module.exports = {
  dev: {
    options: {
      paths: ['<%= src %>/less'],
      cleancss: false,
      compress: false,
      modifyVars: {
        'fa-font-path' : '"//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts"'
      }
    },
    files: {
      '<%= public %>/css/kc-theme-corporate.css': '<%= src %>/less/kc-theme-corporate.less',
      '<%= public %>/css/custom.css': '<%= src %>/less/custom.less'
    }
  }
};