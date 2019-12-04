const express = require("express");
const router = express.Router();
const {
  userValidationRules,
  userValidateErrorHandling
} = require('../validators/validator');
const auth = require('../middleware/authenticator');

const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
  authenticateUser,
  loginUser
} = require("../controllers/usersController");


router
  .route('/')
  .get(auth, getUsers)
  .post(addUser);

router.route('/me').get(auth, authenticateUser);
router.route('/login').post(loginUser);

router
  .route('/:id')
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

module.exports = router;