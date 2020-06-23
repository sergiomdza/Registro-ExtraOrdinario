const { Router } = require('express');
const router = Router();

const { getimg1,getimg2} = require('../controllers/descargas.controllers');

router.route('/img1')
  .get(getimg1)
router.route('/img2')
  .get(getimg2)

module.exports = router;
