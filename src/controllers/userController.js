const db = require('../models/db');

exports.getUserProfile = (req, res) => {
    const userId = req.body.userId; // Assume user ID is passed in the request
    db.get(`SELECT email, currency FROM users WHERE id = ?`, [userId], (err, row) => {
        if (err || !row) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.json(row);
    });
};

exports.updateUserProfile = (req, res) => {
    const { userId, email, currency } = req.body;
    db.run(`UPDATE users SET email = ?, currency = ? WHERE id = ?`, [email, currency, userId], function (err) {
        if (err) {
            return res.status(400).json({ error: 'Failed to update profile.' });
        }
        res.json({ message: 'Profile updated successfully.' });
    });
};

exports.deleteUserAccount = (req, res) => {
    const userId = req.body.userId;
    db.run(`DELETE FROM users WHERE id = ?`, [userId], function (err) {
        if (err) {
            return res.status(400).json({ error: 'Failed to delete account.' });
        }
        res.json({ message: 'Account deleted successfully.' });
    });
};
