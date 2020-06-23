const conexion = require('../database')

const UserCtrl = {};

UserCtrl.getUsers = async (req, res) => {
  conexion.query("SELECT * FROM alumnos", (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
};

UserCtrl.getMax = async (req, res) => {
  res.send({num:7})
};

UserCtrl.createUser = async (req, res) => {

  const {nombre, apellidos, carrera, semestre, correo } = req.body;

  var values = [
    [ nombre, apellidos, carrera, semestre, correo]
  ]

  conexion.query("INSERT INTO alumnos (nombre, apellidos, carrera, semestre, correo) VALUES ?", [values], (err, rows, fields) => {
    if (!err) {
      res.redirect('../página%20principal/pagina_principal.html')
    } else {
      console.log(err);
    }
  })

};

UserCtrl.DeleteUser = async (req, res) => {  
  conexion.query('DELETE FROM alumnos WHERE matricula=?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
}

UserCtrl.UpdateUser = async (req, res) => {
  console.log("Esto no debe funcionar aun");
}
module.exports = UserCtrl;
