module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['../../public/scripts/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['../../public/sass/*.scss'],
    tasks: ['compass'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['../../public/images/**/*.{png,jpg,gif}', '../../public/images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  }
}
