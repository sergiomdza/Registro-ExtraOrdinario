const { Router } = require('express');
const router = Router();

const { createMat, getMat, updateMat, DeleteMat } = require('../controllers/materias.controllers');

router.route('/')
  .get(getMat)
  .post(createMat)
router.route('/:id')
  .put(updateMat)
  .delete(DeleteMat)

module.exports = router;
