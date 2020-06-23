const { Router } = require('express');
const router = Router();

const { createmaestro, getmaestro, updatemaestro, Deletemaestro } = require('../controllers/maestros.controllers');

router.route('/')
  .get(getmaestro)
  .post(createmaestro)
router.route('/:id')
  .put(updatemaestro)
  .delete(Deletemaestro)

module.exports = router;
