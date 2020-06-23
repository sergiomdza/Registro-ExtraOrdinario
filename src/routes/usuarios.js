const { Router } = require('express');
const router = Router();

const { createUser, getUsers, UpdateUser, DeleteUser,getMax } = require('../controllers/usuario.controllers');

router.route('/')
  .get(getUsers)
  .post(createUser)
router.route('/max')
  .get(getMax)
router.route('/:id')
  .put(UpdateUser)
  .delete(DeleteUser)

module.exports = router;
