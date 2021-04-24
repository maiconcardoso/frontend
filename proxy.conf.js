const PROXY_CONFIG = [
    {
        context: ['/api'],
        target:'http://localhost:8080/',
        sercure: false,
        loglevel: 'debug',
        pathRewrite: {'^/api': ''}
    }
];

module.exports = PROXY_CONFIG;