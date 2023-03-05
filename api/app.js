const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const userRouter = require("./router/userRouter");
const notifyRouter = require("./router/notifyRouter");
const projectRouter = require("./router/projectRouter");
const AppError = require('./utils/appError');
const httpProxy = require('http-proxy');
const cors = require('cors');


const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json({ limit: '20kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/notify', notifyRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.json({
    status: 'error',
    message: err.message,
  });
});

module.exports = app;
