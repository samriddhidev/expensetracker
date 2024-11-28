const express = require('express');
const { getUserProfile, updateUserProfile, deleteUserAccount } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.delete('/profile', deleteUserAccount);

module.exports = router;
