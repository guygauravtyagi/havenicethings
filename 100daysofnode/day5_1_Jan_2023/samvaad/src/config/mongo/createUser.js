const MongoClient = require('mongodb').MongoClient;
const config = require('./../../meta-data/config');

MongoClient.connect(config.mongoUri).then(
    (data) => {
        var db = data.db(config.db_dev);
        db.createCollection('users').then(
            db_data => console.log(db_data)
        )
        console.log(db);
    }
).catch(
    err => console.log(err)
)