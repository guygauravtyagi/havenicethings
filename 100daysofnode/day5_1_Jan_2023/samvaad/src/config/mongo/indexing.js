const MongoClient = require('mongodb').MongoClient;
const config = require('./../../meta-data/config');

MongoClient.connect(config.mongoUri).then(
    (data) => {
        data.db(config.db_dev).collection('users').indexes({ userName: "text", firstName: "text", lastName: "text" })
        console.log(data.db(config.db_dev).collection('users'))
    }
).catch(
    err => console.log(err)
)