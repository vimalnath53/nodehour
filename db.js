var mysql = require('mysql');


    var conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password : '',
			port : 3306, 
			multipleStatements:true,
			database:'coding_hour'
	});

    conn.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
module.exports = conn;

