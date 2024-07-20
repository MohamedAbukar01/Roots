module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /node_modules\/@mapbox\/node-pre-gyp\/lib\/util\/nw-pre-gyp\/index\.html$/,
        use: 'null-loader'
      });
      return config;
    },
  };