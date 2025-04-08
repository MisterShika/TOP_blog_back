const { Router } = require("express");
const accountRouter = Router();
const accountController = require('../controllers/accountController');

accountRouter.get('/allUsers', accountController.getUsers);
accountRouter.get('/:email', accountController.getSingleUser);

accountRouter.post('/addUser', accountController.postAddUser);


module.exports = accountRouter;