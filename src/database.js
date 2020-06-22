var mysql = require('mysql');
var conexion = mysql.createConnection({
  host: "bdify1u89j6lgitdzrgc-mysql.services.clever-cloud.com",
  user: "unaytoag8qonpsd5",
  password: "nUgoZZjuuWIzsM1Axqbb",
  database: "bdify1u89j6lgitdzrgc",
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
