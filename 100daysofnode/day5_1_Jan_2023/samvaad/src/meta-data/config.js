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
    }
}