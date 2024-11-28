const db = require('../models/db');

// Get the balance with other users
exports.getBalances = (req, res) => {
    const { userId } = req.body;

    // Query to get balances with other users
    db.all(`
        SELECT other_user_id, SUM(value) as balance
        FROM expenses
        WHERE userId = ?
        GROUP BY other_user_id`, [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve balances.' });
        }
        res.json(rows);
    });
};
