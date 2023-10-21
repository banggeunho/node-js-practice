var mysql           = require('mysql');
var connection      = mysql.createConnection({
    host        :   'localhost',
    port        :   '3306',
    user        :   'ddooby',
    password    :   'ddooby',
    database    :   'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
})

connection.end();