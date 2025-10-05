const { 
  createExpense, 
  deleteExpense, 
  getCategoryExpense, 
  getAllExpenses, 
  emailSender 
} = require('../controller/expenseController');

const router = require('express').Router();

// Add new expense
router.post('/addExpense', createExpense);

// Delete expense
router.post('/deleteExpense', deleteExpense);

// Get expenses by category
router.get('/categoryExpense', getCategoryExpense);

// Get all expenses
router.get('/allExpenses', getAllExpenses);

// Send email
router.post('/sendEmail', emailSender);

module.exports = router;
