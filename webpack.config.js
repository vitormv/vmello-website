const path = require('path');

module.exports = {
    resolve: {
        mainFields: ['browser', 'main'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
    },
};
