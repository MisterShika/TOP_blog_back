const { Router } = require("express");
const accountRouter = Router();
const accountController = require('../controllers/accountController');

accountRouter.get('/', accountController.getUsers);
accountRouter.get('/:id', accountController.getSingleUser);

accountRouter.post('/addUser', accountController.postAddUser);


module.exports = accountRouter;