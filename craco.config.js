const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@ui-kit': path.resolve(__dirname, 'src/ui-kit'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@consts': path.resolve(__dirname, 'src/consts'),
      "@models": path.resolve(__dirname, 'src/models'),
      "@utils": path.resolve (__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  },
};