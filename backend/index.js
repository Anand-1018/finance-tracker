const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('../backend/db/db');
const userRouter = require('./router/userRouter');
const expenseRouter = require('./router/expenseRouter');

dotenv.config(); // make sure .env variables are loaded
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);

connectDb();

const port = process.env.PORT || 8080; // Use Render's PORT env variable
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
