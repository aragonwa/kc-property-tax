module.exports = {
  dev: {
    options: {
      processors: [
        require('autoprefixer')({browsers:['last 2 versions', 'ie >= 8']})
      ]
    },
    dist: {
      src: '<%= public %>/css/*.css'
    }
  }
};