const { createExpense, deleteExpense, getCategoryExpense, getAllExpenses, emailSender } = require('../controller/expenseController');

const router = require('express').Router();

router.get('/addExpense',createExpense)
router.get('/deleteExpense',deleteExpense)
router.get('/categoryExpense',getCategoryExpense)
router.get('/allExpenses',getAllExpenses)
router.get('/sendEmail',emailSender);

module.exports = router;