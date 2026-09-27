/*const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();
router.post('/register', register);
router.post('/login', login);

module.exports = router;
*/

const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);

module.exports = router;