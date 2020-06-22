const conexion = require('../database')

const UserCtrl = {};

UserCtrl.getUsers = async (req, res) => {
  conexion.query("SELECT * FROM users", (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
};

UserCtrl.createUser = async (req, res) => {

  const { name, last_name, phone, city, country } = req.body;

  var values = [
    [name, last_name, phone, city, country, "Pendiente"]
  ]

  conexion.query("INSERT INTO users (name, last_name, phone, city, country, img_profile) VALUES ?", [values], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })

};

UserCtrl.DeleteUser = async (req, res) => {
  conexion.query('DELETE FROM users WHERE id=?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
}

UserCtrl.updateUser = async (req, res) => {

  const { name, last_name, phone, city, country } = req.body;

  conexion.query("UPDATE users set name=? ,last_name=?, phone=?, city=?, country=? WHERE id=?", [name, last_name, phone, city, country, req.params.id], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log("ERROR - :O");
      console.log(err);
    }
  })

}
module.exports = UserCtrl;
