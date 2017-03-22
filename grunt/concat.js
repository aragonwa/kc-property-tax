module.exports = {
  dev: {
    options: {
      stripBanners: {
        options: {},
      },
      banner: '/*\n'+
              ' * Author: King County Web Team\n' +
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= src %>/js/scripts/kc-formValidation.js':
      ['<%= src %>/js/scripts/form-validator/dist/js/formValidation.js',
       '<%= src %>/js/scripts/mandatoryIcon/mandatoryIcon.js',
       '<%= src %>/js/scripts/form-validator/dist/js/framework/kc-bootstrap.js'
      ],
      '<%= public %>/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '!<%= src %>/js/lib/dept-footer-map.js',
      '<%= src %>/js/vendor/scrollToFixed.min.js'],
    }
  }
};