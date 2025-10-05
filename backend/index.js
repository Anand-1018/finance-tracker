const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('../backend/db/db');
const userRouter = require('./router/userRouter');
const expenseRouter = require('./router/expenseRouter');

dotenv.config(); // load .env variables
const app = express();

// Whitelist frontend origins
const allowedOrigins = [
  'http://localhost:3000', // local frontend
  'https://finance-tracker-blush-alpha.vercel.app' // Vercel frontend
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow access from this origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());
app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);

connectDb();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
