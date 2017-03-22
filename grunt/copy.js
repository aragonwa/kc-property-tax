module.exports = {
  'dev-js':{
    files: [{
      src: '<%= src %>/js/scripts/kc-formValidation.js',
      dest: '<%= public %>/js/scripts/kc-formValidation.js'
    },
    {
      src: '<%= src %>/js/lib/dept-footer-map.js',
      dest: '<%= public %>/js/scripts/dept-footer-map.js'
    }]
  },
  'dev-css':{
    files: [{
      src: '<%= src %>/js/scripts/form-validator/dist/css/formValidation.min.css',
      dest: '<%= public %>/css/styles/kc-formValidation.css'
    }]
  },
  'bower': {
    files: [
      { //Bootstrap LESS
        expand: true,
        cwd: '<%= src %>/bower_components/bootstrap/less/',
        src: ['**'],
        dest: '<%= src %>/less/bootstrap/'
      },
      {//Bootstrap JS
        src: '<%= src %>/bower_components/bootstrap/js/bootstrap.min.js',
        dest: '<%= src %>/js/vendor/bootstrap.min.js'
      },
      {//Fontawesome
        expand: true,
        cwd: '<%= src %>/bower_components/fontawesome/less/',
        src: ['**'],
        dest: '<%= src %>/less/font-awesome/'
      },
      {//jQuery
        src: '<%= src %>/bower_components/jquery/jquery.js',
        dest: '<%= src %>/js/vendor/jquery.min.js'
      },
      {//ScrollToFixed
        src: '<%= src %>/bower_components/ScrollToFixed/jquery-scrolltofixed.js',
        dest: '<%= src %>/js/vendor/scrollToFixed.min.js'
      },
      {//yamm3
        src: '<%= src %>/bower_components/yamm3/yamm.less',
        dest: '<%= src %>/less/yamm/yamm.less'
      },
      {//onoffcanvas
        src: '<%= src %>/bower_components/onoffcanvas/dist/onoffcanvas.js',
        dest: '<%= public %>/js/vendor/onoffcanvas.js',
      },
      {
        src: '<%= src %>/bower_components/onoffcanvas/dist/onoffcanvas.css',
        dest: '<%= public %>/css/onoffcanvas.css'
      }
    ]
  }
};