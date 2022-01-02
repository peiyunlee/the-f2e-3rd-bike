module.exports = {
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/the-f2e-3rd-bike\.vercel\.app\/.*/,
            handler: 'networkFirst',
        }
    ],
};