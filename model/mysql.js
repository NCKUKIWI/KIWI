var mysql = require('mysql');
var config = require('../config');

var connection;

function handleDisconnect() {
    connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.pw,
        database: config.db.database,
        port: config.db.port
    });

    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db: ', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

exports.connection = connection;