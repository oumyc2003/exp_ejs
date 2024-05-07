const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
        database: "DB"
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected to mysql");
	}
});
 const donnesInserer = [
        { ID: 1 , Titre: " ",  Country: " " },
        { ID: 2 , Titre: " ",  Country: " " }
    ];

  
    const sql = "INSERT INTO serie (ID, Title, Country) VALUES ?";
    con.query(sql, [donnesInserer.map(item => [item.ID, item.Title, item.Country])], function(err, result) {
        if (err) {
            throw err;
        }
        console.log("Records inserted: " + result.affectedRows);
        con.end(); 
    });



      