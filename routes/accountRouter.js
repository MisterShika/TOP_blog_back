const { Router } = require("express");
const accountRouter = Router();
const accountController = require('../controllers/accountController');

accountRouter.get('/allUsers', accountController.getUsers);


module.exports = accountRouter;