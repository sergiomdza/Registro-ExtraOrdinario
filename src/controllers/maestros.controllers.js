const conexion = require('../database')

const UserCtrl = {};

UserCtrl.getmaestro = async (req, res) => {
  conexion.query("SELECT * FROM maestro", (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
};

UserCtrl.createmaestro = async (req, res) => {

  const { nombre, apellidos } = req.body;

  var values = [
    [nombre, apellidos]
  ]

  conexion.query("INSERT INTO maestro (nombre, apellidos) VALUES ?", [values], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })

};

UserCtrl.Deletemaestro = async (req, res) => {
  console.log("Esto no debe funcionar aun");
}

UserCtrl.updatemaestro = async (req, res) => {
  console.log("Esto no debe funcionar aun");
}
module.exports = UserCtrl;
