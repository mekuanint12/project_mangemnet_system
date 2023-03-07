const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const router = express.Router();
const checkController = require('./controllers/checkController');
const userRouter = require("./router/userRouter");
const notifyRouter = require("./router/notifyRouter");
const projectRouter = require("./router/projectRouter");
const AppError = require('./utils/appError');



const app = express();

app.use(express.json({ limit: '50kb' }));
app.use(mongoSanitize());
app.use(cookieParser());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/notify', notifyRouter);
app.use('/api/v1/users', userRouter);

router.use('/check', checkController);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// this is error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.json({
    status: 'error',
    message: err.message,
  });
});

module.exports = app;
