module.exports = {
  dev: {
    bsFiles: {
      src: 'public/*.html'
    },
    options: {
      watchTask: true,
      server: {
        baseDir: './public'
      }
    }
  }
};
