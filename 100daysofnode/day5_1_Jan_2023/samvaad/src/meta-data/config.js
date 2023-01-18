module.exports = {
    PORT: '3000',
    jwt: {
        type: 'jwt',
        clientSecret: 'Tr2qQ7ruEP6Buq6O6gdJ',
        validity: '24h'
    },
    refresh: {
        type: 'refresh',
        refreshSecret: 'G57LjWLaAlFcWZ8wUzJs',
        validity: '2400h'
    },
    mongoUri: `mongodb://admin:badkal@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1`,
    db_dev: 'samvaad_dev'
}