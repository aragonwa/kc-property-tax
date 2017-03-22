module.exports = {
      pug: {
      files: ['<%= src %>/pug/**'],
      tasks: ['pug:dev'],
      options: {
        host: 'localhost',
        atBegin: true,
        pretty: true,
        livereload: true,
        data: {
          debug: false,
        }
      }
    },
    styles: {
      files: ['<%= src %>/less/*'],
      tasks: ['less:dev', 'postcss:dev', 'css_purge:dev', 'csscomb:dev', 'copy:dev-css'],
      options: {
        cleancss: true,
        livereload: true,
        atBegin: true   
      }
    },
    scripts:{
      options: {
        atBegin: true,
        livereload: true
      },
      files: ['<%= src %>/js/*'],
      tasks:['concat:dev', 'copy:dev-js']
    }

}
