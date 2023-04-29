const path = require('path');
module.exports = {
  resolver: {
    extraNodeModules: {
      src: path.resolve(__dirname, 'src'),
    },
  },
};
