var express = require('express');
var router = express.Router();
const {getUsers}= require('../service/getUsers')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result = await getUsers(req)
  res.send(result);
});

module.exports = router;
