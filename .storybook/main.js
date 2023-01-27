const path = require('path');

module.exports = {
    'stories': [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.sass$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../styles/'),
        });
        return config;
    },
};
