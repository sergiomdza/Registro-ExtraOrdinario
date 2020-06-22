const { Router } = require('express');
const router = Router();

const { createUser, getUsers, updateUser, DeleteUser } = require('../controllers/usuario.controllers');

router.route('/')
  .get(getUsers)
  .post(createUser)
router.route('/:id')
  .put(updateUser)
  .delete(DeleteUser)

module.exports = router;
