const express = require('express');
const { getBalances } = require('../controllers/balanceController');

const router = express.Router();

// Route to get the balances with other users
router.get('/get-balance', getBalances);

module.exports = router;
