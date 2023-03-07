const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');


router.post('/login', authController.loginUser);
router.post('/signup', userController.registerUser);

router.get('/logout', authController.logoutUser);
router.get('/',  userController.getAllUsers); 
router.get('/:id',  userController.getUserById);
router.put('/:id',  userController.updateUserById);
router.delete('/:id', authController.protect, userController.deleteUserById);

module.exports = router;
