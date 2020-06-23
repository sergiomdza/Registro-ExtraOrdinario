const conexion = require('../database')

const MatCtrl = {};

MatCtrl.getMat = async (req, res) => {
  conexion.query("SELECT * FROM materias", (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
};

MatCtrl.createMat = async (req, res) => {

  const { id, nombre } = req.body;

  var values = [
    [id, nombre]
  ]
  conexion.query("INSERT INTO materias (id,nombre) VALUES ?", [values], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })

};

MatCtrl.DeleteMat = async (req, res) => {
  conexion.query('DELETE FROM materias WHERE id=?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err);
    }
  })
}

MatCtrl.updateMat = async (req, res) => {

  const {id, nombre } = req.body;

  conexion.query("UPDATE materias set id=? ,nombre=?, WHERE id=?", [id, nombre, req.params.id], (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log("ERROR - :O");
      console.log(err);
    }
  })

}
module.exports = MatCtrl;
