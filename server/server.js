import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './configs/connectDB.js';
import errorHandler from './middlewares/errorHandler.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

// PORT
const PORT = process.env.PORT || 5000;

// DB URI
const DB_URI = process.env.MONGO_DB_URI.replace('%PASSWORD%', process.env.MONGO_DB_PASSWORD);

// Initialize Application
const app = express();

// Connect to database
connectDB(DB_URI);

// middleware (logger)
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// middleware (bodyParser)
app.use(express.json());

// welcome
app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Welcome to ReplyNinja!' });
});

// routes
app.use('/api/v1/users', userRouter);

// errorHandler
app.use(errorHandler);

// listening to requests
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
