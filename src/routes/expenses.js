const express = require('express');
const {
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController');

const router = express.Router();

router.post('/add-expenses', addExpense);

router.get('/get-expenses', getExpenses);

router.put('/:id', updateExpense);

router.delete('/:id', deleteExpense);

module.exports = router;
