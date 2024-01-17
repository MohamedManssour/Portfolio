module.exports = {
    // options...
    publicPath:'/',
    outputDir: 'dist', // Where your build files are generated
    assetsDir: 'assets', // Where your assets are located within the outputDir
    indexPath: 'index.html', // The name of the entry point HTML file
  
    // Advanced configurations (if needed)
    devServer: {
      // Development server configuration
    },
    configureWebpack: {
      // Webpack configuration
    },
    chainWebpack: (config) => {
      // Modify internal webpack configuration
    },
  
  };
  