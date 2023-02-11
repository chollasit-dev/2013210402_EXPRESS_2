var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')
const passportJWT = require("../middleware/passportJWT");
const checkAdmin = require("../middleware/checkAdmin")

/* GET users listing. */
//router.get('/', companyController.index);
router.get("/",[passportJWT.isLogin],[checkAdmin.isAdmin], companyController.index);

router.post('/', companyController.insert);

router.delete('/:id', companyController.destroy);

router.get('/:id', companyController.show);

router.put('/:id', companyController.update);




module.exports = router;