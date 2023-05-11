const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@ui-kit': path.resolve(__dirname, 'src/ui-kit'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  },
};