module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '../../public/images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: '../../public/images/'
    }]
  }
}
