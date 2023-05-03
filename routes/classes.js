var express = require('express');
var router = express.Router();
const {addclasses,getclasses} =require("../service/classesService")
/* GET users listing. */
router.post('/addNewClass',async function(req, res, next) {
    const result = await addclasses(req.body);
    // console.log(result);
    res.send(result);
});

router.get('/getClasses',async function(req, res, next) {
    const result = await getclasses(req.query);
    // console.log(result);

    res.send(result);

  
    
    
});


module.exports = router;
