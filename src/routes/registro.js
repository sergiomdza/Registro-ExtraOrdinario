const { Router } = require('express');
const router = Router();

const { createRegistro, getRegistro, UpdateUser, DeleteUser } = require('../controllers/registro.controllers');

router.route('/')
  .get(getRegistro)
  .post(createRegistro)
router.route('/:id')
  .put(UpdateUser)
  .delete(DeleteUser)

module.exports = router;
