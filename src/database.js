var mysql = require('mysql');
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "rogercore",
  multipleStatements: true
});

conexion.connect((err) => {
  if (!err) {
    console.log("DB is Connected!");
  }
  else {
    console.log(err);
  }
});
module.exports = conexion
