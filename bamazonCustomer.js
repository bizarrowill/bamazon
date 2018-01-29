var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  // port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

con.connect(function(err) {
      if (err) throw err;

      // Running this application will first display all of the      
      // items available for sale. Include the ids, names, and 
      // prices of products for sale.

      con.query(
        `SELECT * FROM products`,
        function(
          err,
          result,
          fields
        ) {
          if (err) throw err;
          console.log(result);
        }
      );

      // A query which returns all artists who appear within the top 5000 more than once

      // A query which returns all data contained within a specific range

      // A query which searches for a specific song in the top 5000 and returns the data for it
    });
