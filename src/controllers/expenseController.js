const db = require('../models/db');

// Add an expense
exports.addExpense = (req, res) => {
    const { name, value, currency, members, date, userId } = req.body;

    // Insert the expense into the expenses table
    db.run(
        `INSERT INTO expenses (name, value, currency, members, date, userId) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, value, currency, JSON.stringify(members), date, userId],
        function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to add expense.' });
            }
            res.json({ message: 'Expense added successfully.', expenseId: this.lastID });
        }
    );
};

// Get all expenses for a user
exports.getExpenses = (req, res) => {
    const { userId } = req.body;

    db.all(`SELECT * FROM expenses WHERE userId = ?`, [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve expenses.' });
        }
        res.json(rows);
    });
};

// Update an expense
exports.updateExpense = (req, res) => {
    const { name, value, currency, members, date } = req.body;
    const { id } = req.params;

    db.run(
        `UPDATE expenses SET name = ?, value = ?, currency = ?, members = ?, date = ? WHERE id = ?`,
        [name, value, currency, JSON.stringify(members), date, id],
        function (err) {
            if (err || this.changes === 0) {
                return res.status(500).json({ error: 'Failed to update expense or expense not found.' });
            }
            res.json({ message: 'Expense updated successfully.' });
        }
    );
};

// Delete an expense
exports.deleteExpense = (req, res) => {
    const { id } = req.params;

    db.run(`DELETE FROM expenses WHERE id = ?`, [id], function (err) {
        if (err || this.changes === 0) {
            return res.status(500).json({ error: 'Failed to delete expense or expense not found.' });
        }
        res.json({ message: 'Expense deleted successfully.' });
    });
};
