const conexion = require('../database')

const UserCtrl = {};

UserCtrl.getRegistro = async (req, res) => {
  conexion.query("SELECT * FROM registro", (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
};

UserCtrl.createRegistro = async (req, res) => {

  const {fecha, salon, calificación, alumnos_matricula, Maestro_matricula, materias_id } = req.body;
  var numeros =["A23", "122", "Computo 1", "B35" ]
  var values = [
    [191201, numeros[Math.floor(Math.random() * 4)], Math.floor(Math.random() * 10), alumnos_matricula, Maestro_matricula, materias_id]
  ]

  conexion.query("INSERT INTO registro (fecha, salon, calificación, alumnos_matricula, Maestro_matricula, materias_id) VALUES ?", [values], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })

};

UserCtrl.DeleteUser = async (req, res) => {  
  conexion.query('DELETE FROM registro WHERE idregistro=?', [req.params.id], (err, rows, fields) => {
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
