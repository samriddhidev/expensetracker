const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expenses');
const balanceRoutes = require('./routes/balance');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/balances', balanceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
