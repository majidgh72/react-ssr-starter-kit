const localIdentName = {
    dev: "[local]__[hash:base64:5]",
    prod: "[hash:base64:5]"
}

module.exports = {
    plugins: ['scss'],
    modifyWebpackConfig(config) {
        const webpackConfig = config.webpackConfig;
        const { target, dev } = config.env;

        const ident = dev ? localIdentName["dev"] : localIdentName["prod"];

        if (target === 'web') {
            webpackConfig.module.rules[5].use[1].options.modules.localIdentName = ident;
        }

        if (target === 'node') {
            webpackConfig.module.rules[5].use[0].options.modules.localIdentName = ident;
        }

        return webpackConfig;
    }
};