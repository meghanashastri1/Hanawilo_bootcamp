const express = require('express');
const router = express.Router();
const { getUsers, postUser, deleteUsers, getUser, putUser, deleteUser, login, forgotPassword, resetPassword, updatePassword, logout } = require('../controllers/userController');
const adminValidator = require('../middlewares/utils/validators');
const protectedRoute = require('../middlewares/auth');



router.route('/login')
    .post(login)

router.route('/forgotpassword')
    .post(forgotPassword)

router.route('/resetpassword')
    .post(resetPassword)

router.route('/updatepassword')
    .post(updatePassword)

router.route('/logout')
    .post(logout)

router.route('/')
    .get(protectedRoute, adminValidator, getUsers)
    .post(postUser)
    .delete(protectedRoute, deleteUsers);

router.route('/:userId')
    .get(protectedRoute, getUser)
    .put(protectedRoute, putUser)
    .delete(protectedRoute, deleteUser);

module.exports = router;